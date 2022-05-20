<script setup>
import { computed, ref } from 'vue'

import MonopolyLogo from '@/components/MonopolyLogo.vue'
import PropertyList from '@/components/PropertyList.vue'
import PropertyCard from '@/components/PropertyCard.vue'
import PlayerList from '@/components/PlayerList.vue'

import { properties as dataProperties } from '@/data/properties.js'
import { players as dataPlayers } from '@/data/players.js'

const properties = ref(dataProperties)
const players = ref(dataPlayers)
const propertyId = ref()
const playerId = ref(0)
const dice = ref(12)

const property = computed(() => properties.value[propertyId.value])

const player = computed(() => players.value[playerId.value])

const sameGroupProperties = computed(() => {
  if (!property.value) {
    return null
  }

  return properties.value.filter(p => p.group === property.value.group)
})

const maxHouses = computed(() => {
  if (!property.value) {
    return null
  }

  const houses = sameGroupProperties.value.map(p => p.houses)
  const sum = houses.reduce((a, b) => a + b, 0)
  return (sum / houses.length) || 0
})

const playerGroupProperties = computed(() => {
  if (!property.value) {
    return null
  }

  return sameGroupProperties.value.filter(p => p.owner !== null && p.owner === property.value.owner)
})

const playerOwnsGroup = computed(() => {
  return sameGroupProperties.value.length === playerGroupProperties.value.length
})

const rent = computed(() => {
  if (!property.value) {
    return null
  }

  if (property.value.type === 'property') {
    if (playerOwnsGroup.value) {
      return property.value.rent[property.value.houses] * 2
    } else {
      return property.value.rent[property.value.houses]
    }
  }

  if (property.value.type === 'station') {
    const idx = playerGroupProperties.value.length
    return property.value.rent[idx - 1]
  }

  if (property.value.type === 'utility') {
    const idx = playerGroupProperties.value.length
    return property.value.rent[idx - 1] * dice.value
  }

  return 0
})

const actions = computed(() => {
  const p = property.value
  const u = player.value
  const pu = players.value[p.owner]
  const result = []

  if (p.type === 'go') {
    result.push({
      label: `Pay $${p.price} salary to ${u.name}`,
      action: () => {
        u.balance = u.balance + p.price
      }
    })
  }

  if (p.type === 'jail') {
    result.push({
      label: `Collect $${p.price} fine from ${u.name}`,
      action: () => {
        u.balance = u.balance - p.price
      }
    })
  }

  if (p.type === 'tax') {
    result.push({
      label: `Get $${p.price} tax from ${u.name}`,
      action: () => {
        u.balance = u.balance - p.price
      }
    })
  }

  if (['property', 'station', 'utility'].includes(p.type)) {
    if (p.owner === null) {
      result.push({
        disabled: u.balance < p.price,
        label: `Sell property to ${u.name} for $${p.price}`,
        action: () => {
          u.balance = u.balance - p.price
          p.owner = playerId.value
        }
      })
    }

    if (p.owner !== null && p.owner !== playerId.value) {
      result.push({
        disabled: p.mortgage,
        label: `Transfer $${rent.value} rent from ${u.name} to ${pu.name}`,
        action: () => {
          u.balance = u.balance - rent.value
          pu.balance = pu.balance + rent.value
        }
      })
    }

    if (p.owner !== null && !p.mortgage) {
      result.push({
        disabled: p.houses !== 0,
        label: `Mortgage property for $${p.price / 2}`,
        action: () => {
          pu.balance = pu.balance + p.price / 2
          p.mortgage = true
        }
      })
    }

    if (p.owner !== null && p.mortgage) {
      result.push({
        disabled: pu.balance < p.price / 2 * 1.1,
        label: `Lift mortgage for $${Math.round(p.price / 2 * 1.1)}`,
        action: () => {
          pu.balance = pu.balance - Math.round(p.price / 2 * 1.1)
          p.mortgage = false
        }
      })
    }
  }

  if (p.type === 'property') {
    if (maxHouses.value >= p.houses && p.houses < 5 && p.owner !== null && !p.mortgage && playerOwnsGroup.value) {
      result.push({
        disabled: pu.balance < p.housePrice,
        label: p.houses < 4 ? `Sell house #${p.houses + 1} for $${p.housePrice}` : `Buy hotel for $${p.housePrice}`,
        action: () => {
          pu.balance = pu.balance - p.housePrice
          p.houses = p.houses + 1
        }
      })
    }

    if (maxHouses.value <= p.houses && p.houses > 0 && p.owner !== null && !p.mortgage && playerOwnsGroup.value) {
      result.push({
        label: p.houses < 5 ? `Buy back house #${p.houses} for $${p.housePrice / 2}` : `Sell hotel for $${p.housePrice / 2}`,
        action: () => {
          pu.balance = pu.balance + p.housePrice / 2
          p.houses = p.houses - 1
        }
      })
    }
  }

  return result
})
</script>

<template>
  <div class="board">
    <property-list
      v-model="propertyId"
      :properties="properties"
    />

    <div class="center">
      <player-list
        v-model="playerId"
        :players="players"
      />

      <div class="flex flex-col justify-center items-center">
        <monopoly-logo />
        <h1 class="w-full text-2xl text-center font-bold text-stone-900/80 tracking-wide">
          Monopoly-O-Matic
          <span class="block ml-48 italic text-sm font-thin">by Argo Roots</span>
        </h1>
      </div>
      <transition>
        <property-card
          v-if="property"
          :property="property"
          :player="player"
          :actions="actions"
        />
      </transition>
    </div>
  </div>
</template>

<style>
.board {
  @apply h-full grid justify-center content-center border border-white bg-emerald-100;
  grid-template-columns: repeat(11, minmax(0, 1fr));
  grid-template-rows: repeat(11, minmax(0, 1fr));
}

.center {
  @apply grid grid-cols-3 border border-white;
  grid-row: span 9 / span 9;
  grid-column: span 9 / span 9;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
