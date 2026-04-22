<script setup lang="ts">
import InfoCard from './InfoCard.vue'
import type { InfoModel } from '@/types/InfoModel'

defineProps<{ competence: InfoModel }>()
</script>

<template>
  <InfoCard :info="competence" />
</template>

<style scoped></style>
