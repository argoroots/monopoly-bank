<script setup>
import { ref } from 'vue'

import PropertyView from '@/components/PropertyView.vue'
import PropertyCard from '@/components/PropertyCard.vue'
import MonopolyLogo from '@/components/MonopolyLogo.vue'

const selectedProperty = ref()
const properties = [
  {
    title: 'Go',
    class: 'font-bold',
    row: 11,
    col: 11
  },
  {
    title: 'Old Kent Road',
    class: 'brown',
    row: 11,
    col: 10
  },
  {
    title: 'Community Chest',
    row: 11,
    col: 9
  },
  {
    title: 'Whitechapel Road',
    class: 'brown',
    row: 11,
    col: 8
  },
  {
    title: 'Income Tax',
    row: 11,
    col: 7
  },
  {
    title: 'Kings Cross Station',
    row: 11,
    col: 6
  },
  {
    title: 'The Angel Islington',
    class: 'sky',
    row: 11,
    col: 5
  },
  {
    title: 'Chance',
    row: 11,
    col: 4
  },
  {
    title: 'Euston Road',
    class: 'sky',
    row: 11,
    col: 3
  },
  {
    title: 'Pentonville Road',
    class: 'sky',
    row: 11,
    col: 2
  },
  {
    title: 'Jail',
    class: 'font-bold',
    row: 11,
    col: 1
  },
  {
    title: 'Pall Mall',
    class: 'purple',
    row: 10,
    col: 1
  },
  {
    title: 'Electric Company',
    row: 9,
    col: 1
  },
  {
    title: 'Whitehall',
    class: 'purple',
    row: 8,
    col: 1
  },
  {
    title: 'Northumberland Avenue',
    class: 'purple',
    row: 7,
    col: 1
  },
  {
    title: 'Marylebone Station',
    row: 6,
    col: 1
  },
  {
    title: 'Bow Street',
    class: 'orange',
    row: 5,
    col: 1
  },
  {
    title: 'Community Chest',
    row: 4,
    col: 1
  },
  {
    title: 'Marlborough Street',
    class: 'orange',
    row: 3,
    col: 1
  },
  {
    title: 'Vine Street',
    class: 'orange',
    row: 2,
    col: 1
  },
  {
    title: 'Free Parking',
    class: 'font-bold',
    row: 1,
    col: 1
  },
  {
    title: 'The Strand',
    class: 'red',
    row: 1,
    col: 2
  },
  {
    title: 'Chance',
    row: 1,
    col: 3
  },
  {
    title: 'Fleet Street',
    class: 'red',
    row: 1,
    col: 4
  },
  {
    title: 'Trafalgar Square',
    class: 'red',
    row: 1,
    col: 5
  },
  {
    title: 'Fenchurch St. Station',
    row: 1,
    col: 6
  },
  {
    title: 'Leicester Square',
    class: 'yellow',
    row: 1,
    col: 7
  },
  {
    title: 'Coventry Street',
    class: 'yellow',
    row: 1,
    col: 8
  },
  {
    title: 'Water Works',
    row: 1,
    col: 9
  },
  {
    title: 'Piccadilly',
    class: 'yellow',
    row: 1,
    col: 10
  },
  {
    title: 'Go to Jail',
    class: 'font-bold',
    row: 1,
    col: 11
  },
  {
    title: 'Regent Street',
    class: 'green',
    row: 2,
    col: 11
  },
  {
    title: 'Oxford Street',
    class: 'green',
    row: 3,
    col: 11
  },
  {
    title: 'Community Chest',
    row: 4,
    col: 11
  },
  {
    title: 'Bond Street',
    class: 'green',
    row: 5,
    col: 11
  },
  {
    title: 'Liverpool St. Station',
    row: 6,
    col: 11
  },
  {
    title: 'Chance',
    row: 7,
    col: 11
  },
  {
    title: 'Park Lane',
    class: 'blue',
    row: 8,
    col: 11
  },
  {
    title: 'Super Tax',
    row: 9,
    col: 11
  },
  {
    title: 'Mayfair',
    class: 'blue',
    row: 10,
    col: 11
  }
]

function onPropertyClick (property) {
  selectedProperty.value = property
}
</script>

<template>
  <div class="board">
    <property-view
      v-for="(p, idx) in properties"
      :key="idx"
      :title="p.title"
      :class-name="p.class"
      :row="p.row"
      :col="p.col"
      @mouseover="onPropertyClick(p)"
    />
    <div
      class="center"
      @click="onPropertyClick()"
    >
      <div class="flex flex-col justify-center items-center">
        .
      </div>
      <div class="flex flex-col justify-center items-center">
        <monopoly-logo />
        <h1 class="text-2xl font-bold text-stone-900/80 tracking-wide">
          Monopoly-O-Matic
        </h1>
      </div>
      <Transition>
        <property-card
          v-if="selectedProperty"
          :title="selectedProperty.title"
          :class-name="selectedProperty.class"
        />
      </Transition>
    </div>
  </div>
</template>

<style>
.board {
  @apply h-full grid justify-center content-center border border-white;
  grid-template-columns: repeat(11, minmax(0, 1fr));
  grid-template-rows: repeat(11, minmax(0, 1fr));
}

.center {
  @apply grid grid-cols-3 border border-white bg-emerald-100;
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
