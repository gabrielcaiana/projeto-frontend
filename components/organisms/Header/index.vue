<template>
  <header>
    <Container class="flex justify-between items-center py-2 relative">
      <div class="flex gap-1">
        <div
          class="text-primary-dark flex items-center gap cursor-pointer text-base text-medium"
        >
          <Icon name="info" color="#007a8d" />
          <span>Como funciona</span>
        </div>
        <Divider vertical />
        <Contact
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
      <Logo class="absolute m-auto right left" />
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
