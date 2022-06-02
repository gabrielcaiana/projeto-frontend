<template>
  <div class="py-1">
    <header>
      <Breadcrumb class="mb-1" />
      <Title :class="isMobile && 'mb-1'" text="Bolsas favoritas" />
      <Subtitle
        text="Adicione bolsas de cursos e faculdades do seu interesse e receba atualizações com as melhores ofertas disponíveis."
      />
    </header>

    <section class="my-3">
      <ListCourses />
    </section>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',

  // async asyncData({ $dataApi }) {
  //   const data = await $dataApi.get()

  //   console.log(data)

  //   return { data }
  // },
}
</script>
