<script setup>
import { defineEmits, defineProps, ref } from 'vue'

const selectedId = ref()
const emit = defineEmits(['update:modelValue'])

const props = defineProps({
  modelValue: {
    type: Number,
    default: null
  },
  properties: {
    type: Array,
    required: true
  }
})

function onClick (id) {
  if (!props.properties[id].type) {
    return
  }
  selectedId.value = selectedId.value === id ? null : id

  emit('update:modelValue', selectedId.value)
}
</script>

<template>
  <div
    v-for="(p, idx) in properties"
    :key="idx"
    class="border border-white bg-emerald-100"
    :class="{
      'bg-emerald-50': selectedId === idx,
      'cursor-pointer hover:bg-emerald-50': p.type
    }"
    :style="{
      'grid-row': p.row,
      'grid-column': p.col,
    }"
    @click="onClick(idx)"
  >
    <div
      class="w-full h-full p-2 flex justify-center items-center text-center text-sm text-stone-900/80 tracking-wide"
      :class="p.class"
    >
      {{ p.title }}
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
