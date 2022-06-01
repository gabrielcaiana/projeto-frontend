<template>
  <ul class="breadcrumb">
    <li class="breadcrumb__item"><a href="#">Home</a></li>
    <li class="breadcrumb__item"><a href="#">Minha conta</a></li>
    <li class="breadcrumb__item">Bolsas favoritas</li>
  </ul>
</template>

<script>
export default {
  name: 'AppBreadcrumb',
}
</script>

<style lang="scss" scoped>
.breadcrumb {
  padding: 10px 16px;
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
      color: color('primary');
      text-decoration: none;

      &:hover {
        color: color('primary', 'darkset');
        text-decoration: underline;
      }
    }
  }
}
</style>
