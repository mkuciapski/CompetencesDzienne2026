<script setup lang="ts">
import { Icon } from '@iconify/vue'

import type { Competence } from '@/types/Competence'
import { ref, watch } from 'vue'
import ComplexButton from './ComplexButton.vue'
const _props = defineProps<{ competence?: Competence }>()

const _emit = defineEmits<{
  added: [addedCompetence: Competence]
  modified: [modifiedCompetence: Competence]
}>()

const _defineCompetence = ref<Competence>({ Id: -1, Level: 1, Name: '', Description: '', Picture: '' })

watch(
  () => _props.competence,
  () => {
    if (_props.competence) _defineCompetence.value = { ..._props.competence }
  },
  { deep: true, immediate: true },
)

function add() {
  _emit('added', _defineCompetence.value)
}
function modify() {
  _emit('modified', _defineCompetence.value)
}

function showModal() {
  if (!document) return

  const modal = document.getElementById(`competence_modal${_props.competence ? _props.competence.Id : 'Add'}`) as HTMLDialogElement
  modal.showModal()
}
</script>

<template>
  <!-- Trigger -->
  <button class="btn btn-primary btn-sm" @click="showModal">
    <Icon :icon="competence ? 'mdi-light:pencil' : 'mdi-light:plus'" />
  </button>

  <!-- Modal -->
  <dialog :id="`competence_modal${competence ? competence.Id : 'Add'}`" class="modal">
    <div class="modal-box">
      <h3 class="font-bold text-lg">{{ competence ? `Edytuj kompetencje ${competence.Name}` : 'Dodaj kompetencje' }}</h3>

      <div class="py-4 space-y-3">
        <input v-model="_defineCompetence.Name" type="text" name="name" placeholder="Nazwa" class="input input-bordered w-full" />
        <input v-model.number="_defineCompetence.Level" type="number" name="level" min="1" max="10" placeholder="Poziom (1-10)" class="input input-bordered w-full" />
        <textarea v-model="_defineCompetence.Description" name="description" placeholder="Opis" class="textarea textarea-bordered w-full"></textarea>
      </div>

      <div class="modal-action">
        <form method="dialog">
          <ComplexButton class="btn" title="Anuluj" />
        </form>
        <ComplexButton @click="competence ? modify() : add()" class="btn btn-primary">
          <Icon :icon="competence ? 'si:check-duotone' : 'mdi:plus'" width="24" height="24" />
          {{ competence ? 'Ok' : 'Dodaj' }}

          <template #below>
            <span class="text-[0.5rem] text-gray-700!">Należy się wylogowywać</span>
          </template>

          <template #pending>
            <span class="loading loading-spinner text-info"></span>
          </template>
        </ComplexButton>
      </div>
    </div>

    <!-- Kliknięcie poza modal zamyka -->
    <form method="dialog" class="modal-backdrop">
      <button>Zamknij</button>
    </form>
  </dialog>
</template>

<style scoped></style>
