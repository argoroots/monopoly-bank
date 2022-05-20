<script setup>
import { computed, ref, watch } from 'vue'

import MonopolyLogo from '@/components/MonopolyLogo.vue'
import PropertyList from '@/components/PropertyList.vue'
import PropertyCard from '@/components/PropertyCard.vue'
import PlayerList from '@/components/PlayerList.vue'

import HatIcon from '@/assets/icons/icons8-top-hat-60.png'
import BattleshipIcon from '@/assets/icons/icons8-battleship-60.png'
import CarIcon from '@/assets/icons/icons8-sedan-60.png'
import DogIcon from '@/assets/icons/icons8-shiba-inu-60.png'
import CatIcon from '@/assets/icons/icons8-pet-commands-stay-60.png'
import TrexIcon from '@/assets/icons/icons8-dinosaur-60.png'
import PenguinIcon from '@/assets/icons/icons8-penguin-60.png'
import DuckyIcon from '@/assets/icons/icons8-rubber-ducky-60.png'

const properties = ref([
  {
    title: 'Go',
    class: 'font-bold',
    row: 11,
    col: 11
  },
  {
    title: 'Old Kent Road',
    class: 'brown',
    price: 60,
    rent: [2, 10, 30, 90, 160, 250],
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
    price: 60,
    rent: [4, 20, 60, 180, 320, 450],
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
    price: 200,
    row: 11,
    col: 6
  },
  {
    title: 'The Angel Islington',
    class: 'sky',
    price: 100,
    rent: [6, 30, 90, 270, 400, 550],
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
    price: 100,
    rent: [6, 30, 90, 270, 400, 550],
    row: 11,
    col: 3
  },
  {
    title: 'Pentonville Road',
    class: 'sky',
    price: 120,
    rent: [8, 40, 100, 300, 450, 600],
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
    price: 140,
    rent: [10, 50, 150, 450, 625, 750],
    row: 10,
    col: 1
  },
  {
    title: 'Electric Company',
    price: 150,
    row: 9,
    col: 1
  },
  {
    title: 'Whitehall',
    class: 'purple',
    price: 140,
    rent: [10, 50, 150, 450, 625, 750],
    row: 8,
    col: 1
  },
  {
    title: 'Northumberland Avenue',
    class: 'purple',
    price: 160,
    rent: [12, 60, 180, 500, 700, 900],
    row: 7,
    col: 1
  },
  {
    title: 'Marylebone Station',
    price: 200,
    row: 6,
    col: 1
  },
  {
    title: 'Bow Street',
    class: 'orange',
    price: 180,
    rent: [14, 70, 200, 550, 750, 950],
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
    price: 180,
    rent: [14, 70, 200, 550, 750, 950],
    row: 3,
    col: 1
  },
  {
    title: 'Vine Street',
    class: 'orange',
    price: 200,
    rent: [16, 80, 220, 600, 800, 1000],
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
    price: 220,
    rent: [18, 90, 250, 700, 875, 1050],
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
    price: 220,
    rent: [18, 90, 250, 700, 875, 1050],
    row: 1,
    col: 4
  },
  {
    title: 'Trafalgar Square',
    class: 'red',
    price: 240,
    rent: [20, 100, 300, 750, 925, 1100],
    row: 1,
    col: 5
  },
  {
    title: 'Fenchurch St. Station',
    price: 200,
    row: 1,
    col: 6
  },
  {
    title: 'Leicester Square',
    class: 'yellow',
    price: 260,
    rent: [22, 110, 330, 800, 975, 1150],
    row: 1,
    col: 7
  },
  {
    title: 'Coventry Street',
    class: 'yellow',
    price: 260,
    rent: [22, 110, 330, 800, 975, 1150],
    row: 1,
    col: 8
  },
  {
    title: 'Water Works',
    price: 150,
    row: 1,
    col: 9
  },
  {
    title: 'Piccadilly',
    class: 'yellow',
    price: 280,
    rent: [22, 120, 360, 850, 1025, 1200],
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
    price: 300,
    rent: [26, 130, 390, 900, 1100, 1275],
    row: 2,
    col: 11
  },
  {
    title: 'Oxford Street',
    class: 'green',
    price: 300,
    rent: [26, 130, 390, 900, 1100, 1275],
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
    price: 320,
    rent: [28, 150, 450, 1000, 1200, 1400],
    row: 5,
    col: 11
  },
  {
    title: 'Liverpool St. Station',
    price: 200,
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
    price: 350,
    rent: [35, 175, 500, 1100, 1300, 1500],
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
    price: 400,
    rent: [50, 200, 600, 1400, 1700, 2000],
    row: 10,
    col: 11
  }
])

const players = ref([
  {
    name: 'Top Hat',
    icon: HatIcon,
    money: 1500
  },
  {
    name: 'Battleship',
    icon: BattleshipIcon,
    money: 1500
  },
  {
    name: 'Race Car',
    icon: CarIcon,
    money: 1500
  },
  {
    name: 'Scottie Dog',
    icon: DogIcon,
    money: 1500
  },
  {
    name: 'Cat (Hazel)',
    icon: CatIcon,
    money: 1500
  },
  {
    name: 'T-Rex',
    icon: TrexIcon,
    money: 1500
  },
  {
    name: 'Penguin',
    icon: PenguinIcon,
    money: 1500
  },
  {
    name: 'Rubber Ducky',
    icon: DuckyIcon,
    money: 1500
  }
])

const propertyId = ref()
const playerId = ref()

const property = computed(() => properties.value[propertyId.value])

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
        />
      </transition>
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
