<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { NButton, NDrawer, NDrawerContent } from 'naive-ui'

const open = ref(false)
const solid = ref(false)

const links = [
  { href: '#projects', label: 'Projects' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

function onScroll() {
  solid.value = window.scrollY > window.innerHeight * 0.72
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
        ? 'border-b border-stone-200 bg-stone-50/90 backdrop-blur-md'
        : 'border-b border-transparent bg-stone-900/15 backdrop-blur-md'
    "
  >
    <div class="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-10">
      <a
        href="#top"
        class="font-display text-2xl tracking-wide transition-colors"
        :class="solid ? 'text-stone-900' : 'text-stone-50'"
      >
        MAZ
      </a>

      <nav class="hidden items-center gap-10 md:flex" aria-label="Primary">
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          class="text-sm tracking-wide transition-colors"
          :class="
            solid
              ? 'text-stone-600 hover:text-stone-900'
              : 'text-stone-100/85 hover:text-stone-50'
          "
        >
          {{ link.label }}
        </a>
      </nav>

      <button
        type="button"
        class="flex h-10 w-10 items-center justify-center md:hidden"
        aria-label="Open menu"
        @click="open = true"
      >
        <span class="flex flex-col gap-1.5" aria-hidden="true">
          <span
            class="block h-px w-5 transition-colors"
            :class="solid ? 'bg-stone-900' : 'bg-stone-50'"
          />
          <span
            class="block h-px w-5 transition-colors"
            :class="solid ? 'bg-stone-900' : 'bg-stone-50'"
          />
        </span>
      </button>
    </div>

    <NDrawer v-model:show="open" placement="right" :width="300" display-directive="show">
      <NDrawerContent title="Menu" closable :native-scrollbar="false">
        <nav class="mt-4 flex flex-col gap-6" aria-label="Mobile">
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
            Contact
          </NButton>
        </template>
      </NDrawerContent>
    </NDrawer>
  </header>
</template>
