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

<style scoped>
.brown {
  @apply border-t-8 border-amber-900;
}

.sky {
  @apply border-t-8 border-sky-300;
}

.purple {
  @apply border-r-8 border-fuchsia-700;
}

.orange {
  @apply border-r-8 border-orange-400;
}

.red {
  @apply border-b-8 border-red-600;
}

.yellow {
  @apply border-b-8 border-yellow-300;
}

.green {
  @apply border-l-8 border-green-600;
}

.blue {
  @apply border-l-8 border-blue-800;
}
</style>
