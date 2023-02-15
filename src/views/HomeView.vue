<script>
import { useAuthStore } from '../stores/AuthStore'
export default {
  data() {
    return {
      form: {
        user: '',
        password: '',
      },
      isLoggedIn: useAuthStore().userName !== undefined
    }
  },
  methods: {
    onSubmit() {
      console.log('onSubmit', this.form)
      useAuthStore().login(this.form.user)
      this.$router.push('/about')
    },
    onLogout() {
      useAuthStore().logout()
      this.$router.push('/about')
    }
  }
}
</script>

<template>
  <main>
    <h1>Login</h1>
    <form name="login" @submit.prevent="onSubmit" v-if="!isLoggedIn">
      <label for="user">User:</label>
      <input id="user" v-model="form.user" type="text" required>
      <label for="password">Pass:</label>
      <input id="password" v-model="form.password" type="password">
      <button>Log me in</button>
    </form>
    <button @click="onLogout" v-if="isLoggedIn">Log me out</button>
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
