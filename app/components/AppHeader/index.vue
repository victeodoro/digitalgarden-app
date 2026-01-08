<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const isOpen = ref(false)

function openMenu() {
  isOpen.value = true
  document.documentElement.classList.add('overflow-hidden')
}

function closeMenu() {
  isOpen.value = false
  document.documentElement.classList.remove('overflow-hidden')
}

function toggleMenu() {
  isOpen.value ? closeMenu() : openMenu()
}

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape' && isOpen.value) closeMenu()
}

onMounted(() => window.addEventListener('keydown', onKeydown))
onBeforeUnmount(() => window.removeEventListener('keydown', onKeydown))
</script>

<template>
  <header class="py-2 px-5 lg:px-10">
    <nav class="flex justify-between items-center">
      <AppHeaderLogo />

      <!-- Desktop menu -->
      <ul class="hidden lg:flex gap-12">
        <li>
          <NuxtLink
            to="/#garden"
            class="
              text-paragraph cursor-pointer relative inline-block pb-1
              bg-[linear-gradient(var(--color-brand),var(--color-brand))]
              bg-no-repeat bg-left-bottom
              bg-[length:0_2px] hover:bg-[length:100%_2px]
              focus-visible:bg-[length:100%_2px]
              transition-[background-size] duration-200 ease-out
            "
          >
            The Garden
          </NuxtLink>
        </li>

        <li>
          <NuxtLink
            to="/#contact"
            class="
              text-paragraph cursor-pointer relative inline-block pb-1
              bg-[linear-gradient(var(--color-brand),var(--color-brand))]
              bg-no-repeat bg-left-bottom
              bg-[length:0_2px] hover:bg-[length:100%_2px]
              focus-visible:bg-[length:100%_2px]
              transition-[background-size] duration-200 ease-out
            "
          >
            Contact
          </NuxtLink>
        </li>
      </ul>

      <button
        type="button"
        class="lg:hidden inline-flex items-center justify-center rounded-md p-2
               text-paragraph hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2
               focus-visible:ring-[var(--color-brand)]"
        :aria-expanded="isOpen"
        aria-controls="mobile-menu"
        aria-label="Abrir menu"
        @click="toggleMenu"
      >
        <span class="sr-only">Abrir menu</span>
        <div class="flex flex-col gap-1.5">
          <span class="block h-[2px] w-6 bg-current"></span>
          <span class="block h-[2px] w-6 bg-current"></span>
          <span class="block h-[2px] w-6 bg-current"></span>
        </div>
      </button>
    </nav>

    <!-- Mobile overlay panel -->
    <transition
      enter-active-class="transition-opacity duration-200"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-150"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isOpen"
        class="fixed inset-0 z-50"
        aria-hidden="false"
      >
        <!-- backdrop / click outside to close -->
        <button
          class="absolute inset-0 w-full h-full bg-[var(--color-background)]/95"
          aria-label="Fechar menu"
          @click="closeMenu"
        />

        <!-- panel content -->
        <div
          id="mobile-menu"
          class="relative h-full w-full bg-[var(--color-background)] text-paragraph
                 flex flex-col"
        >
          <div class="flex items-center justify-between py-2 px-5 lg:px-10">
            <AppHeaderLogo />
            <button
              type="button"
              class="rounded-md p-2 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2
                     focus-visible:ring-[var(--color-brand)]"
              aria-label="Fechar menu"
              @click="closeMenu"
            >

              <span class="block text-2xl leading-none">×</span>
            </button>
          </div>

          <div class="flex-1 flex items-start justify-start px-12">
            <ul class="flex flex-col items-start gap-5 text-2xl font-serif">
              <li>
                <NuxtLink
                  to="#garden"
                  class="
                    relative inline-block pb-1
                    bg-[linear-gradient(var(--color-brand),var(--color-brand))]
                    bg-no-repeat bg-left-bottom
                    bg-[length:0_2px] hover:bg-[length:100%_2px]
                    focus-visible:bg-[length:100%_2px]
                    transition-[background-size] duration-200 ease-out
                  "
                  @click="closeMenu"
                >
                  The Garden
                </NuxtLink>
              </li>

              <li>
                <NuxtLink
                  to="#contact"
                  class="
                    relative inline-block pb-1
                    bg-[linear-gradient(var(--color-brand),var(--color-brand))]
                    bg-no-repeat bg-left-bottom
                    bg-[length:0_2px] hover:bg-[length:100%_2px]
                    focus-visible:bg-[length:100%_2px]
                    transition-[background-size] duration-200 ease-out
                  "
                  @click="closeMenu"
                >
                  Contact
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </transition>
  </header>
</template>
