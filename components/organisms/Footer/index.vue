<template>
  <footer>
    <div
      :class="[
        'flex items-center justify-center bg-primary-dark',
        !isDesktop ? 'flex-col py-0' : 'py-3 gap-5',
      ]"
    >
      <Contact
        :class="['text-white gap-1', !isDesktop && 'my-1']"
        :title="'0800 123 2222'"
        :subtitle="
          isMobile ? 'Segunda a sexta de 8h às 22h' : 'Seg - Sex 9h-22h'
        "
      >
        <img
          width="32"
          src="~/assets/icons/whatsapp-white.svg"
          alt="ícone de whatsapp"
        />
      </Contact>

      <div
        :class="[
          isMobile
            ? 'custom-border flex w-full justify-center gap-0'
            : 'flex gap-5',
        ]"
      >
        <Contact
          :class="[
            'text-white',
            isMobile && 'flex-col flex text-center px-2 pb-1 pt-1',
          ]"
          :title="!isMobile ? 'Chat ao vivo' : ''"
          :subtitle="isMobile ? 'Chat' : 'Seg - Sex 9h-22h'"
        >
          <Icon name="message-circle" size="32" />
        </Contact>

        <Contact
          :class="[
            'text-white',
            isMobile && 'flex-col text-center px-3 custom-border--item pt-1',
          ]"
          :title="!isMobile ? 'Mande um email' : ''"
          :subtitle="isMobile ? 'E-mail' : 'Respondemos rapidinho'"
        >
          <Icon name="mail" size="32" />
        </Contact>

        <Contact
          :class="['text-white', isMobile && 'flex-col text-center px-2 pt-1']"
          :title="!isMobile ? 'Central de ajuda' : ''"
          :subtitle="isMobile ? 'Ajuda' : 'Econtre todas as respostas'"
        >
          <Icon name="info" size="32" />
        </Contact>
      </div>
    </div>
    <div class="bg-primary flex items-center justify-center py-3 text-medium">
      <p class="flex text-white gap">
        Feito com <Icon name="heart" /> pela Quero educação
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
}
</script>

<style lang="scss" scoped>
.custom-border {
  border-top: 3px solid color('primary');
}

.custom-border--item {
  border-left: 3px solid color('primary');
  border-right: 3px solid color('primary');
}
</style>
