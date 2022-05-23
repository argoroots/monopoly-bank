<script setup>
import { computed, defineEmits, defineProps } from 'vue'
import ImageComponent from '@/components/ImageComponent.vue'

const emit = defineEmits(['update:modelValue', 'close'])

const props = defineProps({
  modelValue: {
    type: Array,
    required: true
  }
})

const players = computed({
  get () {
    return props.modelValue
  },
  set (val) {
    emit('update:modelValue', val)
  }
})
</script>

<template>
  <div
    class="h-full w-80 mx-auto shadow-md bg-white flex flex-col"
  >
    <div class="py-4 grow w-full text-stone-900/80 divide-y divide-stone-900/20 overflow-y-auto">
      <div
        v-for="(p, idx) in players"
        :key="idx"
        class="mx-4 py-2 px-1 flex flex-row justify-between items-center"
      >
        <input
          v-model="p.selected"
          type="checkbox"
        >
        <image-component
          :src="p.icon"
          class="ml-3 mr-2 h-4 w-4"
          @click="p.selected = !p.selected"
        />
        <input
          v-model="p.name"
          class="px-1 grow"
        >
      </div>
    </div>
    <button
      class="m-4 py-1 px-2 pr-3 text-center text-sm text-stone-900/70 border border-transparent hover:border-stone-900/20 rounded-sm active:bg-stone-50"
      @click="emit('close')"
    >
      Close
    </button>
  </div>
</template>
