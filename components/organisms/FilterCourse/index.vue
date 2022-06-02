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

    <div class="flex justify-between w-full text-medium">
      <span>Resultado:</span>
      <div class="flex gap">
        <span>Ordernar por:</span>
        <div class="flex" @click="orderCourses = !orderCourses">
          <b class="text-medium text-primary cursor-pointer"
            >Nome da faculdade</b
          >
          <Icon
            :style="
              orderCourses && 'transform: rotate(180deg); transition: 0.5s'
            "
            class="cursor-pointer"
            name="chevron-down"
            color="#18acc4"
          />
        </div>
      </div>
    </div>

    <div class="list">
      <ul class="list__table">
        <li
          v-for="(item, index) in items"
          :key="index"
          class="list__table__item"
        >
          <Checkbox class="flex items-center" />
          <div class="flex flex-col justify-center">
            <img :src="item.university.logo_url" :alt="item.course.name" />
          </div>
          <div class="flex flex-col justify-center">
            <p
              class="text-medium text-primary-dark"
              v-text="item.course.name"
            ></p>
            <span v-text="item.course.level"></span>
          </div>

          <div class="flex flex-col items-end justify-center">
            <p>
              Bolsa de
              <span
                class="text-positive text-medium"
                v-text="`${item.discount_percentage}%`"
              ></span>
            </p>
            <span
              class="text-positive text-medium"
              v-text="`R$${item.price_with_discount.toFixed(0)}/mês`"
            ></span>
          </div>
        </li>
      </ul>
    </div>

    <!-- <pre>{{ items }}</pre> -->
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
      orderCourses: false,
      items: null,
    }
  },

  async mounted() {
    const data = await this.$dataApi.get()
    this.items = data
  },
}
</script>

<style lang="scss" scoped>
.list {
  &__table {
    margin-top: 2rem;
    &__item {
      display: grid;
      grid-template-columns: 42px repeat(3, 1fr);
      margin-bottom: 2rem;
      padding: 1rem;
      border-top: 2px solid #efefef;
      border-bottom: 2px solid #efefef;

      img {
        height: 36px;
        width: 120px;
        object-fit: contain;
      }
    }
  }
}
</style>
