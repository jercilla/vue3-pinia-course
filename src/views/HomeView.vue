<script>
export default {
  data() {
    return {
      form: {
        user: '',
        password: '',
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('onSubmit', this.form)
      this.$router.push('/about')
    }
  }
}
</script>

<template>
  <main>
    <h1>Login</h1>
    <form name="login" @submit.prevent="onSubmit">
      <label for="user">User:</label>
      <input id="user" v-model="form.user" type="text" required>
      <label for="password">Pass:</label>
      <input id="password" v-model="form.password" type="password">
      <button>Log me in</button>
    </form>
  </main>
</template>

<style scoped>
main {
  margin: 0 auto;
}
form > * {
  display: block;
  font-size: 1rem;
}
main h1 {
  text-align: center;
}
main button {
  margin: 10px auto;
}
</style>
