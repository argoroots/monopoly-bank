<script setup>
import { defineProps, ref, watchEffect } from 'vue'

const props = defineProps({
  src: {
    type: String,
    required: true
  }
})

const image = ref()

watchEffect(async () => {
  const srcArray = props.src.split('.')

  switch (srcArray[1]) {
    case 'png':
      image.value = (await import(/* @vite-ignore */ `../assets/images/${srcArray[0]}.png`)).default
      break
    case 'svg':
      image.value = (await import(/* @vite-ignore */ `../assets/images/${srcArray[0]}.svg`)).default
      break
  }
})
</script>

<template>
  <img :src="image">
</template>
