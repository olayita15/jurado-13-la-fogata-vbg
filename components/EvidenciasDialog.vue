<script setup lang="ts">
import { evidenceByTeam, type Evidence, type Team } from '~/data/case'
const props = defineProps<{ team: Team }>()
const isOpen = defineModel<boolean>({ default: false })
const selectedEvidence = ref<Evidence | null>(null)
const showDetail = ref(false)
const evidence = computed(() => evidenceByTeam[props.team])
function openEvidence(item: Evidence) { selectedEvidence.value = item; showDetail.value = true }
</script>

<template>
  <UModal v-model="isOpen" :prevent-close="showDetail" :ui="{ width: 'sm:max-w-3xl' }">
    <article class="evidence-index">
      <header><div><p class="eyebrow">Sobre reservado</p><div class="dialog-title"><UIcon name="i-lucide-folder-open" /><h1>Evidencias</h1></div><p>Abre cada pieza por separado. Léela completa y decide qué permite sostener, qué cuestiona y qué no demuestra.</p></div><div class="dialog-header-actions"><button class="dialog-close" type="button" aria-label="Cerrar evidencias" @click="isOpen = false"><UIcon name="i-lucide-x" /></button></div></header>
      <div class="evidence-list"><button v-for="item in evidence" :key="item.code" class="evidence-entry" :class="`entry-${item.format}`" type="button" @click="openEvidence(item)"><span class="evidence-code">{{ item.code }}</span><div><p>{{ item.source }}</p><div class="evidence-entry-title"><UIcon :name="item.format === 'chat' ? 'i-lucide-messages-square' : item.format === 'testimony' ? 'i-lucide-mic-vocal' : item.format === 'publication' ? 'i-lucide-newspaper' : 'i-lucide-folder-search'" /><h2>{{ item.title }}</h2></div><span class="open-evidence">Abrir pieza <UIcon name="i-lucide-arrow-up-right" /></span></div></button></div>
      <footer><span>Los materiales se interpretan y contrastan; no son un veredicto.</span><UButton color="gray" variant="ghost" icon="i-lucide-x" @click="isOpen = false">Cerrar</UButton></footer>
    </article>
  </UModal>
  <DetalleEvidenciaDialog v-model="showDetail" :evidence="selectedEvidence" />
</template>
