<template>
  <button @click="onClick">
<!--    TODO FontAwesomeIcon -->
    <slot>
      <template v-if="label != null">
        {{ label }}
      </template>
    </slot>
  </button>
</template>

<script setup lang="ts">

interface IButtonProps {
  label?: string
  icon?: object
}

const props = defineProps<IButtonProps>()
const emit = defineEmits(['onClick'])

const onClick = (e: Event) => {
  emit('onClick', e)
}

</script>

<style scoped lang="scss">

</style>
