<template>
  <NuxtLink
    to="/"
    aria-label="Back to Fuzik website"
    title="Back to Fuzik website"
    class="group inline-flex h-10 items-center gap-2 rounded-full border border-white/15 bg-white/5 px-2.5 pr-4 text-sm font-semibold text-white shadow-lg shadow-black/20 backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-yellow-300 hover:bg-yellow-300 hover:text-black hover:shadow-yellow-300/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black active:translate-y-0"
  >
    <span
      class="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-yellow-300 text-black transition-transform duration-200 group-hover:-translate-x-0.5 group-hover:bg-black group-hover:text-yellow-300"
      aria-hidden="true"
    >
      <svg viewBox="0 0 24 24" fill="none" class="h-4 w-4" stroke="currentColor" stroke-width="2.25">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15 18l-6-6 6-6" />
      </svg>
    </span>
    <span class="hidden whitespace-nowrap sm:inline">Back to website</span>
  </NuxtLink>
</template>
