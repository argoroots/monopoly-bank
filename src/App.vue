<script setup>
import { computed, ref, watch } from 'vue'

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
      return property.value.rent[property.value.houses || 0] * 2
    } else {
      return property.value.rent[property.value.houses || 0]
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
  const result = []

  if (p.type === 'go') {
    result.push({
      label: `Pay salary $200 to ${u.name}`,
      action: () => {
        u.money = u.money + 200
      }
    })
  }

  if (['property', 'station', 'utility'].includes(p.type)) {
    if (p.owner === null) {
      result.push({
        label: `Sell it to ${u.name} for $${p.price}`,
        action: () => {
          u.money = u.money - p.price
          p.owner = playerId.value
        }
      })
    }

    if (p.owner !== null && p.owner !== playerId.value && !p.mortgage) {
      result.push({
        label: `Get $${rent.value} for rent from ${u.name}`,
        action: () => {
          u.money = u.money - rent.value
          players.value[p.owner].money = players.value[p.owner].money + rent.value
        }
      })
    }

    if (p.owner !== null && !p.mortgage) {
      result.push({
        label: `Mortgage property for $${p.price / 2}`,
        action: () => {
          players.value[p.owner].money = players.value[p.owner].money + p.price / 2
          p.mortgage = true
        }
      })
    }

    if (p.owner !== null && p.mortgage) {
      result.push({
        label: `Pay off the mortgage $${Math.round(p.price / 2 * 1.1)}`,
        action: () => {
          players.value[p.owner].money = players.value[p.owner].money - Math.round(p.price / 2 * 1.1)
          p.mortgage = false
        }
      })
    }
  }

  if (p.type === 'property') {
    // result.push({
    //   label: `Buy house for $${p.housePrice}`

    // })
    // result.push({
    //   label: `Sell house for $${p.housePrice / 2}`

    // })
  }

  return result
})

watch(playerId, (newVal) => {
  console.log('playerId', newVal)
})

watch(propertyId, (newVal) => {
  console.log('propertyId', newVal)
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
        <h1 class="text-2xl font-bold text-stone-900/80 tracking-wide">
          Monopoly-O-Matic
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
