<script setup lang="ts">
defineProps(['competence'])
</script>

<template>
  <div class="card bg-base-100 w-48 shadow-sm card-spacing">
    <h2 class="text-center text-xl uppercase">{{ competence.Name }}</h2>
    <img :src="`assets/${competence.Picture}`" />
    <div class="card-body">
      <p :class="[competence.Level < 3 ? 'text-red-500' : competence.Level > 3 ? 'text-green-500' : '']">Poziom: {{ competence.Level }}</p>
      <p v-if="competence.Description">Opis: {{ competence.Description }}</p>
    </div>
  </div>
</template>

<style scoped></style>
