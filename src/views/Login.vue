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
      <div class="action-wrapper">
        <button @click="login">SUBMIT</button>
        <div class="lds-dual-ring" v-if="loading"></div>
        <p v-show="message" class="message">{{ message }}</p>
      </div>
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
      loading: false,
      message: "",
    };
  },
  methods: {
    async login(e) {
      this.loading = true;
      e.preventDefault();
      try {
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
          this.loading = false;
          this.$router.push("/");
        }
      } catch (error) {
        console.log(error.response.status);
        this.loading = false;
        this.message = "Error, Try Again";
      }
    },
  },
};
</script>

<style>
</style>