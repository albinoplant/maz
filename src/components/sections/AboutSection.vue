<script setup lang="ts">
const atelierImage =
  'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=80'
</script>

<template>
  <section
    id="about"
    class="border-y border-stone-200 bg-stone-100 py-24 md:py-32"
    aria-labelledby="about-heading"
  >
    <div class="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2 md:gap-16 md:px-10">
      <div class="reveal order-2 md:order-1">
        <p class="text-xs tracking-[0.2em] text-olive uppercase">Studio</p>
        <h2 id="about-heading" class="mt-3 font-display text-4xl text-stone-900 md:text-5xl">
          About
        </h2>
        <p class="mt-6 text-base leading-relaxed text-stone-600">
          342 studio is an architecture and interior practice focused on quiet, lasting spaces. We work
          with light as a material, and with restraint as a method—preferring fewer, better
          decisions over ornament.
        </p>
        <p class="mt-4 text-base leading-relaxed text-stone-600">
          From private residences to cultural interiors, each project begins with site, climate,
          and the daily rituals of the people who will inhabit it.
        </p>
      </div>

      <div class="reveal order-1 overflow-hidden md:order-2" style="transition-delay: 120ms">
        <img
          :src="atelierImage"
          alt="Studio atelier interior with concrete and timber"
          class="aspect-[5/6] w-full object-cover md:aspect-[4/5]"
          loading="lazy"
          width="1400"
          height="1750"
        />
      </div>
    </div>
  </section>
</template>
