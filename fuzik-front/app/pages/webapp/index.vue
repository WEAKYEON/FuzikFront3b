<template>
    <div class="bg-black text-white font-sans min-h-screen flex items-center justify-center overflow-hidden">
  
    <div class="text-center px-6 max-w-xl">
        <!-- Badge -->
        <div class="inline-block bg-[#FFF600] text-black text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full mb-6 shadow-[0_4px_20px_rgba(255,222,77,0.25)]">
            Under Construction
        </div>

        <!-- Main Heading -->
        <h1 class="text-5xl md:text-6xl font-black tracking-tight leading-tight mb-4">
            Please wait.<br>
            <span class="text-[#FFF600]">Fuzik version 1.1</span> is coming.
        </h1>

        <!-- Description -->
        <p class="text-zinc-400 text-lg md:text-xl leading-relaxed mb-10 max-w-md mx-auto">
            We are rebuilding from the ground up to bring you an entirely new experience. Stay tuned.
        </p>
        
        <!-- Animated Progress Bar -->
        <div class="w-64 h-1.5 bg-zinc-900 rounded-full mx-auto overflow-hidden">
            <div class="h-full bg-[#FFF600] rounded-full animate-[pulse_1.5s_infinite_ease-in-out] w-1/2 mx-auto"></div>
        </div>
    </div>
    </div>
</template>

<script setup lang="ts">
    definePageMeta({
        layout: "blank"
    });
</script>

<style scoped>

</style>