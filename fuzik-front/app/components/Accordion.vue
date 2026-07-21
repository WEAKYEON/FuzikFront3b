<script setup lang="ts">
interface AccordionItem {
  id: string | number;
  title: string;
  content: string;
}

defineProps<{
  items: AccordionItem[];
}>();

// Track the currently open accordion item ID (null means all closed)
const activeId = ref<string | number | null>(null);

const toggleItem = (id: string | number) => {
  activeId.value = activeId.value === id ? null : id;
};
</script>

<template>
  <!-- REMOVED: border-2, divide-y, and bg-[#1a1a1a] from the container -->
  <!-- ADDED: space-y-4 to create gaps between the items -->
  <div class="w-full  mx-auto space-y-4 shadow-sm">
    <div 
      v-for="item in items" 
      :key="item.id" 
      class="accordion-item border-2 border-[#2a2a2a] rounded-lg bg-[#4a4a4a] overflow-hidden"
    >
      <!-- Accordion Header/Trigger -->
      <button
        type="button"
        @click="toggleItem(item.id)"
        class="w-full flex items-center justify-between p-5 font-medium text-left text-white hover:bg-slate-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
        :aria-expanded="activeId === item.id"
      >
        <span>{{ item.title }}</span>
        <!-- Chevron Icon -->
        <svg
          class="w-5 h-5 text-[#fff600] transition-transform duration-300"
          :class="{ 'rotate-180': activeId === item.id }"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <!-- Accordion Body (Smooth Height Transition) -->
      <div
        class="grid transition-all duration-300 ease-in-out"
        :class="activeId === item.id ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'"
      >
        <div class="overflow-hidden">
          <!-- OPTIONAL ADDITION: border-t border-[#fff600] to separate button from text inside the card -->
          <div class="p-5 text-sm text-white bg-[#2a2a2a] leading-relaxed border-t border-[#fff600]/30">
            {{ item.content }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
