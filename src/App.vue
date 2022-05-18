<script setup>
import PropertyView from '@/components/PropertyView.vue'

const properties = [
  {
    title: 'Go',
    row: 11,
    col: 11
  },
  {
    title: 'Old Kent Road',
    color: 'border-t-8 border-t-amber-900',
    colorPosition: 'top',
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
    color: 'border-t-8 border-t-amber-900',
    colorPosition: 'top',
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
    color: 'border-t-8 border-t-sky-300',
    colorPosition: 'top',
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
    color: 'border-t-8 border-t-sky-300',
    colorPosition: 'top',
    row: 11,
    col: 3
  },
  {
    title: 'Pentonville Road',
    color: 'border-t-8 border-t-sky-300',
    colorPosition: 'top',
    row: 11,
    col: 2
  },
  {
    title: 'Jail',
    row: 11,
    col: 1
  },
  {
    title: 'Pall Mall',
    color: 'border-r-8 border-r-fuchsia-700',
    colorPosition: 'right',
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
    color: 'border-r-8 border-r-fuchsia-700',
    colorPosition: 'right',
    row: 8,
    col: 1
  },
  {
    title: 'Northumberland Avenue',
    color: 'border-r-8 border-r-fuchsia-700',
    colorPosition: 'right',
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
    color: 'border-r-8 border-r-orange-400',
    colorPosition: 'right',
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
    color: 'border-r-8 border-r-orange-400',
    colorPosition: 'right',
    row: 3,
    col: 1
  },
  {
    title: 'Vine Street',
    color: 'border-r-8 border-r-orange-400',
    colorPosition: 'right',
    row: 2,
    col: 1
  },
  {
    title: 'Free Parking',
    row: 1,
    col: 1
  },
  {
    title: 'The Strand',
    color: 'border-b-8 border-b-red-600',
    colorPosition: 'bottom',
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
    color: 'border-b-8 border-b-red-600',
    colorPosition: 'bottom',
    row: 1,
    col: 4
  },
  {
    title: 'Trafalgar Square',
    color: 'border-b-8 border-b-red-600',
    colorPosition: 'bottom',
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
    color: 'border-b-8 border-b-yellow-300',
    colorPosition: 'bottom',
    row: 1,
    col: 7
  },
  {
    title: 'Coventry Street',
    color: 'border-b-8 border-b-yellow-300',
    colorPosition: 'bottom',
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
    color: 'border-b-8 border-b-yellow-300',
    colorPosition: 'bottom',
    row: 1,
    col: 10
  },
  {
    title: 'Go to Jail',
    row: 1,
    col: 11
  },
  {
    title: 'Regent Street',
    color: 'border-l-8 border-l-green-600',
    colorPosition: 'left',
    row: 2,
    col: 11
  },
  {
    title: 'Oxford Street',
    color: 'border-l-8 border-l-green-600',
    colorPosition: 'left',
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
    color: 'border-l-8 border-l-green-600',
    colorPosition: 'left',
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
    color: 'border-l-8 border-l-blue-800',
    colorPosition: 'left',
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
    color: 'border-l-8 border-l-blue-800',
    colorPosition: 'left',
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
      :color="p.color"
      :color-position="p.colorPosition"
      :row="p.row"
      :col="p.col"
    />
    <div class="center">
      Monopoly-O-Matic
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
  @apply flex justify-center items-center border border-white bg-emerald-100;
  grid-row: span 9 / span 9;
  grid-column: span 9 / span 9;
}
</style>
