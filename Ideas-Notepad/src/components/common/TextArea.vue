<template>
  <div class="base-text-area">
    <label>{{ label }}</label>
    <textarea type="text"
              ref="text-input"
              v-model="inputValue"
              :autocomplete="autocompleteValue"
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

//TODO have <textarea spellcheck="true"/> be connected to settings

interface ITextInputProps {
  modelValue?: string
  required?: boolean,
  disabled?: boolean,
  label?: string,
  autocomplete?: boolean,
  placeholder?: string
  readonly?: boolean
}

const props = withDefaults(defineProps<ITextInputProps>(), {
  autocomplete: false
})

const emit = defineEmits(['update:modelValue', 'input', 'change', 'enter'])

const autocompleteValue = computed(() => {
  return props.autocomplete ? 'on' : 'off'
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

<style lang="scss">
.base-text-area {
  display: flex;
  flex-direction: column;
  gap: .15rem;

  textarea {
    padding: .5rem;
    resize: none;
    border-width: var(--input-border-width);
    border-radius: .5rem;
    border-color: var(--input-border-color);
    height: 100%;
    box-shadow: grey 4px 4px;
  }
}
</style>
