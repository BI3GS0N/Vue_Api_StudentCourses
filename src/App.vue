<template>
  <div class="container">
    <Header />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: "App",
  components: {
    Header,
  },
  data() {
    return {};
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap");
@import "./styles/form.css";
:root {
  --text-color-light: #ced4da;
  --text-color-dark: #495057;
  --bg-dark: #343a40;
  --bg-light: #676c70;
  --accent-purple: #a100f2;
  --accent-pink: #f20089;
  --dark: #212529;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Lato", sans-serif;
}
html {
  font-size: 62.5%;
}
body {
  min-height: 100vh;
  background: linear-gradient(135deg, var(--bg-light) 5%, var(--bg-dark) 55%);
  font-size: 1.6rem;
  color: var(--text-color-light);
}
a {
  text-decoration: none;
  color: white;
}
.container {
  display: flex;
  flex-direction: column;
  margin: 0 20rem;
}
</style>
