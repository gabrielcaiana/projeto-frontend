<template>
  <nav class="bg-primary text-bold text-white cursor-pointer">
    <Container class="flex relative w-full">
      <li class="list__item p-1">Minha conta</li>
      <div v-if="isMobile" class="absolute right-0">
        <div class="flex flex-end" @click="showMenu = !showMenu">
          <li class="list__item p-1">Menu</li>
          <Icon
            :style="showMenu && 'transform: rotate(180deg); transition: 0.5s'"
            name="chevron-down"
          />
        </div>
        <div v-if="showMenu" class="flex flex-col gap bg-primary">
          <li
            v-for="(item, index) in items"
            :key="index"
            class="list__item p-1"
            v-text="item"
          ></li>
        </div>
      </div>

      <ul v-else class="list flex gap-1">
        <li
          v-for="(item, index) in items"
          :key="index"
          class="list__item p-1"
          v-text="item"
        ></li>
      </ul>
    </Container>
  </nav>
</template>

<script>
export default {
  name: 'AppMenu',

  data() {
    return {
      items: ['Pré-matriculas', 'Bolsas favoritas'],
      showMenu: false,
    }
  },
}
</script>

<style lang="scss" scoped>
.list {
  &__item {
    &:hover {
      background: color('primary', 'darkest');
      transition: all 150ms;
    }
  }
}
</style>
