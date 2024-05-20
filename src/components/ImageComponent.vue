<script setup>
import { computed, defineProps } from 'vue'

const props = defineProps({
  src: {
    type: String,
    required: true
  }
})

const image = computed(() =>new URL(`../assets/images/${props.src}`, import.meta.url).href)
</script>

<template>
  <img :src="image">
</template>
