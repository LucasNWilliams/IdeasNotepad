<template>
  <div class="base-text-input">
    <label>{{ label }}</label>
    <textarea type="text"
              ref="text-input"
              v-model="inputValue"
              :autocomplete="autocompleteValue"
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

//TODO have <textarea spellcheck="true"/> be connected to settings

interface ITextInputProps {
  required?: boolean,
  disabled?: boolean,
  label?: string,
  autocomplete?: boolean,
  placeholder?: string
}

const props = withDefaults(defineProps<ITextInputProps>(), {
  autocomplete: false
})

const emit = defineEmits(['update:modelValue', 'input', 'change', 'enter'])

const autocompleteValue = computed(() => {
  return props.autocomplete ? 'on' : 'off'
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

<style scoped lang="scss">
.base-text-input {
  display: flex;
  flex-direction: column;
  gap: .15rem;

  textarea {
    resize: none;
    border-width: var(--input-border-width);
    border-radius: .5rem;
    border-color: var(--input-border-color);
    height: 100%;
    box-shadow: grey 4px 4px;
  }
}
</style>
