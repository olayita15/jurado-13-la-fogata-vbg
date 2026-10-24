<script setup lang="ts">
import { hearingRules, judicialPowers } from '~/data/case'
const isOpen = defineModel<boolean>({ default: false })
</script>

<template>
  <UModal v-model="isOpen" :ui="{ width: 'sm:max-w-3xl' }">
    <article class="rules-document">
      <header class="rules-header"><button class="dialog-close rules-close" type="button" aria-label="Cerrar reglamento" @click="isOpen = false"><UIcon name="i-lucide-x" /></button><p class="eyebrow">Jurado 13 · audiencia pedagógica</p><h1>Reglamento</h1><p>Reglas de juego, orden de intervención y tiempos máximos de la audiencia.</p></header>
      <div class="hearing-timeline"><article v-for="(rule, index) in hearingRules" :key="rule.title" class="timeline-rule"><div class="timeline-time">{{ rule.time }}</div><div><span>{{ String(index + 1).padStart(2, '0') }}</span><h2>{{ rule.title }}</h2><p>{{ rule.text }}</p></div></article></div>
      <aside class="judge-powers"><UIcon name="i-lucide-gavel" /><div><p class="eyebrow">Dirección de la audiencia</p><ul><li v-for="power in judicialPowers" :key="power">{{ power }}</li></ul></div></aside>
      <aside class="hearing-protocol"><UIcon name="i-lucide-message-square-quote" /><div><p class="eyebrow">Protocolo de audiencia</p><ul><li>La decisión del juez dirige la audiencia. Diríjanse a él como <b>su señoría</b>, con respeto y profesionalidad.</li><li>Se puede decir <b>“Protesto, su señoría”</b> para objetar algo no sustentado, ajeno al caso, redundante o contrario al turno de intervención.</li></ul></div></aside>
      <aside class="rules-closing"><UIcon name="i-lucide-notebook-pen" /><p><b>Secretaría y Prensa:</b> Secretaría registra intervenciones, hechos y decisión. Prensa realiza el registro multimedia únicamente en los momentos que el juez autorice.</p></aside>
      <footer><UButton color="gray" variant="ghost" icon="i-lucide-x" @click="isOpen = false">Cerrar</UButton></footer>
    </article>
  </UModal>
</template>
