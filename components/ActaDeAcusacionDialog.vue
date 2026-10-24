<script setup lang="ts">
import { accusation, hearing } from '~/data/case'
const isOpen = defineModel<boolean>({ default: false })
</script>

<template>
  <UModal v-model="isOpen" :ui="{ width: 'sm:max-w-3xl' }">
    <article class="formal-document">
      <header class="document-header"><div><p>TRIBUNAL PEDAGÓGICO INDEPENDIENTE</p><h1>Acta de Acusación</h1><span>{{ hearing.number }}</span></div><UIcon name="i-lucide-scale" /></header>
      <div class="document-meta"><div><b>Fecha de presentación</b><span>{{ accusation.date }}</span></div><div><b>Persona denunciante</b><span>Camila Giraldo</span></div><div><b>Persona denunciada</b><span>Mateo Ríos</span></div></div>
      <section><h2>I. Considerando</h2><p>{{ accusation.background }}</p></section>
      <section><h2>II. Hechos objeto de denuncia</h2><article v-for="(fact, index) in accusation.facts" :key="fact.title" class="charged-fact"><span>{{ String(index + 1).padStart(2, '0') }}</span><div><h3>{{ fact.title }}</h3><p>{{ fact.text }}</p></div></article></section>
      <section class="document-request"><h2>III. Petición al Tribunal</h2><p>{{ accusation.request }}</p></section>
      <section class="document-guarantees"><UIcon name="i-lucide-shield-check" /><p><b>Garantías del proceso:</b> esta acta plantea hechos para ser contrastados, no una conclusión anticipada. La persona denunciada tiene derecho a conocerla, responderla y ser escuchada; la persona denunciante tiene derecho a no ser revictimizada.</p></section>
      <footer><span>Documento ficticio para la dinámica Jurado 13</span><UButton color="gray" variant="ghost" icon="i-lucide-x" @click="isOpen = false">Cerrar</UButton></footer>
    </article>
  </UModal>
</template>
