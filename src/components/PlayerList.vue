<script setup>
import { defineEmits, defineProps, ref } from 'vue'

const selectedId = ref()
const emit = defineEmits(['update:modelValue'])

defineProps({
  modelValue: {
    type: Number,
    default: null
  },
  players: {
    type: Array,
    required: true
  }
})

function onClick (id) {
  selectedId.value = selectedId.value === id ? null : id

  emit('update:modelValue', selectedId.value)
}
</script>

<template>
  <div class="m-10 flex flex-col justify-center text-stone-900/80 divide-y divide-stone-900/20">
    <div
      v-for="(p, idx) in players"
      :key="idx"
      class="py-2 px-1 flex flex-row justify-between items-center cursor-pointer"
      :class="{
        'bg-emerald-50': selectedId === idx
      }"
      @click="onClick(idx)"
    >
      <img
        :src="p.icon"
        class="h-4 w-4"
      >
      <div class="grow ml-2">
        {{ p.name }}
      </div>
      <div class="font-mono">
        ${{ p.money }}
      </div>
    </div>
  </div>
</template>
