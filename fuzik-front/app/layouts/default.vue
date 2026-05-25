<!-- app/layouts/default.vue -->
<template>
  <div class="min-h-screen bg-slate-900 text-slate-100 flex flex-col">
    <!-- Sticky Navbar -->
    <header class="sticky top-0 z-40 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <div class="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <NuxtLink to="/" class="text-xl font-bold text-emerald-400 tracking-tight">
          Nuxt 4 + Tailwind
        </NuxtLink>
        <span class="text-xs font-mono bg-slate-800 px-2 py-1 rounded text-slate-400">v4.0 Mode</span>
      </div>
    </header>

    <!-- Main Content Slot -->
    <main class="flex-grow">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="border-t border-slate-800 bg-slate-950 py-8 text-center text-sm text-slate-500">
      <p>© 2026 Nuxt 4 Demo Site. All rights reserved.</p>
    </footer>

    <!-- Global Floating Button -->
    <BackToTop />
  </div>
</template>