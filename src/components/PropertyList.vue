<script setup>
import { defineProps } from 'vue'
import PropertyView from '@/components/PropertyView.vue'

defineProps({
  isVertical: {
    type: Boolean,
    default: false
  },
  properties: {
    type: Array,
    required: true
  }
})

</script>

<template>
  <div
    class="flex"
    :class="{
      'flex-col w-32': isVertical,
      'flex-row grow': !isVertical,
    }"
  >
    <property-view
      v-for="(p, idx) in properties"
      :key="idx"
      :title="p.title"
      :color="p.color"
    />
  </div>
</template>
