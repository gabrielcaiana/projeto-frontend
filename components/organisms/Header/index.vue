<template>
  <header>
    <Container class="flex justify-between items-center py-2 relative">
      <div class="flex gap-1">
        <Info />
        <Divider vertical />
        <Contact
          v-if="!isMobile && !isTablet"
          class="text-primary-dark"
          title="0800 123 2222"
          subtitle="Envie mensagem ou ligue"
        >
          <img
            width="32"
            src="~/assets/icons/whatsapp.svg"
            alt="ícone de whatsapp"
          />
        </Contact>
      </div>
      <Logo :class="[!isMobile && !isTablet && 'absolute m-auto right left']" />
      <Avatar
        class="text-primary-dark"
        username="Gabriel Caiana"
        icon-color="#007a8d"
      />
    </Container>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
}
</script>
