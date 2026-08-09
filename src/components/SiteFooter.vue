<script setup lang="ts">
import logo from '../assets/logo-hand.png'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-stone-200 bg-stone-100">
    <div
      class="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-14 md:flex-row md:items-end md:justify-between md:px-10"
    >
      <div>
        <img :src="logo" alt="342." class="h-10 w-auto" width="1212" height="813" />
        <p class="mt-2 max-w-sm text-sm leading-relaxed text-stone-600">
          Interior design studio. Spaces shaped by light, material, and quiet proportion.
        </p>
      </div>

      <div class="space-y-1 text-sm text-stone-600">
        <p>
          <a class="transition-colors hover:text-olive" href="mailto:hello@342studio.pl">
            hello@342studio.pl
          </a>
        </p>
        <p>Szczecin, Poland</p>
        <p class="pt-3 text-stone-400">© {{ year }} 342 studio</p>
      </div>
    </div>
  </footer>
</template>
