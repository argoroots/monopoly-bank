<script setup>
import PropertyList from '@/components/PropertyList.vue'
import CornerView from '@/components/CornerView.vue'

const properties = [
  { title: '' },
  { title: '' },
  { title: '' },
  { title: '' },
  { title: '' },
  { title: '' },
  { title: '' },
  { title: '' },
  { title: '' }
]
</script>

<template>
  <div class="h-screen aspect-square mx-auto flex flex-col bg-emerald-50 border border-slate-700">
    <div class="flex">
      <corner-view title="Free Parking" />
      <property-list :properties="properties" />
      <corner-view title="Go to Jail" />
    </div>

    <div class="grow flex">
      <property-list
        :properties="properties"
        is-vertical
      />
      <div class="grow flex justify-center items-center border border-slate-700 border-opacity-70">
        <h1>Monopoly-O-Matic</h1>
      </div>
      <property-list
        :properties="properties"
        is-vertical
      />
    </div>

    <div class="flex">
      <corner-view title="Jail" />
      <property-list :properties="properties" />
      <corner-view title="Go" />
    </div>
  </div>
</template>

<style>
</style>
