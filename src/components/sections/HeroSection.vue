<script setup lang="ts">
import logo from '../../assets/logo-342.png'
</script>

<template>
  <section
    id="top"
    class="relative flex min-h-[100svh] items-center overflow-hidden bg-white"
    aria-label="Wstęp"
  >
    <div class="relative z-10 mx-auto flex w-full max-w-7xl flex-col px-6  md:px-10">
      <div class="motion-fade self-center overflow-hidden">
        <img
          :src="logo"
          alt="342."
          class="mx-auto w-full max-w-xl -mt-6 md:max-w-2xl lg:max-w-3xl"
          width="1024"
          height="677"
          fetchpriority="high"
        />
      </div>
      <h1
        class="motion-rise mt-10 max-w-xl self-start font-sans text-lg font-normal leading-relaxed text-stone-800 md:text-xl"
        style="animation-delay: 0.25s"
      >
        Wnętrza mierzone światłem, ciszą i szczerością materiału.
      </h1>
      <p
        class="motion-rise mt-3 max-w-md self-start text-sm leading-relaxed text-stone-600"
        style="animation-delay: 0.4s"
      >
        Pracownia projektowania wnętrz ze Szczecina.
      </p>
      <div class="motion-rise mt-10 self-start" style="animation-delay: 0.55s">
        <a
          href="#about"
          class="inline-flex items-center gap-3 border border-stone-900/30 px-6 py-3 text-sm tracking-wide text-stone-900 transition-colors hover:border-stone-900 hover:bg-stone-900/5"
        >
          O studiu
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  </section>
</template>
