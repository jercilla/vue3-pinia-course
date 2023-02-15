<script>
import { useAuthStore } from '../stores/AuthStore';

export default {
  data() { 
    return {
      authStore: useAuthStore()
    }
  }
}
</script>

<template>
  <div class="about">
    <template v-if="authStore.userName">
      <h1>Wellcome <span>{{ authStore.userName }}</span>!!</h1>
      <h2>This is an about page</h2>
    </template>
    <template v-else>
      <h2>Yoy need to login before continue</h2>
    </template>
  </div>
</template>

<style>
.about {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

h1 span {
  font-weight: bold;
  color: red;
}
</style>
