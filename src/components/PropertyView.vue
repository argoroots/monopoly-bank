<script setup>
import { defineProps } from 'vue'

defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="grow flex justify-center items-center border border-slate-700 border-opacity-70">
    {{ title }}
  </div>
</template>
