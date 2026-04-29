<script setup lang="ts">
import type { Competence } from '@/types/Competence'
import { ref, watch } from 'vue'

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

  document.getElementById(`competence_modal${_props.competence ? _props.competence.Id : 'Add'}`).showModal()
}
</script>

<template>
  <!-- Trigger -->
  <button class="btn btn-primary" @click="showModal">{{ competence ? 'Edytuj' : 'Dodaj' }}</button>

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
          <button class="btn">Anuluj</button>
        </form>

        <button @click="competence ? modify() : add()" class="btn btn-primary">{{ competence ? 'Ok' : 'Dodaj' }}</button>
      </div>
    </div>

    <!-- Kliknięcie poza modal zamyka -->
    <form method="dialog" class="modal-backdrop">
      <button>Zamknij</button>
    </form>
  </dialog>
</template>

<style scoped></style>
