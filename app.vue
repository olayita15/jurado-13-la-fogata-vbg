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

.insumos-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: .45rem;
  min-height: 3.15rem;
  padding: .65rem .9rem;
  border: 1px solid #3e665e30;
  border-radius: .5rem;
  background: #e8f0eb;
  color: #285148;
  font-size: .95rem;
  font-weight: 700;
  text-decoration: none;
}

.insumos-link:hover,
.insumos-link:focus-visible {
  background: #d7e7dc;
  color: #173d35;
  outline: 3px solid #e6ad75;
  outline-offset: 2px;
}

.insumos-link > svg {
  width: 1.1rem;
  height: 1.1rem;
}

.insumos-link .external-link-icon {
  width: .85rem;
  height: .85rem;
}
</style>
