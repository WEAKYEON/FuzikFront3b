<template>
  <label class="flex flex-col justify-start space-y-1">
    <span class="font-bold text-white">
      {{ label }}<span v-if="required" class="text-yellow-300"> *</span>
    </span>
    <input
      :value="modelValue"
      type="text"
      :placeholder="placeholder"
      :readonly="readonly"
      :required="required"
      autocomplete="off"
      class="w-full outline-none rounded-xl px-3 py-2 txtinput2"
      :class="{ 'profile-field--invalid': error }"
      :aria-invalid="Boolean(error)"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    >
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
.profile-field--invalid { box-shadow:0 0 0 2px #ef4444; }
.field-error { color:#fca5a5; font-size:.8rem; }
</style>
