<script setup lang="ts">
import type { InfoModel } from '@/types/InfoModel'

defineProps<{ info: InfoModel }>()
</script>

<template>
  <div class="card bg-base-100 w-48 shadow-sm card-spacing">
    <h2 class="text-center text-xl uppercase">{{ info.Name }}</h2>
    <img :src="`assets/${info.Picture}`" />
    <div class="card-body">
      <p :class="[info.Level < 3 ? 'text-red-500' : info.Level > 3 ? 'text-green-500' : '']">Poziom: {{ info.Level }}</p>
      <p v-if="info.Description">Opis: {{ info.Description }}</p>
    </div>
  </div>
</template>

<style scoped></style>
