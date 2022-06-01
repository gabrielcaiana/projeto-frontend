<template>
  <div>
    <div v-if="empty" class="card" @click="onClick">
      <Icon class="mb-1" name="plus-circle" size="64" color="#18acc4" />
      <p class="text-medium text-xl">Adicionar bolsa</p>
      <span>Clique para adicionar bolsas de cursos do seu intersse </span>
    </div>

    <div v-else class="card">Receber os dados da api</div>
  </div>
</template>

<script>
export default {
  name: 'AppCard',
  props: {
    data: {
      type: Object,
      default: () => {},
    },
    empty: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    onClick() {
      this.$emit('click')
    },
  },
}
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
  width: 300px;
  min-height: 500px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  cursor: pointer;

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }

  @include screen('small', 'medium') {
    width: 100%;
    min-height: 300px;
  }
}
</style>
