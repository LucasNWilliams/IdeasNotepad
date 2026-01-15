<template>
  <div class="base-text-input">
    <label>{{ label }}</label>
    <input type="text"
           ref="text-input"
           v-model="inputValue"
           :autocomplete="autocompleteValue"
           :size="inputWidth"
           :placeholder
           :required
           :disabled
           @input="onInput"
           @change="onChange"
           @keydown.enter="onEnter"/>
  </div>
</template>

<script setup lang="ts">

import {computed, ref} from "vue";

interface ITextInputProps {
  required?: boolean,
  inputWidth?: number,
  disabled?: boolean,
  label?: string,
  autocomplete?: boolean,
  placeholder: string
}

const props = withDefaults(defineProps<ITextInputProps>(), {
  inputWidth: 12,
  autocomplete: false
})

const emit = defineEmits(['update:modelValue', 'input', 'change', 'enter'])

const autocompleteValue = computed(() => {
  return props.autocomplete ? '' : 'off'
})

const inputValue = ref()

const onInput = (e: Event) => {
  const inputValue = (e.target as HTMLInputElement).value
  emit('update:modelValue', inputValue, e)
  emit('input', inputValue, e)
}

const onChange = (e: Event) => {
  const inputValue = (e.target as HTMLInputElement).value
  emit('change', inputValue, e)
}

const onEnter = (e: Event) => {
  const inputValue = (e.target as HTMLInputElement).value
  emit('enter', inputValue, e)
}

</script>

<style scoped>
.base-text-input {
  display: flex;
  flex-direction: column;

  input {
    width: 8rem;
  }
}
</style>
