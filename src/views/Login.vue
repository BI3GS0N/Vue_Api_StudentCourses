<template>
  <div class="login-wrapper">
    <h2>LOG IN</h2>
    <form>
      <label for="email">
        <input id="email" type="email" placeholder="EMAIL" v-model="email" />
        <i class="fas fa-envelope"></i>
      </label>
      <label for="password">
        <input
          id="password"
          type="password"
          placeholder="PASSWORD"
          v-model="password"
        />
        <i class="fas fa-lock"></i>
      </label>
      <button @click="login">SUBMIT</button>
    </form>
  </div>
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
  methods: {
    async login(e) {
      e.preventDefault();
      const res = await axios.post(
        "https://zaliczenie.btry.eu/api/Auth/Login",
        {
          email: this.email,
          password: this.password,
        }
      );
      const data = await res.data;
      localStorage.setItem("token", data.message);
      if (res.status == 200) {
        this.$router.push("/");
      }
    },
  },
};
</script>

<style>
</style>