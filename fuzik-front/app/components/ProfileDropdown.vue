<template>
  <div ref="root" class="profile-menu">
    <button
      type="button"
      class="profile-menu__trigger"
      :aria-expanded="open"
      aria-haspopup="menu"
      @click="open = !open"
      @keydown.esc="open = false"
    >
      <img :src="profileImage" alt="" class="profile-menu__avatar">
      <span class="profile-menu__name">{{ displayName }}</span>
      <svg class="profile-menu__chevron" viewBox="0 0 20 20" aria-hidden="true">
        <path d="m5 7.5 5 5 5-5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" />
      </svg>
    </button>

    <Transition name="profile-menu">
      <div v-if="open" class="profile-menu__panel" role="menu">
        <div class="profile-menu__identity">
          <p>{{ fullName }}</p>
          <p>{{ email }}</p>
        </div>

        <div v-for="(group, groupIndex) in menuGroups" :key="groupIndex" class="profile-menu__group">
          <NuxtLink
            v-for="item in group"
            :key="item.to"
            :to="item.to"
            class="profile-menu__item"
            role="menuitem"
            @click="open = false"
          >
            <span class="material-symbols-outlined profile-menu__icon" aria-hidden="true">{{ item.icon }}</span>
            <span>{{ item.label }}</span>
            <kbd v-if="item.shortcut">{{ item.shortcut }}</kbd>
          </NuxtLink>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
interface MenuItem {
  label: string
  icon: string
  to: string
  shortcut?: string
}

const props = withDefaults(defineProps<{
  displayName: string
  fullName?: string
  email?: string
  profileImage: string
}>(), {
  fullName: '',
  email: ''
})

const open = ref(false)
const root = ref<HTMLElement | null>(null)

const menuGroups: MenuItem[][] = [
  [{ label: 'Dashboard', icon: 'dashboard', shortcut: 'D', to: '/webapp' }],
  [
    { label: 'Profile', icon: 'assignment_ind', shortcut: 'P', to: '/webapp/profile' },
    { label: 'Change password', icon: 'key', to: '/webapp/check_recent_login' }
  ],
  [{ label: 'Inventory', icon: 'music_note', shortcut: 'I', to: '/webapp/inventory' }],
  [{ label: 'Logout', icon: 'logout', to: '/webapp/logout' }]
]

function closeWhenOutside(event: PointerEvent) {
  if (root.value && !root.value.contains(event.target as Node)) {
    open.value = false
  }
}

function closeOnEscape(event: KeyboardEvent) {
  if (event.key === 'Escape') {
    open.value = false
  }
}

onMounted(() => {
  document.addEventListener('pointerdown', closeWhenOutside)
  document.addEventListener('keydown', closeOnEscape)
})

onBeforeUnmount(() => {
  document.removeEventListener('pointerdown', closeWhenOutside)
  document.removeEventListener('keydown', closeOnEscape)
})
</script>

<style scoped>
.profile-menu {
  position: relative;
  z-index: 70;
}

.profile-menu__trigger {
  display: flex;
  min-width: 154px;
  height: 46px;
  align-items: center;
  gap: 8px;
  padding: 4px 10px;
  color: #050505;
  background: #ffe044;
  border: 1px solid #fff;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
}

.profile-menu__trigger:hover,
.profile-menu__trigger:focus-visible {
  background: #ffec77;
  outline: 2px solid #fff;
  outline-offset: 1px;
}

.profile-menu__avatar {
  width: 36px;
  height: 36px;
  flex: 0 0 36px;
  object-fit: cover;
  background: #fff;
  border: 1px solid #111827;
  border-radius: 9999px;
}

.profile-menu__name {
  max-width: 110px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.profile-menu__chevron {
  width: 16px;
  height: 16px;
  margin-left: auto;
}

.profile-menu__panel {
  position: absolute;
  top: calc(100% + 7px);
  right: 0;
  width: 194px;
  overflow: hidden;
  color: #374151;
  background: #fff;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  box-shadow: 0 12px 30px rgb(0 0 0 / 35%);
}

.profile-menu__identity {
  padding: 8px 11px 5px;
  color: #8a94a3;
  font-size: 14px;
  line-height: 1.8;
}

.profile-menu__identity p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.profile-menu__group + .profile-menu__group {
  border-top: 1px solid #e5e7eb;
}

.profile-menu__item {
  display: flex;
  min-height: 40px;
  align-items: center;
  gap: 8px;
  padding: 7px 10px;
  color: #374151;
  text-decoration: none;
  font-size: 14px;
}

.profile-menu__item:hover,
.profile-menu__item:focus-visible {
  color: #111827;
  background: #f3f4f6;
  outline: none;
}

.profile-menu__icon {
  width: 18px;
  color: #8a94a3;
  font-size: 18px;
}

.profile-menu__item kbd {
  margin-left: auto;
  padding: 1px 5px;
  color: #374151;
  background: #f8fafc;
  border: 1px solid #d1d5db;
  border-radius: 4px;
  font-family: inherit;
  font-size: 11px;
  line-height: 16px;
}

.profile-menu-enter-active,
.profile-menu-leave-active {
  transition: opacity 120ms ease, transform 120ms ease;
  transform-origin: top right;
}

.profile-menu-enter-from,
.profile-menu-leave-to {
  opacity: 0;
  transform: translateY(-4px) scale(.98);
}

@media (max-width: 639px) {
  .profile-menu__trigger {
    min-width: 0;
    height: 42px;
    padding: 3px 8px;
  }

  .profile-menu__avatar {
    width: 32px;
    height: 32px;
    flex-basis: 32px;
  }

  .profile-menu__name {
    max-width: 82px;
  }
}
</style>
