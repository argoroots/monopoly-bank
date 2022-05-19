<script setup>
import { defineProps } from 'vue'

defineProps({
  players: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div class="m-10 flex flex-col justify-center text-stone-900/80 divide-y divide-stone-900/20">
    <div
      v-for="(p, idx) in players"
      :key="idx"
      class="py-2 pl-1 flex flex-row justify-between items-center cursor-pointer"
    >
      <img
        :src="p.icon"
        class="h-4 w-4"
      >
      <div class="grow ml-2">
        {{ p.name }}
      </div>
      <div class="font-mono">
        {{ p.money }}
      </div>
    </div>
  </div>
</template>
