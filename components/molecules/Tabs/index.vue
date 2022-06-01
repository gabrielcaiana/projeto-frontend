<template>
  <nav class="tabs">
    <label
      v-for="item in items"
      :key="item.id"
      class="tabs__item"
      role="link"
      :aria-label="item.title"
    >
      <input
        type="radio"
        :name="name"
        class="tabs__input"
        :checked="item.id === active"
        @click="onNavigate(item.id)"
      />
      <div class="tabs__title">{{ item.title }}</div>
    </label>
  </nav>
</template>

<script>
export default {
  name: 'AppTabs',
  props: {
    active: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      name: 'tabs-' + this._uid,
      items: [
        { id: 'id1', title: 'Todos os semestres' },
        { id: 'id2', title: '2º semestre de 2019' },
        { id: 'id3', title: '1º semestre de 2020' },
      ],
    }
  },
  methods: {
    onNavigate(itemId) {
      this.$emit('navigate', itemId)
    },
  },
}
</script>

<style lang="scss" scoped>
.tabs {
  $this: &;
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  background: color('neutral', 'light');
  width: 700px;

  @include screen('small', 'medium') {
    flex-direction: column;
    width: 100%;
  }

  &__item {
    display: flex;
    flex: 1;
    align-items: center;
    cursor: pointer;
    border: 1px solid color('primary', 'darkest');
    transition: all 300ms;

    &:hover {
      background: color('neutral');
    }
  }

  &__input {
    position: absolute;
    width: 1px;
    height: 1px;
    border: 0;
    padding: 0;
    margin: -1px;
    clip: rect(0 0 0 0);
    overflow: hidden;

    &:checked {
      + #{$this}__title {
        color: #fff;
        font-weight: 500;
        background: color('primary', 'darkest');
      }
    }
  }

  &__title {
    display: flex;
    height: 32px;
    align-items: center;
    width: 100%;
    justify-content: center;
    font-weight: 500;
    font-size: 1rem;
    color: color('primary', 'darkest');
  }
}
</style>
