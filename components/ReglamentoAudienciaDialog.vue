<script setup lang="ts">
import { hearingRules, judicialPowers } from '~/data/case'
const isOpen = defineModel<boolean>({ default: false })
</script>

<template>
  <UModal v-model="isOpen" :ui="{ width: 'sm:max-w-3xl' }">
    <article class="rules-document">
      <header class="rules-header"><p class="eyebrow">Jurado 13 · audiencia pedagógica</p><h1>Reglamento</h1><p>Reglas de juego, orden de intervención y tiempos máximos de la audiencia.</p></header>
      <div class="hearing-timeline"><article v-for="(rule, index) in hearingRules" :key="rule.title" class="timeline-rule"><div class="timeline-time">{{ rule.time }}</div><div><span>{{ String(index + 1).padStart(2, '0') }}</span><h2>{{ rule.title }}</h2><p>{{ rule.text }}</p></div></article></div>
      <aside class="judge-powers"><UIcon name="i-lucide-gavel" /><div><p class="eyebrow">Dirección de la audiencia</p><ul><li v-for="power in judicialPowers" :key="power">{{ power }}</li></ul></div></aside>
      <aside class="rules-closing"><UIcon name="i-lucide-notebook-pen" /><p><b>Secretaría y Prensa:</b> Secretaría registra intervenciones, hechos y decisión. Prensa realiza el registro multimedia únicamente en los momentos que el juez autorice.</p></aside>
      <footer><span>El ejercicio no sustituye rutas reales de atención.</span><UButton color="gray" variant="ghost" icon="i-lucide-x" @click="isOpen = false">Cerrar</UButton></footer>
    </article>
  </UModal>
</template>
