<template>
  <div
    v-show="isVisible"
    class="modal"
    role="dialog"
    aria-modal="true"
    aria-labelledby="modal-title"
  >
    <div
      class="modal__bg"
      :class="{ 'modal__bg--active': isActive }"
      @click.stop="close()"
    ></div>

    <div
      class="modal__container"
      :class="{ 'modal__container--active': isActive }"
    >
      <Icon
        class="modal__container__close cursor-pointer"
        aria-label="Fechar"
        name="x"
        size="32"
        @click="close()"
      />
      <header class="modal__header">
        <div class="flex align-items-center">
          <div class="modal__heading">
            <div class="flex align-items-center">
              <p class="modal__title" v-text="title"></p>
            </div>
          </div>
        </div>
      </header>

      <div class="modal__slot" tabindex="0">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppModal',
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isActive: this.show,
      isVisible: this.show,
    }
  },
  watch: {
    show(newValue) {
      if (newValue) this.isVisible = newValue
      setTimeout(() => {
        try {
          document.body.style.overflowY = newValue ? 'hidden' : 'scroll'
        } finally {
          this.isActive = newValue
          if (!newValue) {
            setTimeout(() => (this.isVisible = newValue), 250)
          }
        }
      }, 30)
    },
  },
  methods: {
    close() {
      this.isActive = false
      setTimeout(() => this.$emit('close'), 250)
    },
  },
}
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 121;

  &__bg {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: color('dark');
    opacity: 0;
    transition: opacity 0.25s ease-in;

    &--active {
      opacity: 0.5;
      transition: opacity 0.25s ease-out 0.1s;
    }
  }

  &__container {
    position: fixed;
    max-width: 632px;
    width: 100%;
    max-height: 95%;
    left: 0;
    right: 0;
    margin: initial;
    bottom: -100%;
    transition: bottom 0.4s ease-out;

    &--active {
      bottom: 0;
    }

    &__close {
      display: flex;
      justify-content: flex-end;
      padding: 0.5rem 0;
    }
  }

  &__header {
    padding: 1rem 2rem 0 2rem;
    background-color: color('neutral');
  }

  &__heading {
    flex-basis: 0;
    flex-grow: 1;
    max-width: calc(100% - 40px);
  }

  &__close {
    flex: 0 0 auto;
    width: 24px;
  }

  &__title {
    font-size: 1.5rem;
    font-weight: 700;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    color: color('dark');
  }

  &__icon {
    flex: 0 0 auto;
    width: auto;
    max-width: 100%;
  }

  &__slot {
    padding: 0 2rem 2rem;
    max-height: 78vh;
    overflow: auto;
    background-color: color('neutral');
  }
}

@media (min-width: 632px) {
  .modal {
    &__container {
      position: fixed;
      width: 60rem;
      left: 50%;
      top: 50%;
      bottom: initial;
      transform: translate(-50%, -50%);
      overflow: hidden;
      opacity: 0;
      margin-top: -2rem;
      background-color: color('neutral', 'light');
      transition: margin 0.15s ease-in, opacity 0.15s ease-in 0.1s;

      &--active {
        bottom: initial;
        margin-top: 0;
        opacity: 1;
        transition: opacity 0.3s ease-out, margin 0.15s ease-in;
      }
    }
  }
}
</style>
