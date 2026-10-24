<script setup lang="ts">
import type { Evidence } from '~/data/case'
const isOpen = defineModel<boolean>({ default: false })
defineProps<{ evidence: Evidence | null }>()
</script>

<template>
  <UModal v-model="isOpen" :ui="{ width: 'sm:max-w-2xl' }">
    <article v-if="evidence" class="evidence-document" :class="`evidence-${evidence.format}`" @click.stop>
      <header><div><span>{{ evidence.code }}</span><p>{{ evidence.source }}</p><div class="dialog-title"><UIcon :name="evidence.format === 'chat' ? 'i-lucide-messages-square' : evidence.format === 'testimony' ? 'i-lucide-mic-vocal' : evidence.format === 'publication' ? 'i-lucide-newspaper' : 'i-lucide-folder-search'" /><h1>{{ evidence.title }}</h1></div></div><div class="dialog-header-actions"><button class="dialog-close" type="button" aria-label="Cerrar evidencia" @click.stop="isOpen = false"><UIcon name="i-lucide-x" /></button></div></header>
      <section v-if="evidence.messages" class="chat-transcript"><p class="evidence-label">Transcripción de conversación</p><div v-for="message in evidence.messages" :key="`${message.speaker}-${message.text}`" class="message" :class="message.speaker === 'Camila' ? 'camila' : 'mateo'"><b>{{ message.speaker }}</b><p>{{ message.text }}</p></div></section>
      <section v-else class="evidence-body"><p class="evidence-label">Contenido de la pieza</p><p style="white-space: pre-line">{{ evidence.text }}</p></section>
      <footer><UButton color="gray" variant="ghost" icon="i-lucide-x" @click.stop="isOpen = false">Cerrar</UButton></footer>
    </article>
  </UModal>
</template>
