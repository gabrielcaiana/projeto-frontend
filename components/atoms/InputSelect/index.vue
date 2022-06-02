<template>
  <div class="custom-select">
    <label v-if="label && !value" class="custom-select__label">{{
      label
    }}</label>
    <select :value="value" v-bind="$attrs" @change="updateValue">
      <option
        v-for="option in options"
        :key="option"
        :selected="option == value"
        :value="option"
      >
        <span class="custom-select__option">{{ option }}</span>
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'AppInputSelect',
  inheritAttrs: false,
  props: {
    options: {
      type: Array,
      required: true,
    },
    label: {
      type: String,
      default: '',
    },

    value: {
      type: [String, Array],
      required: true,
    },
  },
  methods: {
    updateValue(event) {
      this.$emit('input', event.target.value)
    },
  },
}
</script>

<style lang="scss" scoped>
.custom-select {
  width: 100%;
  text-align: left;
  height: 47px;
  border: 1px solid color('dark');
  border-radius: 4px;
  position: relative;
  display: flex;
  align-items: center;

  &__label {
    padding: 1rem;
  }

  select {
    width: 95%;
    font-size: 1rem;
    position: absolute;
    top: 1rem;
    left: 1rem;
    background: transparent;

    @include screen('large', 'infinity') {
      width: 90%;
    }
  }
}
</style>
