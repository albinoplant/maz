<script setup lang="ts">
import { projects } from '../../data/projects'
</script>

<template>
  <section
    id="projects"
    class="relative overflow-hidden bg-stone-50 py-24 md:py-32"
    aria-labelledby="projects-heading"
  >
    <div class="pointer-events-none select-none blur-sm" aria-hidden="true">
      <div class="mx-auto max-w-7xl px-6 md:px-10">
        <div class="mb-14 max-w-2xl md:mb-20">
          <p class="text-xs tracking-[0.2em] text-olive uppercase">Wybrane</p>
          <h2
            id="projects-heading"
            class="mt-3 font-display text-4xl text-stone-900 md:text-5xl"
          >
            Projekty
          </h2>
          <p class="mt-4 text-base leading-relaxed text-stone-600">
            Przekrój ostatnich realizacji mieszkaniowych i wnętrzarskich.
          </p>
        </div>

        <ul class="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          <li v-for="project in projects" :key="project.id">
            <article>
              <div class="overflow-hidden bg-stone-200">
                <img
                  :src="project.image"
                  :alt="project.title"
                  class="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                  width="1200"
                  height="900"
                />
              </div>
              <div class="mt-4 flex items-baseline justify-between gap-4">
                <h3 class="font-display text-2xl text-stone-900">{{ project.title }}</h3>
                <span class="shrink-0 text-xs text-stone-400">{{ project.year }}</span>
              </div>
              <p class="mt-1 text-sm text-stone-600">
                {{ project.location }}
                <span class="mx-2 text-stone-300" aria-hidden="true">·</span>
                {{ project.category }}
              </p>
            </article>
          </li>
        </ul>
      </div>
    </div>

    <div
      class="absolute inset-0 z-10 flex items-center justify-center bg-stone-50/40"
      role="status"
    >
      <p class="font-display text-7xl tracking-wide text-stone-900 sm:text-8xl md:text-9xl">
        wkrótce…
      </p>
    </div>
  </section>
</template>
