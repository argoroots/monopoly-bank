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
    class="m-8 flex justify-center items-center"
  >
    <div class="w-full h-80 p-3 bg-white shadow-lg">
      <div
        class="w-full h-full flex flex-col justify-center content-between text-center text-sm text-stone-900/80 border-2 border-stone-700 bg-white"
        :class="className"
      >
        <div class="title w-full p-3 uppercase font-bold text-stone-700">
          {{ title }}
        </div>
        <div class="grow" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.brown {
  @apply border-amber-900;
}

.brown .title {
  @apply text-white bg-amber-900;
}

.sky {
  @apply border-sky-300;
}

.sky .title {
  @apply text-white bg-sky-300;
}

.purple {
  @apply border-fuchsia-700;
}

.purple .title {
  @apply text-white bg-fuchsia-700;
}

.orange {
  @apply border-orange-400;
}

.orange .title {
  @apply text-white bg-orange-400;
}

.red {
  @apply border-red-600;
}

.red .title {
  @apply text-white bg-red-600;
}

.yellow {
  @apply border-yellow-300;
}

.yellow .title {
  @apply text-white bg-yellow-300;
}

.green {
  @apply border-green-600;
}

.green .title {
  @apply text-white bg-green-600;
}

.blue {
  @apply border-blue-800;
}

.blue .title {
  @apply text-white bg-blue-800;
}
</style>
