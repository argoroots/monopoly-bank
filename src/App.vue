<script setup>
import PropertyView from '@/components/PropertyView.vue'
import MonopolyLogo from '@/components/MonopolyLogo.vue'

const properties = [
  {
    title: 'Go',
    class: 'font-bold',
    row: 11,
    col: 11
  },
  {
    title: 'Old Kent Road',
    class: 'border-t-8 border-t-amber-900',
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
    class: 'border-t-8 border-t-amber-900',
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
    class: 'border-t-8 border-t-sky-300',
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
    class: 'border-t-8 border-t-sky-300',
    row: 11,
    col: 3
  },
  {
    title: 'Pentonville Road',
    class: 'border-t-8 border-t-sky-300',
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
    class: 'border-r-8 border-r-fuchsia-700',
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
    class: 'border-r-8 border-r-fuchsia-700',
    row: 8,
    col: 1
  },
  {
    title: 'Northumberland Avenue',
    class: 'border-r-8 border-r-fuchsia-700',
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
    class: 'border-r-8 border-r-orange-400',
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
    class: 'border-r-8 border-r-orange-400',
    row: 3,
    col: 1
  },
  {
    title: 'Vine Street',
    class: 'border-r-8 border-r-orange-400',
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
    class: 'border-b-8 border-b-red-600',
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
    class: 'border-b-8 border-b-red-600',
    row: 1,
    col: 4
  },
  {
    title: 'Trafalgar Square',
    class: 'border-b-8 border-b-red-600',
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
    class: 'border-b-8 border-b-yellow-300',
    row: 1,
    col: 7
  },
  {
    title: 'Coventry Street',
    class: 'border-b-8 border-b-yellow-300',
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
    class: 'border-b-8 border-b-yellow-300',
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
    class: 'border-l-8 border-l-green-600',
    row: 2,
    col: 11
  },
  {
    title: 'Oxford Street',
    class: 'border-l-8 border-l-green-600',
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
    class: 'border-l-8 border-l-green-600',
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
    class: 'border-l-8 border-l-blue-800',
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
    class: 'border-l-8 border-l-blue-800',
    row: 10,
    col: 11
  }
]
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
    />
    <div class="center">
      <monopoly-logo />
      <h1 class="text-3xl font-bold text-stone-900/80 tracking-wide">
        Monopoly-O-Matic
      </h1>
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
  @apply flex flex-col justify-center items-center border border-white bg-emerald-100;
  grid-row: span 9 / span 9;
  grid-column: span 9 / span 9;
}
</style>
