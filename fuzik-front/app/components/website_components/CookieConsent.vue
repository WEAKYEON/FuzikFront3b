<script setup lang="ts">
import { websiteContent, type WebsiteLocale } from './content'
const props = withDefaults(
  defineProps<{
    locale?: WebsiteLocale
    optionalCookies?: boolean
    titleClass?: string
  }>(),
  {
    locale: 'en',
    optionalCookies: true,
    titleClass: 'text-[#f8f9fa]',
  },
)
const copy = computed(() => websiteContent[props.locale].cookies)
// Preserve the existing global cookie handlers; consent behavior is outside this refactor.
</script>

<template>
  <div id="cookie-consent-modal" class="cookie-modal-overlay">
    <div class="cookie-modal-content">
      <h2 class="text-2xl font-bold mb-4" :class="titleClass">
        {{ copy.title }}
      </h2>
      <p class="text-gray-300 mb-6">
        {{ copy.intro
        }}<a
          href="https://fuzikapp.com"
          class="text-[#fff600] hover:underline"
          >{{ copy.site }}</a
        >{{ copy.description }}
      </p>
      <div id="initial-buttons" class="flex justify-center space-x-4">
        <button onclick="acceptAllCookies()" class="btn-primary px-6 py-3">
          {{ copy.accept }}
        </button>
        <button
          onclick="showPreferenceManager()"
          class="btn-secondary px-6 py-3"
        >
          {{ copy.manage }}
        </button>
      </div>

      <div id="cookie-preferences" class="cookie-preferences-section hidden">
        <h3 class="text-xl font-bold mb-4 text-[#f8f9fa]">
          {{ copy.preferencesTitle }}
        </h3>

        <div class="cookie-preference-item">
          <input type="checkbox" id="essential-cookies" checked disabled />
          <label for="essential-cookies">{{ copy.essentialLabel }}</label>
          <p class="text-gray-400">{{ copy.essentialDescription }}</p>
        </div>

        <div v-if="optionalCookies" class="cookie-preference-item">
          <input type="checkbox" id="analytics-cookies" checked />
          <label for="analytics-cookies">{{
            websiteContent.en.cookies.analyticsLabel
          }}</label>
          <p class="text-gray-400">
            {{ websiteContent.en.cookies.analyticsDescription }}
          </p>
        </div>

        <div v-if="optionalCookies" class="cookie-preference-item">
          <input type="checkbox" id="marketing-cookies" checked />
          <label for="marketing-cookies">{{
            websiteContent.en.cookies.marketingLabel
          }}</label>
          <p class="text-gray-400">
            {{ websiteContent.en.cookies.marketingDescription }}
          </p>
        </div>

        <div class="flex justify-center mt-6">
          <button
            onclick="saveCookiePreferences()"
            class="btn-primary px-6 py-3"
          >
            {{ copy.save }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped src="~/assets/css/buttons.css"></style>

<style scoped>
.cookie-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  opacity: 0;
  visibility: hidden;
  transition:
    opacity 0.3s ease,
    visibility 0.3s ease;
}

.cookie-modal-overlay.show {
  opacity: 1;
  visibility: visible;
}

.cookie-modal-content {
  background-color: #2a2a2a;
  padding: 2rem;
  border-radius: 0.75rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
  max-width: 500px;
  width: 90%;
  text-align: center;
  position: relative;
  transform: translateY(20px);
  opacity: 0;
  transition:
    transform 0.3s ease,
    opacity 0.3s ease;
  color: #e2e8f0;
}

.cookie-modal-overlay.show .cookie-modal-content {
  transform: translateY(0);
  opacity: 1;
}

.cookie-preferences-section {
  text-align: left;
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.cookie-preference-item {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.cookie-preference-item input[type='checkbox'] {
  margin-right: 0.75rem;
  width: 1.25rem;
  height: 1.25rem;
  accent-color: #fff600;
}

.cookie-preference-item label {
  flex-grow: 1;
  font-weight: 500;
  color: #e2e8f0;
}

.cookie-preference-item p {
  font-size: 0.875rem;
  color: #b0b0b0;
  margin-top: 0.25rem;
  margin-left: calc(1.25rem + 0.75rem);
}
</style>
