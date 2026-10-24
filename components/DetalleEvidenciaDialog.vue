<script setup lang="ts">
import type { Evidence } from '~/data/case'
const isOpen = defineModel<boolean>({ default: false })
defineProps<{ evidence: Evidence | null }>()
</script>

<template>
  <UModal v-model="isOpen" :ui="{ width: 'sm:max-w-2xl' }">
    <article v-if="evidence" class="evidence-document" :class="`evidence-${evidence.format}`">
      <header><div><span>{{ evidence.code }}</span><p>{{ evidence.source }}</p><h1>{{ evidence.title }}</h1></div><UIcon :name="evidence.format === 'chat' ? 'i-lucide-messages-square' : evidence.format === 'testimony' ? 'i-lucide-mic-vocal' : evidence.format === 'publication' ? 'i-lucide-newspaper' : 'i-lucide-folder-search'" /></header>
      <section v-if="evidence.messages" class="chat-transcript"><p class="evidence-label">Transcripción de conversación</p><div v-for="message in evidence.messages" :key="`${message.speaker}-${message.text}`" class="message" :class="message.speaker === 'Camila' ? 'camila' : 'mateo'"><b>{{ message.speaker }}</b><p>{{ message.text }}</p></div></section>
      <section v-else class="evidence-body"><p class="evidence-label">Contenido de la pieza</p><p>{{ evidence.text }}</p></section>
      <aside class="evidence-question"><UIcon name="i-lucide-search" /><div><p class="evidence-label">Pregunta para el debate</p><p>{{ evidence.question }}</p></div></aside>
      <footer><span>Material ficticio · No concluye por sí solo una responsabilidad.</span><UButton color="gray" variant="ghost" icon="i-lucide-x" @click="isOpen = false">Cerrar</UButton></footer>
    </article>
  </UModal>
</template>
