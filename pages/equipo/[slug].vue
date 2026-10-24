<script setup lang="ts">
import { teams, type Team } from '~/data/case'

const route = useRoute()
const slugToTeam: Record<string, Team> = { 'vela-roja': 'fiscalia', 'puente-verde': 'defensa', 'sol-ambar': 'jurado' }
const caseFile = {
  number: 'Expediente pedagógico 01–VBG',
  title: 'Amor político en los tiempos del tigre',
  court: 'Tribunal pedagógico independiente',
  claimant: 'Camila Giraldo · Persona denunciante',
  respondent: 'Mateo Ríos · Persona denunciada'
}
const key = slugToTeam[String(route.params.slug)]
if (!key) throw createError({ statusCode: 404, statusMessage: 'Este sobre no existe' })

const team = teams[key]
const showAccusation = ref(false)
const showRules = ref(false)
const showEvidence = ref(false)
const baseUrl = useRuntimeConfig().app.baseURL.replace(/\/$/, '')
const assetUrl = (path: string) => `${baseUrl}${path}`
const vbgGuideUrl = assetUrl('/assets/ruta-nacional-vbg.pdf')
const logoUrl = assetUrl('/assets/logo-la-fogata.jpeg')
useHead({ title: `${team.name} · Jurado 13` })
</script>

<template>
  <main class="hearing-page" :class="`role-${key}`">
    <div class="shell">
      <nav class="topnav"><div class="brand"><img class="brand-logo" :src="logoUrl" alt="Colectiva La Fogata">JURADO 13 <span style="color:var(--coral)">/ VBG</span></div><span class="case-number">{{ caseFile.number }}</span></nav>
      <header class="hearing-header"><div class="role-symbol"><UIcon :name="team.icon" /></div><div><p class="eyebrow">{{ caseFile.court }}</p><h1>{{ team.name }}</h1><p>{{ team.subtitle }}</p></div></header>
      <section class="case-summary"><div><p class="eyebrow">Audiencia pedagógica</p><h2>{{ caseFile.title }}</h2><p>{{ caseFile.claimant }} <span>contra</span> {{ caseFile.respondent }}</p></div></section>
      <section class="role-workspace"><p class="eyebrow">Objetivo del equipo</p><h2>{{ team.objective }}</h2></section>
      <section class="case-actions"><UButton icon="i-lucide-file-text" size="lg" block @click="showAccusation = true">Acta de Acusación</UButton><UButton icon="i-lucide-book-open-check" size="lg" color="gray" variant="soft" block @click="showRules = true">Reglamento</UButton><UButton icon="i-lucide-folder-open" size="lg" color="amber" variant="soft" block @click="showEvidence = true">Evidencias</UButton><a class="insumos-link" :href="vbgGuideUrl" target="_blank" rel="noopener"><UIcon name="i-lucide-book-marked" /><span>Insumos VBG</span><UIcon class="external-link-icon" name="i-lucide-arrow-up-right" /></a></section>
    </div>
    <ActaDeAcusacionDialog v-model="showAccusation" />
    <ReglamentoAudienciaDialog v-model="showRules" />
    <EvidenciasDialog v-model="showEvidence" :team="key" />
  </main>
</template>
