<script setup>
import { defineProps } from 'vue'

defineProps({
  title: {
    type: String,
    required: true
  },
  className: {
    type: String,
    default: null
  },
  row: {
    type: Number,
    required: true
  },
  col: {
    type: Number,
    required: true
  }
})
</script>

<template>
  <div
    class="border border-white bg-emerald-100 hover:bg-emerald-50 cursor-pointer"
    :style="{
      'grid-row': row,
      'grid-column': col
    }"
  >
    <div
      class="w-full h-full p-2 flex justify-center items-center text-center text-sm text-stone-900/80 tracking-wide"
      :class="className"
    >
      {{ title }}
    </div>
  </div>
</template>
