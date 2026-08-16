<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { NButton, NDrawer, NDrawerContent } from 'naive-ui'
import logo from '../assets/logo-hand.png'

const open = ref(false)
const solid = ref(false)

const links = [
  { href: '#projects', label: 'projekty' },
  { href: '#about', label: 'o nas' },
  { href: '#contact', label: 'kontakt' },
]

function onScroll() {
  solid.value = window.scrollY > 24
}

function close() {
  open.value = false
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-50 transition-colors duration-300"
    :class="
      solid
        ? 'border-b border-stone-200 bg-white/90 backdrop-blur-md'
        : 'border-b border-transparent bg-transparent'
    "
  >
    <div class="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-10">
      <a href="#top" class="inline-flex items-center transition-opacity hover:opacity-70">
        <span class="text-lg mr-2 mt-3">
          studio
        </span>
        <img :src="logo" alt="342." class="h-8 w-auto md:h-9" width="1212" height="813" />
      </a>

      <nav class="hidden items-center gap-10 md:flex" aria-label="Nawigacja główna">
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          class="text-sm tracking-wide text-stone-600 transition-colors hover:text-stone-900"
        >
          {{ link.label }}
        </a>
      </nav>

      <button
        type="button"
        class="flex h-10 w-10 items-center justify-center md:hidden"
        aria-label="Otwórz menu"
        @click="open = true"
      >
        <span class="flex flex-col gap-1.5" aria-hidden="true">
          <span class="block h-px w-5 bg-stone-900" />
          <span class="block h-px w-5 bg-stone-900" />
        </span>
      </button>
    </div>

    <NDrawer v-model:show="open" placement="right" :width="300" display-directive="show">
      <NDrawerContent title="Menu" closable :native-scrollbar="false">
        <nav class="mt-4 flex flex-col gap-6" aria-label="Nawigacja mobilna">
          <a
            v-for="link in links"
            :key="link.href"
            :href="link.href"
            class="font-display text-3xl text-stone-800"
            @click="close"
          >
            {{ link.label }}
          </a>
        </nav>
        <template #footer>
          <NButton block type="primary" tag="a" href="#contact" @click="close">
            kontakt
          </NButton>
        </template>
      </NDrawerContent>
    </NDrawer>
  </header>
</template>
