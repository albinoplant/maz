<script setup lang="ts">
import { computed, ref } from 'vue'
import type { GlobalThemeOverrides } from 'naive-ui'
import { NConfigProvider, NMessageProvider } from 'naive-ui'
import SiteNav from './components/SiteNav.vue'
import SiteFooter from './components/SiteFooter.vue'
import HeroSection from './components/sections/HeroSection.vue'
import ProjectsSection from './components/sections/ProjectsSection.vue'
import AboutSection from './components/sections/AboutSection.vue'
import ContactSection from './components/sections/ContactSection.vue'
import { useReveal } from './composables/useReveal'

const root = ref<HTMLElement | null>(null)
useReveal(root)

const themeOverrides = computed<GlobalThemeOverrides>(() => ({
  common: {
    primaryColor: '#4a5240',
    primaryColorHover: '#6b7360',
    primaryColorPressed: '#3a4132',
    primaryColorSuppl: '#6b7360',
    borderRadius: '2px',
    fontFamily: "'DM Sans', system-ui, sans-serif",
    textColorBase: '#1a1917',
  },
  Button: {
    borderRadiusMedium: '2px',
    borderRadiusLarge: '2px',
    heightLarge: '44px',
    fontWeight: '500',
  },
  Input: {
    borderRadius: '2px',
    borderHover: '1px solid #9a958a',
    borderFocus: '1px solid #4a5240',
    boxShadowFocus: '0 0 0 2px rgba(74, 82, 64, 0.18)',
  },
  Form: {
    labelTextColor: '#5c5850',
    labelFontWeight: '500',
  },
  Drawer: {
    borderRadius: '0',
  },
}))
</script>

<template>
  <NConfigProvider :theme-overrides="themeOverrides">
    <NMessageProvider>
      <div ref="root" class="min-h-screen bg-stone-50 text-stone-900">
        <SiteNav />
        <main>
          <HeroSection />
          <ProjectsSection />
          <AboutSection />
          <ContactSection />
        </main>
        <SiteFooter />
      </div>
    </NMessageProvider>
  </NConfigProvider>
</template>
