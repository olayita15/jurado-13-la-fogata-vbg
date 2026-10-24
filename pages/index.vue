<script setup lang="ts">
const activity = [
  { icon: 'i-lucide-clock-3', label: 'Duración estimada', value: '80 min' },
  { icon: 'i-lucide-scale', label: 'Fiscalía', value: '3–4 personas'},
  { icon: 'i-lucide-shield-check', label: 'Defensa', value: '3–4 personas' },
  { icon: 'i-lucide-users-round', label: 'Jurado', value: 'Resto del grupo' },
  { icon: 'i-lucide-gavel', label: 'Roles de apoyo', value: 'Juez · Secretaría · Prensa' }
]
</script>

<template>
  <main class="cover-page">
    <div class="shell">
      <nav class="topnav">
        <div class="brand"><img class="brand-logo" src="/assets/logo-la-fogata.jpeg" alt="Colectiva La Fogata">COLECTIVA LA FOGATA</div>
        <span class="eyebrow">San Cristóbal</span>
      </nav>

      <header class="hero cover-hero">
        <div>
          <p class="eyebrow">Dinámica participativa de educación popular</p>
          <h1>Jurado<span>13</span></h1>
        </div>

        <aside class="case-card objective-card">
          <h2 style="color:#eab85c">Objetivo de la sesión</h2>
          <p>Reconocer y comprender las violencias basadas en género y sus distintas manifestaciones, a través de una dinámica que recrea una situación de la vida cotidiana y promueve la reflexión colectiva.</p>
        </aside>
      </header>

      <section class="activity-grid" aria-label="Composición de la actividad">
        <article v-for="item in activity" :key="item.label" class="activity-item">
          <UIcon :name="item.icon" class="activity-icon" aria-hidden="true" />
          <div><p class="eyebrow">{{ item.label }}</p><h2>{{ item.value }}</h2><p>{{ item.note }}</p></div>
        </article>
      </section>
    </div>

    <LaFogataFooter />
  </main>
</template>
