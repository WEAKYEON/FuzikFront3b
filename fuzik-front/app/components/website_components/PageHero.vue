<script setup lang="ts">
withDefaults(
  defineProps<{
    legal?: boolean
    gradient?: boolean
    containerClass?: string
    titleClass?: string
    description: string
  }>(),
  {
    legal: false,
    gradient: true,
    containerClass: 'container mx-auto px-6 text-center',
    titleClass: 'text-6xl md:text-7xl font-black mb-6 text-[#f8f9fa]',
  },
)
</script>

<template>
  <section
    class="hero-gradient"
    :class="[
      legal
        ? 'min-h-[50vh] flex items-center relative overflow-hidden pt-20'
        : 'py-20 md:py-32',
      { 'with-gradient': gradient },
    ]"
  >
    <template v-if="legal">
      <div
        class="hero-wave-element w-48 h-48 top-1/4 left-1/4"
        style="animation-delay: 0s"
      ></div>
      <div
        class="hero-wave-element w-64 h-64 bottom-1/3 right-1/4"
        style="animation-delay: 2s"
      ></div>
      <div
        class="hero-wave-element w-40 h-40 top-1/2 left-10"
        style="animation-delay: 4s"
      ></div>
      <div
        class="hero-wave-element w-56 h-56 bottom-10 right-10"
        style="animation-delay: 6s"
      ></div>
      <div
        class="hero-wave-element w-32 h-32 top-1/3 right-10"
        style="animation-delay: 1s"
      ></div>
      <div
        class="hero-wave-element w-48 h-48 bottom-20 left-1/3"
        style="animation-delay: 3s"
      ></div>
    </template>
    <div :class="containerClass">
      <h1 :class="titleClass"><slot /></h1>
      <p class="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
        {{ description }}
      </p>
    </div>
  </section>
</template>

<style scoped>
.with-gradient {
  background: linear-gradient(135deg, #111111 0%, #1a1a1a 50%, #2a2a2a 100%);
  position: relative;
  overflow: hidden;
}
.hero-wave-element {
  position: absolute;
  background: radial-gradient(
    circle,
    rgba(255, 246, 0, 0.15) 0%,
    rgba(255, 246, 0, 0) 70%
  );
  border-radius: 50%;
  animation: wave-pulse 15s ease-in-out infinite;
  filter: blur(12px);
  z-index: 0;
}
.with-gradient :deep(.text-glow-subtle) {
  text-shadow: 0 0 10px rgba(255, 246, 0, 0.3);
}

@keyframes wave-pulse {
  0% {
    transform: scale(0.5) translateY(0px) translateX(0px);
    opacity: 0.15;
  }
  25% {
    transform: scale(1.1) translateY(-20px) translateX(10px);
    opacity: 0.25;
  }
  50% {
    transform: scale(0.8) translateY(10px) translateX(-15px);
    opacity: 0.18;
  }
  75% {
    transform: scale(1.2) translateY(-10px) translateX(5px);
    opacity: 0.22;
  }
  100% {
    transform: scale(0.5) translateY(0px) translateX(0px);
    opacity: 0.15;
  }
}
</style>
