<script setup>
import { defineProps } from 'vue'

defineProps({
  title: {
    type: String,
    required: true
  },
  color: {
    type: String,
    default: null
  },
  colorPosition: {
    type: String,
    required: true
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
    class="border border-white bg-emerald-100 hover:bg-emerald-200 cursor-pointer"
    :style="{
      'grid-row': row,
      'grid-column': col
    }"
  >
    <div
      class="w-full h-full flex justify-center items-center text-center text-xs"
      :class="color"
    >
      {{ title }}
    </div>
  </div>
</template>
