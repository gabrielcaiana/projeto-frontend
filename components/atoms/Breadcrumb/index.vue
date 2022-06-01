<template>
  <ul class="breadcrumb">
    <div v-if="isMobile" class="flex gap">
      <Icon name="chevron-left" color="#007a8d" />
      <li class="breadcrumb__item text-medium"><a href="#">Home</a></li>
    </div>
    <div v-else>
      <li class="breadcrumb__item text-medium"><a href="#">Home</a></li>
      <li class="breadcrumb__item text-medium"><a href="#">Minha conta</a></li>
      <li class="breadcrumb__item">Bolsas favoritas</li>
    </div>
  </ul>
</template>

<script>
export default {
  name: 'AppBreadcrumb',
}
</script>

<style lang="scss" scoped>
.breadcrumb {
  padding: 10px 0;
  list-style: none;
  &__item {
    display: inline;
    font-size: 18px;

    + li:before {
      padding: 8px;
      color: color('dark');
      content: '/\00a0';
    }

    a {
      color: color('primary', 'darkest');
      text-decoration: none;

      &:hover {
        color: color('primary');
        text-decoration: underline;
      }
    }
  }
}
</style>
