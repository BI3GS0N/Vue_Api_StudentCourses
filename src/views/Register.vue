<template>
  <div class="login-wrapper">
    <h2>SIGN UP</h2>
    <form>
      <label for="email">
        <input id="email" type="email" placeholder="EMAIL" v-model="email" />
        <i class="fas fa-envelope"></i>
      </label>

      <label for="FirstName">
        <input
          id="FirstName"
          type="text"
          placeholder="FIRSTNAME"
          v-model="firstName"
        />
        <i class="fas fa-user"></i>
      </label>
      <label for="IndexNumber">
        <input
          id="IndexNumber"
          type="text"
          placeholder="INDEX NUMBER"
          v-model="indexNumber"
        />
        <i class="fas fa-hashtag"></i>
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
      <label for="ConfirmPassword">
        <input
          id="ConfirmPassword"
          type="password"
          placeholder="CONFIRM PASSWORD"
          v-model="confirmPassword"
        />
        <i class="fas fa-lock"></i>
      </label>
      <div class="action-wrapper">
        <button @click="register">SUBMIT</button>
        <div class="lds-dual-ring" v-if="loading"></div>
        <p v-show="message" class="message">{{ message }}</p>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Register",
  data() {
    return {
      email: "",
      firstName: "",
      indexNumber: "",
      password: "",
      confirmPassword: "",
      loading: false,
      message: "",
    };
  },
  methods: {
    async register(e) {
      this.loading = true;
      this.message = "";
      e.preventDefault();
      try {
        const res = await axios.post(
          "https://zaliczenie.btry.eu/api/Auth/Register",
          {
            email: this.email,
            firstName: this.firstName,
            indexNumber: this.indexNumber,
            password: this.password,
            confirmPassword: this.confirmPassword,
          }
        );
        const data = await res.data;
        console.log(data);
        this.loading = false;
        this.message = "Success, please log in";
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