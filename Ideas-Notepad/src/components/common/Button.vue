<template>
  <button class="button-body" @click="onClick">
    <!--    TODO FontAwesomeIcon -->
    <slot>
      <template v-if="icon != null">
        <FontAwesomeIcon :icon="icon"/>
      </template>
      <template v-if="label != null">
        {{ label }}
      </template>
    </slot>
  </button>
</template>

<script setup lang="ts">

import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {FALibraryIcons} from "@/font-awesome-icons";
import {IconDefinition} from "@fortawesome/free-regular-svg-icons";

interface IButtonProps {
  label?: string
  icon?: typeof FALibraryIcons | IconDefinition
}

const props = defineProps<IButtonProps>()
const emit = defineEmits(['onClick'])

const onClick = (e: Event) => {
  emit('onClick', e)
}

</script>

<style scoped lang="scss">
.button-body {
  display: flex;
  flex-direction: row;
  gap: .5rem;
  padding: .25rem .5rem;
  margin: .5rem;
}
</style>
