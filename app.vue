<template>
  <NuxtPage />
</template>

<style>
.dialog-close {
  display: grid;
  place-items: center;
  line-height: 1;
}

.dialog-close > svg {
  display: block;
  margin: 0;
}

.dialog-title,
.evidence-entry-title {
  display: flex;
  align-items: center;
  gap: .55rem;
}

.dialog-title > svg {
  width: 1.8rem;
  height: 1.8rem;
  flex: none;
  color: var(--coral);
}

.dialog-title h1,
.evidence-entry-title h2 {
  margin: 0;
}

.evidence-entry {
  grid-template-columns: 2.7rem 1fr;
}

.evidence-entry-title > svg {
  width: 1.1rem;
  height: 1.1rem;
  flex: none;
  color: var(--coral);
}

.evidence-type-chip {
  display: inline-flex;
  margin-top: .7rem;
  padding: .28rem .55rem;
  border-radius: 999px;
  background: #f7e5c8;
  color: var(--wine);
  font-size: .7rem;
  font-weight: 800;
}
</style>
