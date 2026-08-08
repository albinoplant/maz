<script setup lang="ts">
const heroImage =
  'https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&w=2000&q=80'
</script>

<template>
  <section
    id="top"
    class="relative flex min-h-[100svh] items-end overflow-hidden"
    aria-label="Landing"
  >
    <div class="absolute inset-0 motion-fade" style="animation-delay: 0.05s">
      <img
        :src="heroImage"
        alt=""
        class="h-full w-full object-cover"
        width="2000"
        height="1333"
        fetchpriority="high"
      />
      <div class="absolute inset-0" style="background: var(--hero-overlay)" />
    </div>

    <div class="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-32 md:px-10 md:pb-28">
      <p
        class="motion-rise font-display text-6xl leading-none tracking-wide text-stone-50 sm:text-7xl md:text-8xl lg:text-9xl"
        style="animation-delay: 0.15s"
      >
        MAZ
      </p>
      <h1
        class="motion-rise mt-6 max-w-xl font-sans text-lg font-normal leading-relaxed text-stone-100/90 md:text-xl"
        style="animation-delay: 0.35s"
      >
        Architecture and interiors measured in light, silence, and material honesty.
      </h1>
      <p
        class="motion-rise mt-3 max-w-md text-sm leading-relaxed text-stone-200/80"
        style="animation-delay: 0.5s"
      >
        A studio for calm residential and cultural spaces across Poland and beyond.
      </p>
      <div class="motion-rise mt-10" style="animation-delay: 0.65s">
        <a
          href="#projects"
          class="inline-flex items-center gap-3 border border-stone-50/40 px-6 py-3 text-sm tracking-wide text-stone-50 transition-colors hover:border-stone-50 hover:bg-stone-50/10"
        >
          Selected projects
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  </section>
</template>
