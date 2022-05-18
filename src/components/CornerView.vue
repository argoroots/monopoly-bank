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
  <div class="w-32 h-32 flex justify-center items-center border border-slate-700 border-opacity-70">
    <h3 class="m-0 p-0">
      {{ title }}
    </h3>
  </div>
</template>
