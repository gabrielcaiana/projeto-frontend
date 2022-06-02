<template>
  <div class="slider">
    <div class="slider__wrapper">
      <input
        ref="slider"
        v-model="value"
        class="slider__input"
        type="range"
        :max="max"
        :min="min"
        :step="step"
        @change="onChange"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppSlider',
  model: {
    prop: 'modelValue',
    event: 'change',
  },
  props: {
    min: {
      type: String,
      required: false,
      default: '0',
    },
    max: {
      type: String,
      required: false,
      default: '100',
    },
    step: {
      type: String,
      required: false,
      default: '1',
    },
    modelValue: {
      type: [String, Number],
      default: undefined,
    },
  },
  data() {
    return {
      sliderWidth: 0,
      value:
        this.modelValue === '' || this.modelValue === undefined
          ? 0
          : this.modelValue,
    }
  },
  computed: {
    position() {
      const val = this.value
      const width = this.sliderWidth - 20
      const percent = (val - this.min) / (this.max - this.min)
      const offset = -2
      const position = width * percent + offset
      return `${position}px`
    },
  },

  mounted() {
    window.addEventListener('resize', this.resizeHandler)
    this.sliderProgress()
  },

  destroyed() {
    window.removeEventListener('resize', this.resizeHandler)
  },

  methods: {
    sliderProgress(color = '#18acc4') {
      const slider = this.$refs.slider
      const execute = (slider.oninput = () => {
        slider.style.background = this.setProgressBackground(color)
      })
      execute()
    },

    setProgressBackground(color) {
      const value = ((this.value - this.min) / (this.max - this.min)) * 100
      return (
        `linear-gradient(to right, ${color} 0%, ${color} ` +
        value +
        '%, white ' +
        value +
        '%, white'
      )
    },

    onChange() {
      this.$emit('change', this.value)
    },

    resizeHandler() {
      this.sliderWidth = this.$refs.slider.clientWidth
    },
  },
}
</script>

<style lang="scss" scoped>
.slider {
  $this: &;
  align-items: center;
  display: flex;
  gap: 1rem;
  padding: 1rem 0;

  &__wrapper {
    position: relative;
    width: 100%;

    #{$this}__value {
      position: absolute;
      display: flex;
      top: -28px;
      text-align: center;
      font-size: 1rem;
      font-weight: 500;
      color: color('primary');
      gap: 2rem;
    }

    #{$this}__input {
      -webkit-appearance: none;
      width: 100%;
      height: 8px;
      position: relative;
      border-radius: 1rem;
      border: 1px solid color('primary');

      &::-webkit-slider-thumb {
        -webkit-appearance: none;
        height: 32px;
        width: 32px;
        border: 1px solid color('primary');
        box-sizing: border-box;
        border-radius: 1rem;
        transition: all 300ms;
      }

      &:not([disabled])::-webkit-slider-thumb {
        background: color('neutral');
        cursor: pointer;

        &:hover {
          transform: scale(115%);
        }

        &:active {
          background-color: color('primary');
          border-color: color('primary');
          transform: scale(115%);
        }
      }

      &::-moz-range-thumb {
        -moz-appearance: none;
        height: 32px;
        width: 32px;
        background: color('neutral');
        border: 1px solid color('primary');
        box-sizing: border-box;
        cursor: pointer;
        transition: all 300ms;

        &:hover {
          transform: scale(115%);
        }

        &:active {
          background-color: color('primary');
          border-color: color('primary');
          transform: scale(115%);
        }
      }

      &::-ms-thumb {
        -ms-appearance: none;
        height: 32px;
        width: 32px;
        background: color('neutral');
        border: 1px solid color('primary');
        box-sizing: border-box;
        cursor: pointer;
        transition: all 300ms;

        &:hover {
          transform: scale(115%);
        }

        &:active {
          background-color: color('primary');
          border-color: color('primary');
          transform: scale(115%);
        }
      }
    }

    &__input:focus-visible::-webkit-slider-thumb {
      background-color: color('neutral');
      border: 2px solid color('primary');
    }
  }
}
</style>
