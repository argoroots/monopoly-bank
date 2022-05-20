<script setup>
import { defineProps } from 'vue'

defineProps({
  property: {
    type: Object,
    default: null
  },
  player: {
    type: Object,
    default: null
  },
  actions: {
    type: Array,
    default: null
  }
})
</script>

<template>
  <div
    class="m-10 flex justify-center items-center"
  >
    <div class="w-full h-80 p-3 bg-white shadow-lg">
      <div
        class="w-full h-full flex flex-col justify-center content-between text-center text-sm text-stone-900/80 border-2 border-stone-700 bg-white"
        :class="property.group"
      >
        <div class="title w-full p-3 uppercase font-bold text-stone-700">
          {{ property.title }}
        </div>
        <div class="grow flex flex-col divide-y divide-stone-200 text-stone-500">
          <button
            v-for="(action,idx) in actions"
            :key="idx"
            class="p-2 flex-1 hover:bg-stone-100"
            @click="action.action"
          >
            {{ action.label }}
          </button>
        </div>
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
