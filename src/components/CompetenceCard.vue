<script setup lang="ts">
import InfoCard from './InfoCard.vue'
import type { InfoModel } from '@/types/InfoModel'

defineProps<{ competence: InfoModel }>()

const _emit = defineEmits<{
  modified: [addedCompetence: InfoModel]
}>()
</script>

<template>
  <InfoCard :info="competence" @modified="(competence) => _emit('modified', competence)" />
</template>

<style scoped></style>
