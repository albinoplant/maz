import { onMounted, onUnmounted, type Ref } from 'vue'

export function useReveal(root: Ref<HTMLElement | null>) {
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    if (!root.value) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      root.value.querySelectorAll('.reveal').forEach((el) => {
        el.classList.add('is-visible')
      })
      return
    }

    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer?.unobserve(entry.target)
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
    )

    root.value.querySelectorAll('.reveal').forEach((el) => observer?.observe(el))
  })

  onUnmounted(() => {
    observer?.disconnect()
  })
}
