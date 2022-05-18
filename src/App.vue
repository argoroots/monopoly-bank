<script setup>
import PropertyList from '@/components/PropertyList.vue'
import CornerView from '@/components/CornerView.vue'

const properties = {
  bottom: [
    {
      title: '',
      color: 'bg-amber-900'
    },
    {
      title: '',
      color: ''
    },
    {
      title: '',
      color: 'bg-amber-900'
    },
    {
      title: '',
      color: ''
    },
    {
      title: '',
      color: ''
    },
    {
      title: '',
      color: 'bg-sky-300'
    },
    {
      title: '',
      color: ''
    },
    {
      title: '',
      color: 'bg-sky-300'
    },
    {
      title: '',
      color: 'bg-sky-300'
    }
  ],
  left: [
    {
      title: '',
      color: 'bg-fuchsia-700'
    },
    {
      title: '',
      color: ''
    },
    {
      title: '',
      color: 'bg-fuchsia-700'
    },
    {
      title: '',
      color: 'bg-fuchsia-700'
    },
    {
      title: '',
      color: ''
    },
    {
      title: '',
      color: 'bg-orange-400'
    },
    {
      title: '',
      color: ''
    },
    {
      title: '',
      color: 'bg-orange-400'
    },
    {
      title: '',
      color: 'bg-orange-400'
    }
  ],
  top: [
    {
      title: '',
      color: 'bg-red-600'
    },
    {
      title: '',
      color: ''
    },
    {
      title: '',
      color: 'bg-red-600'
    },
    {
      title: '',
      color: 'bg-red-600'
    },
    {
      title: '',
      color: ''
    },
    {
      title: '',
      color: 'bg-yellow-300'
    },
    {
      title: '',
      color: 'bg-yellow-300'
    },
    {
      title: '',
      color: ''
    },
    {
      title: '',
      color: 'bg-yellow-300'
    }
  ],
  right: [
    {
      title: '',
      color: 'bg-green-600'
    },
    {
      title: '',
      color: 'bg-green-600'
    },
    {
      title: '',
      color: ''
    },
    {
      title: '',
      color: 'bg-green-600'
    },
    {
      title: '',
      color: ''
    },
    {
      title: '',
      color: ''
    },
    {
      title: '',
      color: 'bg-blue-800'
    },
    {
      title: '',
      color: ''
    },
    {
      title: '',
      color: 'bg-blue-800'
    }
  ]
}
</script>

<template>
  <div class="h-screen aspect-square mx-auto flex flex-col bg-emerald-50 border border-slate-700">
    <div class="flex">
      <corner-view title="Free Parking" />
      <property-list :properties="properties.top" />
      <corner-view title="Go to Jail" />
    </div>

    <div class="grow flex">
      <property-list
        :properties="properties.left.reverse()"
        is-vertical
      />
      <div class="grow flex justify-center items-center border border-slate-700 border-opacity-70">
        <h1>Monopoly-O-Matic</h1>
      </div>
      <property-list
        :properties="properties.right"
        is-vertical
      />
    </div>

    <div class="flex">
      <corner-view title="Jail" />
      <property-list :properties="properties.bottom.reverse()" />
      <corner-view title="Go" />
    </div>
  </div>
</template>

<style>
</style>
