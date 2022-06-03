<template>
  <button
    :type="type"
    :class="[
      'button',
      disabled && 'button__disabled',
      outlined && 'button__outlined',
    ]"
    @click="!disabled && $emit('click')"
    v-text="label"
  ></button>
</template>

<script>
export default {
  name: 'AppButton',

  props: {
    type: {
      type: String,
      default: 'submit',
    },

    label: {
      type: String,
      required: true,
    },

    disabled: {
      type: Boolean,
      default: false,
    },

    outlined: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.button {
  padding: 1rem;
  border-radius: 4px;
  font-size: 1rem;
  text-align: center;
  text-decoration: none;
  overflow: hidden;
  user-select: none;
  transition: transform 0.05s ease, border 0.2s ease-out;
  background-color: color('secondary');
  cursor: pointer;

  &__outlined {
    background: transparent;
    border: 1px solid color('primary', 'darkest');
    color: color('primary', 'darkest');
  }

  &__disabled {
    background: transparent;
    background-color: #c8cece;
    border: 1px solid #a7acaf;
    color: #81898c;
    font-weight: 500;
    cursor: not-allowed;
  }
}
</style>
