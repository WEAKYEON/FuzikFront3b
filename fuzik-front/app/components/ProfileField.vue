<template>
  <label class="profile-field">
    <span class="profile-field__label">
      {{ label }}<span v-if="required" class="text-yellow-300"> *</span>
    </span>
    <span class="profile-field__control" :class="{ 'profile-field--invalid': error }">
      <input
        :value="modelValue"
        type="text"
        :placeholder="placeholder"
        :readonly="readonly"
        :required="required"
        autocomplete="off"
        :aria-invalid="Boolean(error)"
        @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      >
      <span v-if="!readonly" class="material-symbols-outlined profile-field__edit" aria-hidden="true">edit</span>
    </span>
    <span v-if="error" class="field-error">{{ error }}</span>
  </label>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  modelValue: string
  label: string
  placeholder?: string
  readonly?: boolean
  required?: boolean
  error?: string
}>(), { placeholder: '', readonly: false, required: false, error: '' })

defineEmits<{ 'update:modelValue': [value: string] }>()
</script>

<style scoped>
.profile-field { display:flex; min-width:0; flex-direction:column; gap:.55rem; }
.profile-field__label { color:#fde047; font-size:.9rem; font-weight:700; }
.profile-field__control { display:flex; align-items:center; gap:.75rem; border-bottom:3px solid #fde047; box-shadow:0 5px 8px -5px rgb(253 224 71 / 80%); transition:border-color .2s ease, box-shadow .2s ease; }
.profile-field__control:focus-within { border-color:#facc15; box-shadow:0 7px 11px -5px rgb(250 204 21 / 95%); }
.profile-field__control input { width:100%; min-width:0; padding:.25rem 0 .6rem; color:#fff; background:transparent; border:0; outline:0; font-size:1.05rem; font-weight:700; }
.profile-field__control input::placeholder { color:#9ca3af; font-weight:500; }
.profile-field__control input[readonly] { cursor:default; }
.profile-field__edit { flex:0 0 auto; margin-bottom:.35rem; padding:.22rem; color:#000; background:#fde047; border-radius:50%; font-size:1rem; font-variation-settings:'FILL' 1; }
.profile-field--invalid { border-color:#ef4444; box-shadow:0 5px 8px -5px rgb(239 68 68 / 90%); }
.field-error { color:#fca5a5; font-size:.8rem; }

@media (min-width:768px) {
  .profile-field__label { font-size:1rem; }
  .profile-field__control input { font-size:1.25rem; }
}
</style>
