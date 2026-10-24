<script setup lang="ts">
import { hearing, teams, type Team } from '~/data/case'

const route = useRoute()
const slugToTeam: Record<string, Team> = { 'vela-roja': 'fiscalia', 'puente-verde': 'defensa', 'sol-ambar': 'jurado' }
const key = slugToTeam[String(route.params.slug)]
if (!key) throw createError({ statusCode: 404, statusMessage: 'Este sobre no existe' })

const team = teams[key]
const showAccusation = ref(false)
const showRules = ref(false)
const showEvidence = ref(false)
useHead({ title: `${team.name} · Jurado 13` })
</script>

<template>
  <main class="hearing-page" :class="`role-${key}`">
    <div class="shell">
      <nav class="topnav"><div class="brand"><img class="brand-logo" src="/assets/logo-la-fogata.jpeg" alt="Colectiva La Fogata">JURADO 13 <span style="color:var(--coral)">/ VBG</span></div><span class="case-number">{{ hearing.number }}</span></nav>
      <header class="hearing-header"><div class="role-symbol"><UIcon :name="team.icon" /></div><div><p class="eyebrow">{{ hearing.court }}</p><h1>{{ team.name }}</h1><p>{{ team.subtitle }}</p></div></header>
      <section class="case-summary"><div><p class="eyebrow">Audiencia pedagógica</p><h2>{{ hearing.title }}</h2><p>{{ hearing.claimant }} <span>contra</span> {{ hearing.respondent }}</p></div></section>
      <section class="case-actions"><UButton icon="i-lucide-file-text" size="lg" block @click="showAccusation = true">Acta de Acusación</UButton><UButton icon="i-lucide-book-open-check" size="lg" color="gray" variant="soft" block @click="showRules = true">Reglamento</UButton><UButton icon="i-lucide-folder-open" size="lg" color="amber" variant="soft" block class="evidence-button" @click="showEvidence = true">Evidencias</UButton></section>
      <section class="role-workspace"><p class="eyebrow">Mandato del equipo</p><h2>{{ team.instruction }}</h2><ul><li v-for="point in team.focus" :key="point">{{ point }}</li></ul></section>
    </div>
    <ActaDeAcusacionDialog v-model="showAccusation" />
    <ReglamentoAudienciaDialog v-model="showRules" />
    <EvidenciasDialog v-model="showEvidence" :team="key" />
  </main>
</template>
