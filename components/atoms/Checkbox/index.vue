<template>
  <div>
    <label class="flex items-center gap text-base text-dark">
      <input
        v-bind="$attrs"
        :checked="checked"
        type="checkbox"
        name="checkbox"
        @input="updateValue($event)"
      />
      {{ label }}
    </label>
  </div>
</template>

<script>
export default {
  name: 'AppCheckbox',
  inheritAttrs: false,
  props: {
    checked: {
      type: [Boolean],
      default: false,
    },

    label: {
      type: String,
      default: '',
    },
  },

  methods: {
    updateValue(event) {
      this.$emit('input', event.target.checked)
    },
  },
}
</script>

<style lang="scss" scoped>
input[type='checkbox'] {
  -webkit-appearance: none;
  appearance: none;
  margin: 0;
  font: inherit;
  color: color('primary');
  width: 1.15em;
  height: 1.15em;
  border: 0.15em solid color('dark');
  border-radius: 0.15em;
  transform: translateY(-0.075em);
  display: grid;
  place-content: center;
  cursor: pointer;

  &:checked {
    background: color('primary');
    border: 0.15em solid color('primary');

    &::before {
      transform: scale(1);
    }
  }

  &::before {
    content: '';
    width: 0.65em;
    height: 0.65em;
    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
    transform: scale(0);
    transform-origin: bottom left;
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em color('neutral');
  }
}
</style>
