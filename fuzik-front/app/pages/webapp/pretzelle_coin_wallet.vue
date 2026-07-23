<template>
    <div class="flex justify-center">
        <div class="w-full max-w-md border-white-2 rounded-[2rem] border bg-gray-900 min-h-screen shadow-2xl relative overflow-hidden">

        <div class="px-6 py-4">
            <div class="bg-blue-300 p-8 rounded-[2rem] text-black shadow-lg shadow-blue-400/20">
                <p class="text-sm font-medium opacity-80 mb-1">Total Premium Coin Balance</p>
                <div class="flex items-baseline gap-2">
                    <h2 class="text-4xl font-extrabold" id="main-balance">$1,250.00</h2>
                </div>
            
            </div>
        </div>

        <div class="grid grid-cols-3 gap-4 px-6 py-6">
            <button onclick="openAddMoney()" class="flex flex-col border-white items-center gap-2 group">
                <div class="w-14 h-14 bg-zinc-800 rounded-2xl flex items-center justify-center group-hover:bg-blue-400 group-hover:text-black transition-all duration-300">
                    <i class="fas fa-plus text-lg text-white"></i>
                </div>
                <span class="text-xs text-zinc-400">Add</span>
            </button>
            <button class="flex flex-col items-center gap-2 group">
                <div class="w-14 h-14 bg-zinc-800 rounded-2xl flex items-center justify-center group-hover:bg-blue-400 group-hover:text-black transition-all duration-300">
                    <i class="fas fa-paper-plane text-lg"></i>
                </div>
                <span class="text-xs text-zinc-400">Send</span>
            </button>
            <button class="flex flex-col items-center gap-2 group">
                <div class="w-14 h-14 bg-zinc-800 rounded-2xl flex items-center justify-center group-hover:bg-blue-400 group-hover:text-black transition-all duration-300">
                    <i class="fas fa-history text-lg"></i>
                </div>
                <span class="text-xs text-zinc-400">History</span>
            </button>
        </div>

        <div class="bg-zinc-800/50 rounded-t-[2.5rem] mt-4 px-8 pt-8 pb-24 min-h-[400px]">
            <div class="flex justify-between items-center mb-6">
                <h3 class="text-lg font-bold">Recent Activity</h3>
                <button class="text-blue-400 text-sm font-semibold">See All</button>
            </div>

            <div class="space-y-6">
                <div class="flex justify-between items-center">
                    <div class="flex items-center gap-4">
                        <div class="w-12 h-12 bg-black rounded-xl flex items-center justify-center text-green-400">
                            <i class="fas fa-arrow-down"></i>
                        </div>
                        <div>
                            <p class="font-bold">Steam Top-up</p>
                            <p class="text-xs text-zinc-500">Feb 17, 2026</p>
                        </div>
                    </div>
                    <p class="font-bold text-red-400">-$25.00</p>
                </div>

                <div class="flex justify-between items-center">
                    <div class="flex items-center gap-4">
                        <div class="w-12 h-12 bg-black rounded-xl flex items-center justify-center text-blue-400">
                            <i class="fas fa-wallet"></i>
                        </div>
                        <div>
                            <p class="font-bold">Added via K-Bank</p>
                            <p class="text-xs text-zinc-500">Feb 15, 2026</p>
                        </div>
                    </div>
                    <p class="font-bold text-green-400">+$100.00</p>
                </div>
            </div>
        </div>

        <div class="absolute bottom-0 left-0 right-0 bg-zinc-900/90 backdrop-blur-md border-t border-zinc-800 px-10 py-6 flex justify-between items-center">
            <i class="fas fa-home text-blue-400 text-xl"></i>
            <i class="fas fa-chart-pie text-zinc-600 text-xl"></i>
            <i class="fas fa-credit-card text-zinc-600 text-xl"></i>
            <i class="fas fa-user text-zinc-600 text-xl"></i>
        </div>
    </div>
    </div>
</template>

<script setup lang="ts">

definePageMeta({
  layout: "main"
});

</script>

<style scoped>

@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css");

</style>