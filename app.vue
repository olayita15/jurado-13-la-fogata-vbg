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

.hearing-protocol {
  display: flex;
  align-items: flex-start;
  gap: .8rem;
  margin-top: 1rem;
  padding: 1rem;
  border-radius: .65rem;
  background: #f8e6e2;
  border-left: 4px solid var(--coral);
}

.hearing-protocol > svg {
  flex: none;
  width: 1.4rem;
  height: 1.4rem;
  color: var(--coral);
}

.hearing-protocol p { margin: 0; }
.hearing-protocol ul { margin: .4rem 0 0; padding-left: 1.1rem; }
.hearing-protocol li { margin: .3rem 0; font-size: .88rem; line-height: 1.45; }

.judge-page {
  min-height: 100svh;
  padding-bottom: 2rem;
}

.judge-header {
  display: flex;
  align-items: center;
  gap: .85rem;
  padding: 1.6rem 0 1rem;
}

.judge-header h1,
.judge-section h2 {
  margin: .2rem 0 .35rem;
  color: var(--wine);
}

.judge-header h1 {
  font-size: clamp(2.45rem, 13vw, 5.6rem);
  line-height: .85;
  letter-spacing: -.06em;
}

.judge-header > div > p:last-child,
.section-heading > p:last-child {
  margin: 0;
  color: #79504a;
}

.judge-objective,
.judge-powers-card {
  padding: 1.1rem;
  border-radius: .8rem;
  background: #fff3df;
}

.judge-objective h2 {
  margin: .35rem 0 .5rem;
  color: var(--wine);
  font: 1.2rem/1.25 Georgia, serif;
}

.judge-objective p:last-child {
  margin: 0;
  line-height: 1.45;
  font-size: .88rem;
}

.judge-actions {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: .65rem;
  padding: 1rem 0;
}

.judge-actions button {
  min-height: 3.15rem;
  justify-content: center;
}

.judge-section {
  padding: 1.25rem 0;
  border-top: 1px solid #682b3620;
}

.judge-section h2 {
  font-size: 1.55rem;
}

.judge-team-links {
  display: grid;
  gap: .6rem;
  margin-top: .85rem;
}

.judge-team-links a {
  display: grid;
  grid-template-columns: 1.8rem 1fr 1rem;
  gap: .7rem;
  align-items: center;
  padding: .85rem;
  border: 1px solid #682b3623;
  border-radius: .75rem;
  color: var(--wine);
  background: var(--paper);
  text-decoration: none;
}

.judge-team-links a:hover { border-color: var(--coral); }
.judge-team-links a > svg { width: 1.25rem; height: 1.25rem; color: var(--coral); }
.judge-team-links span { display: flex; flex-direction: column; gap: .1rem; }
.judge-team-links small { color: #79504a; }

.judge-timeline,
.judge-powers-card ul {
  margin: .9rem 0 0;
  padding: 0;
  list-style: none;
}

.judge-timeline li {
  display: grid;
  grid-template-columns: 2.4rem 1fr;
  gap: .7rem;
  padding: .8rem 0;
  border-bottom: 1px solid #682b3620;
}

.judge-timeline li > span {
  display: grid;
  place-items: center;
  width: 2rem;
  height: 2rem;
  color: var(--wine);
  background: #f7e5c8;
  border-radius: 50%;
  font-size: .7rem;
  font-weight: 900;
}

.judge-timeline b { color: var(--wine); font-size: .9rem; }
.judge-timeline p { margin: .25rem 0 0; font-size: .82rem; line-height: 1.4; }
.judge-powers-card ul { display: grid; gap: .55rem; }
.judge-powers-card li { padding-left: 1rem; position: relative; font-size: .85rem; line-height: 1.4; }
.judge-powers-card li::before { content: '•'; position: absolute; left: 0; color: var(--coral); font-weight: 900; }
</style>
