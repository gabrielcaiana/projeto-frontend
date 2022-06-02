<template>
  <div>
    <div class="w-full flex flex-end">
      <Tabs active="id2" />
    </div>
    <div class="mt-3 flex items-center justify-center flex-wrap gap-1">
      <Card empty @click="showModal = !showModal" />
      <Card v-for="(i, index) in 4" :key="index" />
    </div>

    <Modal :show="showModal" title="Adicionar bolsa" @close="showModal = false">
      <Subtitle text="Filtre e adicione as bolsas de seu intersse" />

      <div class="pt-2 pb-5">
        <div class="flex items-center gap-1">
          <InputSelect
            label="Selecione sua cidade"
            :options="citys"
            @input="citySelected = $event"
          />
          <InputSelect
            label="Selecione o curso de sua preferência"
            :options="citys"
            @input="courseSelected = $event"
          />
        </div>

        <br />
        {{ citySelected }} - {{ courseSelected }}
      </div>
    </Modal>
  </div>
</template>

<script>
export default {
  name: 'AppListCourses',
  data() {
    return {
      showModal: false,
      citys: ['São Paulo', 'São José dos campos', 'Rio de janeiro'],
      courses: ['Direito', 'Medicina', 'Pedagogia'],
      citySelected: '',
      courseSelected: '',
    }
  },
}
</script>
