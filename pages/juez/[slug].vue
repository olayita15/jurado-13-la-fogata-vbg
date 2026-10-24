<script setup lang="ts">
import { hearingRules, judicialPowers } from '~/data/case'

const route = useRoute()
if (String(route.params.slug) !== 'roble-azul') throw createError({ statusCode: 404, statusMessage: 'Esta mesa no existe' })

const baseUrl = useRuntimeConfig().app.baseURL.replace(/\/$/, '')
const pageUrl = (path: string) => `${baseUrl}${path}`
const logoUrl = pageUrl('/assets/logo-la-fogata.jpeg')
const teamLinks = [
  { name: 'Fiscalía', role: 'Vela roja', icon: 'i-lucide-scale', href: pageUrl('/equipo/vela-roja') },
  { name: 'Defensa', role: 'Puente verde', icon: 'i-lucide-shield-check', href: pageUrl('/equipo/puente-verde') },
  { name: 'Jurado', role: 'Sol ámbar', icon: 'i-lucide-landmark', href: pageUrl('/equipo/sol-ambar') }
]
const showAccusation = ref(false)
const showRules = ref(false)
useHead({ title: 'Mesa del Juez · Jurado 13' })
</script>

<template>
  <main class="judge-page">
    <div class="shell">
      <nav class="topnav"><div class="brand"><img class="brand-logo" :src="logoUrl" alt="Colectiva La Fogata">JURADO 13 <span style="color:var(--coral)">/ MESA DEL JUEZ</span></div><span class="case-number">Expediente pedagógico 01–VBG</span></nav>

      <header class="judge-header"><div class="role-symbol"><UIcon name="i-lucide-gavel" /></div><div><p class="eyebrow">Tribunal pedagógico independiente</p><h1>Mesa del Juez</h1><p>Amor político en los tiempos del tigre</p></div></header>

      <section class="judge-objective"><p class="eyebrow">Tu papel</p><h2>Garantizar una audiencia ordenada, escuchada y justa.</h2><p>Modera los tiempos, resuelve las protestas y formula la sentencia a partir del veredicto del jurado.</p></section>

      <section class="judge-actions" aria-label="Documentos de la audiencia"><UButton icon="i-lucide-file-text" size="lg" block @click="showAccusation = true">Acta de Acusación</UButton><UButton icon="i-lucide-book-open-check" size="lg" color="gray" variant="soft" block @click="showRules = true">Reglamento</UButton></section>

      <section class="judge-section"><div class="section-heading"><p class="eyebrow">Acceso reservado</p><h2>Enlaces de los equipos</h2><p>Ábrelos solo cuando necesites acompañar a un grupo.</p></div><div class="judge-team-links"><a v-for="team in teamLinks" :key="team.name" :href="team.href" target="_blank" rel="noopener"><UIcon :name="team.icon" /><span><b>{{ team.name }}</b><small>{{ team.role }}</small></span><UIcon name="i-lucide-arrow-up-right" /></a></div></section>

      <section class="judge-section"><div class="section-heading"><p class="eyebrow">Orden sugerido</p><h2>Control de la audiencia</h2></div><ol class="judge-timeline"><li v-for="(rule, index) in hearingRules" :key="rule.title"><span>{{ String(index + 1).padStart(2, '0') }}</span><div><b>{{ rule.time }} · {{ rule.title }}</b><p>{{ rule.text }}</p></div></li></ol></section>

      <section class="judge-section judge-powers-card"><div class="section-heading"><p class="eyebrow">Cierre</p><h2>Recuerda</h2></div><ul><li v-for="power in judicialPowers" :key="power">{{ power }}</li></ul></section>
    </div>
    <ActaDeAcusacionDialog v-model="showAccusation" />
    <ReglamentoAudienciaDialog v-model="showRules" />
  </main>
</template>
