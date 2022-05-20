<script setup>
import { computed, ref, watch } from 'vue'

import MonopolyLogo from '@/components/MonopolyLogo.vue'
import PropertyList from '@/components/PropertyList.vue'
import PropertyCard from '@/components/PropertyCard.vue'
import PlayerList from '@/components/PlayerList.vue'

import { properties as dataProperties } from '@/data/properties.js'
import { players as dataPlayers } from '@/data/players.js'

const dataActions = [
  {
    types: ['go'],
    label: () => `Pay salary $200 to ${player.value.name}`,
    action: () => {
      player.value.money = player.value.money + 200
    }
  },
  {
    types: ['property', 'station', 'utility'],
    label: () => `Sell it to ${player.value.name} for $${property.value.price}`,
    action: () => {
      player.value.money = player.value.money - property.value.price
      property.value.owner = playerId.value
    },
    noOwner: true
  },
  {
    types: ['property', 'station', 'utility'],
    label: () => `Get $${rent.value} for rent from ${player.value.name}`,
    action: () => {
      player.value.money = player.value.money - rent.value
      players.value[property.value.owner].money = players.value[property.value.owner].money + rent.value
    },
    hasRent: true,
    hasOwner: true
  },
  {
    types: ['property', 'station', 'utility'],
    label: () => `Mortgage property for $${property.value.price / 2}`,
    hasOwner: true
  },
  {
    types: ['property'],
    label: () => `Buy house for $${property.value.housePrice}`,
    hasOwner: true,
    noHouse: true
  },
  {
    types: ['property'],
    label: () => `Sell house for $${property.value.housePrice / 2}`,
    hasOwner: true,
    hasHouse: true
  }
]

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

const actions = computed(() => dataActions.filter(action => {
  if (!action.types.includes(property.value.type)) {
    return false
  }

  if (action.hasRent && property.value.owner === playerId.value) {
    return false
  }

  if (action.hasOwner && property.value.owner === null) {
    return false
  }

  if (action.noOwner && property.value.owner !== null) {
    return false
  }

  if (action.noHouse && !playerOwnsGroup.value) {
    return false
  }

  if (action.hasHouse && playerOwnsGroup.value) {
    return false
  }

  return true
}))

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
