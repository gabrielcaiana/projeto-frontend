<template>
  <Modal :show="show" title="Adicionar bolsa" @close="$emit('close')">
    <Subtitle class="mt-1" text="Filtre e adicione as bolsas de seu intersse" />

    <div class="pt-2 pb-5">
      <div
        :class="[
          'mb-2 gap-1',
          isDesktop ? 'flex items-center' : 'flex flex-col',
        ]"
      >
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

      <div :class="[isDesktop ? 'flex' : 'flex flex-col']">
        <div class="w-full">
          <p class="text-medium mb-2">COMO VOCÊ QUER ESTUDAR?</p>
          <div :class="['flex gap-2', !isDesktop && 'mb-2']">
            <Checkbox label="Presencial" @input="presencial = !presencial" />
            <Checkbox label="A distância" @input="distancia = !distancia" />
          </div>
        </div>

        <div :class="['w-full', isDesktop && 'ml-1']">
          <p class="text-medium">ATÉ QUANTO PODE PAGAR?</p>
          <span v-text="`R$${range}`"></span>
          <Slider
            v-model="range"
            :align-unity-left="false"
            label="teste"
            min="0"
            max="10000"
            step="0.1"
          />
        </div>
      </div>
    </div>
  </Modal>
</template>

<script>
export default {
  name: 'AppFilterCourse',

  props: {
    show: {
      type: Boolean,
      defaul: false,
    },
  },
  data() {
    return {
      citys: ['São Paulo', 'São José dos campos', 'Rio de janeiro'],
      courses: ['Direito', 'Medicina', 'Pedagogia'],
      citySelected: '',
      courseSelected: '',
      presencial: false,
      distancia: false,
      range: 0,
    }
  },
}
</script>
