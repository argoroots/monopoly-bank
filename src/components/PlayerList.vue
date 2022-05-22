<script setup>
import { computed, defineEmits, defineProps } from 'vue'
import ImageComponent from '@/components/ImageComponent.vue'

const emit = defineEmits(['update:modelValue'])

const props = defineProps({
  modelValue: {
    type: Number,
    default: null
  },
  players: {
    type: Array,
    required: true
  }
})

const selectedId = computed({
  get () {
    return props.modelValue
  },
  set (val) {
    emit('update:modelValue', val)
  }
})
</script>

<template>
  <div class="m-10 overflow-y-auto ">
    <div class="flex flex-col justify-center text-stone-900/80 divide-y divide-stone-900/20">
      <div
        v-for="(p, idx) in players"
        :key="idx"
        class="py-2 px-1 flex flex-row justify-between items-center hover:bg-emerald-50 cursor-pointer"
        :class="{
          'bg-emerald-50': selectedId === idx
        }"
        @click="selectedId = idx"
      >
        <image-component
          :src="p.icon"
          class="h-4 w-4"
        />
        <div class="grow ml-2">
          {{ p.name }}
        </div>
        <div
          class="font-mono"
          :class="{
            'text-red-700': p.balance < 0
          }"
        >
          £{{ p.balance }}
        </div>
      </div>
    </div>
  </div>
</template>
