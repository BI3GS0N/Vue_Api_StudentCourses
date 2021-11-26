<template>
  <header>
    <nav>
      <router-link to="/"><h1>Student Courses API</h1></router-link>
      <div class="btn-wrapper">
        <router-link class="btn btn--login" to="/login">Log In</router-link>
        <router-link class="btn btn--register" to="/register">
          Sign Up
        </router-link>
      </div>
      <a href="/" class="btn--logout" @click="logout">Logout</a>
    </nav>
  </header>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {};
  },
  methods: {
    logout() {
      localStorage.removeItem("token");
    },
  },
};
</script>

<style scoped>
.btn--logout {
  text-align: center;
  position: absolute;
  right: 0;
  bottom: -2rem;
  color: var(--text-color-light);
  padding: 1.2rem 1.4rem 0;
  transition: color 0.2s ease-out, transform 0.4s ease-out;
}
.btn--logout:hover {
  color: #6c757d;
  transform: translateX(10px);
}
header {
  padding: 4rem 0;
  margin-bottom: 4rem;
}
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
}
h1 {
  display: inline-block;
  font-size: 4rem;
  font-weight: 700;
  letter-spacing: 3px;
  background: linear-gradient(
    to right,
    var(--accent-purple),
    var(--accent-pink)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.btn-wrapper {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.btn {
  background: transparent;
  color: var(--text-color-light);
  padding: 1rem 1rem 0.5rem;
  border: none;
  font-size: 1.8rem;
  font-weight: 700;
  cursor: pointer;
  border-bottom: 2px solid var(--accent-purple);
  transition: transform 0.2s ease-out;
}
.btn:hover {
  color: var(--accent-pink);
  transform: translateY(-3px);
}
</style>