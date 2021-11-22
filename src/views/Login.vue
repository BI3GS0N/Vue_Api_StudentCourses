<template>
  <form @submit="login">
    <label for="email">Email:</label>
    <input type="text" id="email" v-model="email" />
    <label for="password">Password:</label>
    <input type="text" id="password" v-model="password" />
    <button type="submit">Login</button>
  </form>
  <router-link to="/courses">Get Courses</router-link>
</template>

<script>
import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  created() {},
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
        localStorage.setItem("token", key);
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