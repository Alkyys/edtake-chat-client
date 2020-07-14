<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">Connection</h1>
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
      alert(`Thank you, ${data.email}`)
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

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
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
