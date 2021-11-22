<template>
  <form @submit="login">
    <label for="email">Email:</label>
    <input type="text" id="email" v-model="email" />
    <label for="password">Password:</label>
    <input type="text" id="password" v-model="password" />
    <button type="submit">Login</button>
  </form>
</template>

<script>
import axios from "axios";
export default {
  name: "Home",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login(e) {
      e.preventDefault();
      try {
        const res = await axios.post(
          "https://zaliczenie.btry.eu/api/Auth/Login",
          {
            email: this.email,
            password: this.password,
          }
        );
        const data = res.data;
        const key = data.message;
        console.log(key);
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<style>
</style>