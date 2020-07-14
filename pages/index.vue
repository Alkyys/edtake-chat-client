<template>
  <div class="container">
    <div>
      <Logo />
      <div class="links">
        <FormulateForm @submit="submitHandler">
          <FormulateInput
            v-model="email"
            type="email"
            name="email"
            label="Email"
            validation="required|email"
          />
          <FormulateInput
            v-model="password"
            type="password"
            label="Password"
            validation="required"
          />
          <FormulateInput type="submit" label="Valider" />
        </FormulateForm>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: undefined,
      password: undefined,
    }
  },
  methods: {
    submitHandler(data) {
      // alert(`Thank you, ${data.email}`)
      this.$router.push({ name: 'chat' })
    },
  },
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
