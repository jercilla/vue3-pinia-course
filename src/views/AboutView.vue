<script>
import { useAuthStore } from '../stores/AuthStore';

export default {
  data() { 
    return {
      user: useAuthStore().user
    }
  }
}
</script>

<template>
  <div class="about">
    <h1>Wellcome <span>{{ user }}</span>!!</h1>
    <h2>This is an about page</h2>
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
