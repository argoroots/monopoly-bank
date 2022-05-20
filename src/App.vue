<script setup>
import { computed, ref, watch } from 'vue'

import { properties as dataProperties } from '@/data/properties.js'
import { players as dataPlayers } from '@/data/players.js'

import MonopolyLogo from '@/components/MonopolyLogo.vue'
import PropertyList from '@/components/PropertyList.vue'
import PropertyCard from '@/components/PropertyCard.vue'
import PlayerList from '@/components/PlayerList.vue'

const properties = ref(dataProperties)
const players = ref(dataPlayers)
const propertyId = ref()
const playerId = ref(0)

const actions = ref([
  {
    types: ['go'],
    label: () => `Pay salary $200 to ${player.value.name}`
  },
  {
    types: ['property', 'station', 'utility'],
    label: () => `Sell it to ${player.value.name} for $${property.value.price}`
  },
  {
    types: ['property', 'station', 'utility'],
    label: () => `Get $${property.value.rent} for rent from ${player.value.name}`
  },
  {
    types: ['property', 'station', 'utility'],
    label: () => `Mortgage property for $${property.value.price / 2}`
  },
  {
    types: ['property'],
    label: () => `Buy house for $${property.value.housePrice}`
  },
  {
    types: ['property'],
    label: () => `Sell house for $${property.value.housePrice / 2}`
  }
])

const property = computed(() => {
  const p = properties.value[propertyId.value]

  if (!p) {
    return
  }

  return {
    ...p,
    rent: p.rent ? p.rent[p.houses || 0] : null
  }
})

const player = computed(() => players.value[playerId.value])

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
