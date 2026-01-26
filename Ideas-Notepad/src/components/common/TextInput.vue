<template>
  <div class="base-text-input">
    <label>{{ label }}</label>
    <input type="text"
           ref="text-input"
           v-model="inputValue"
           :autocomplete="autocompleteValue"
           :style="inputStyles"
           :placeholder
           :required
           :disabled
           :readonly
           @input="onInput"
           @change="onChange"
           @keydown.enter="onEnter"/>
  </div>
</template>

<script setup lang="ts">
import {computed, ref, watch} from "vue";

interface ITextInputProps {
  modelValue?: string,
  required?: boolean,
  inputWidth?: number,
  disabled?: boolean,
  label?: string,
  autocomplete?: boolean,
  placeholder?: string
  fullWidth?: boolean
  readonly?: boolean
}

const props = withDefaults(defineProps<ITextInputProps>(), {
  inputWidth: 12,
  autocomplete: false
})

const emit = defineEmits(['update:modelValue', 'input', 'change', 'enter'])

const autocompleteValue = computed(() => {
  return props.autocomplete ? 'on' : 'off'
})

const inputStyles = computed(() => {
  return !props.fullWidth ? `width: ${props.inputWidth}rem` : undefined
})

const inputValue = ref()
watch(() => props.modelValue, (modelValue) => {
  inputValue.value = modelValue
}, {immediate: true})

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

<style scoped lang="scss">
.base-text-input {
  display: flex;
  flex-direction: column;
  gap: .15rem;

  input {
    padding: .5rem;
    border-radius: .25rem;
    border-width: var(--input-border-width);
    border-color: var(--input-border-color);
    box-shadow: var(--input-shadow-color) 4px 4px;
    background-color: var(--description-background-color);
  }
}
</style>
