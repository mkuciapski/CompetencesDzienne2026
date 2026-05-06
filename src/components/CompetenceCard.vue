<script setup lang="ts">
import InfoCard from './InfoCard.vue'
import type { InfoModel } from '@/types/InfoModel'

defineProps<{ competence: InfoModel }>()

const _emit = defineEmits<{
  modified: [addedCompetence: InfoModel]
  deleted: [deletedCompetence: InfoModel]
}>()
</script>

<template>
  <InfoCard :info="competence" @modified="(competence) => _emit('modified', competence)" @deleted="(competence) => _emit('deleted', competence)" />
</template>

<style scoped></style>
