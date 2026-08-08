<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-stone-200 bg-stone-100">
    <div
      class="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-14 md:flex-row md:items-end md:justify-between md:px-10"
    >
      <div>
        <p class="font-display text-3xl text-stone-900">MAZ</p>
        <p class="mt-2 max-w-sm text-sm leading-relaxed text-stone-600">
          Architecture &amp; interior studio. Spaces shaped by light, material, and quiet
          proportion.
        </p>
      </div>

      <div class="space-y-1 text-sm text-stone-600">
        <p>
          <a class="transition-colors hover:text-olive" href="mailto:hello@maz.studio">
            hello@maz.studio
          </a>
        </p>
        <p>Gdańsk, Poland</p>
        <p class="pt-3 text-stone-400">© {{ year }} MAZ Studio</p>
      </div>
    </div>
  </footer>
</template>
