<template>
  <div class="w-full">
    <span class="text-base text-medium text-dark" v-text="label"></span>
    <div class="custom-select" :tabindex="tabindex" @blur="open = false">
      <div class="selected" :class="{ open: open }" @click="open = !open">
        {{ selected }}
      </div>
      <div class="items" :class="{ selectHide: !open }">
        <div
          v-for="(option, i) of options"
          :key="i"
          @click="
            selected = option
            open = false
            $emit('input', option)
          "
        >
          {{ option }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppInputSelect',
  props: {
    options: {
      type: Array,
      required: true,
    },
    default: {
      type: String,
      required: false,
      default: null,
    },
    label: {
      type: String,
      required: true,
    },
    tabindex: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  data() {
    return {
      selected: this.default
        ? this.default
        : this.options?.length > 0
        ? this.options[0]
        : null,
      open: false,
    }
  },
  mounted() {
    this.$emit('input', this.selected)
  },
}
</script>

<style lang="scss" scoped>
.custom-select {
  position: relative;
  width: 100%;
  text-align: left;
  outline: none;
  height: 47px;
  line-height: 47px;
  border: 1px solid color('dark');
  border-radius: 4px;
  margin-top: 0.5rem;

  .selected {
    border-radius: 6px;
    color: color('dark');
    padding-left: 1em;
    cursor: pointer;
    user-select: none;

    &:after {
      position: absolute;
      content: '';
      top: 22px;
      right: 1em;
      width: 0;
      height: 0;
      border: 5px solid transparent;
      border-color: color('dark') transparent transparent transparent;
    }

    .open {
      border: 1px solid color('dark');
      border-radius: 6px 6px 0px 0px;
    }
  }

  .items {
    color: #fff;
    border-radius: 0px 0px 6px 6px;
    overflow: hidden;
    border-right: 1px solid color('dark');
    border-left: 1px solid color('dark');
    border-bottom: 1px solid color('dark');
    position: absolute;
    background-color: color('neutral');
    left: 0;
    right: 0;
    z-index: 1;

    div {
      color: color('dark');
      border-bottom: 1px solid color('dark');
      padding-left: 1em;
      cursor: pointer;
      user-select: none;

      &:hover {
        background-color: color('neutral');
      }
    }
  }

  .selectHide {
    display: none;
  }
}
</style>
