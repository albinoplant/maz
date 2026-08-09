<script setup lang="ts">
import { reactive, ref } from 'vue'
import { NButton, NForm, NFormItem, NInput, type FormInst, type FormRules } from 'naive-ui'

const formRef = ref<FormInst | null>(null)
const submitting = ref(false)
const submitted = ref(false)

const model = reactive({
  name: '',
  email: '',
  message: '',
})

const rules: FormRules = {
  name: {
    required: true,
    message: 'Please enter your name',
    trigger: ['blur', 'input'],
  },
  email: [
    {
      required: true,
      message: 'Please enter your email',
      trigger: ['blur', 'input'],
    },
    {
      type: 'email',
      message: 'Enter a valid email address',
      trigger: ['blur', 'input'],
    },
  ],
  message: {
    required: true,
    message: 'Please write a short message',
    trigger: ['blur', 'input'],
  },
}

async function handleSubmit(e: Event) {
  e.preventDefault()
  submitting.value = true
  try {
    await formRef.value?.validate()
    // Stub: no backend in v1 — log and optionally open mailto
    console.info('Contact form submit', { ...model })
    const subject = encodeURIComponent(`Inquiry from ${model.name}`)
    const body = encodeURIComponent(`${model.message}\n\n— ${model.name}\n${model.email}`)
    window.location.href = `mailto:hello@maz.studio?subject=${subject}&body=${body}`
    submitted.value = true
  } catch {
    // validation failed
  } finally {
    submitting.value = false
  }
}
</script>

<template>
  <section
    id="contact"
    class="relative overflow-hidden bg-stone-50 py-24 md:py-32"
    aria-labelledby="contact-heading"
  >
    <div class="pointer-events-none select-none blur-sm" aria-hidden="true">
      <div class="mx-auto grid max-w-7xl gap-14 px-6 md:grid-cols-2 md:gap-20 md:px-10">
        <div>
          <p class="text-xs tracking-[0.2em] text-olive uppercase">Inquire</p>
          <h2 id="contact-heading" class="mt-3 font-display text-4xl text-stone-900 md:text-5xl">
            Contact
          </h2>
          <p class="mt-6 max-w-md text-base leading-relaxed text-stone-600">
            Tell us about a site, a renovation, or an interior brief. We reply within a few
            business days.
          </p>
          <div class="mt-10 space-y-2 text-sm text-stone-600">
            <p>hello@maz.studio</p>
            <p>Gdańsk, Poland</p>
          </div>
        </div>

        <div>
          <NForm
            ref="formRef"
            :model="model"
            :rules="rules"
            size="large"
            :show-require-mark="false"
            @submit="handleSubmit"
          >
            <NFormItem path="name" label="Name">
              <NInput v-model:value="model.name" placeholder="Your name" />
            </NFormItem>
            <NFormItem path="email" label="Email">
              <NInput v-model:value="model.email" placeholder="you@example.com" />
            </NFormItem>
            <NFormItem path="message" label="Message">
              <NInput
                v-model:value="model.message"
                type="textarea"
                placeholder="Project type, location, timeline…"
                :autosize="{ minRows: 4, maxRows: 8 }"
              />
            </NFormItem>
            <div class="mt-2 flex items-center gap-4">
              <NButton type="primary" attr-type="submit" class="px-8!">Send message</NButton>
            </div>
          </NForm>
        </div>
      </div>
    </div>

    <div
      class="absolute inset-0 z-10 flex items-center justify-center bg-stone-50/40"
      role="status"
    >
      <p class="font-display text-8xl tracking-wide text-stone-900 sm:text-8xl md:text-9xl">
        coming soon...
      </p>
    </div>
  </section>
</template>
