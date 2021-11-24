<template>
  <header>
    <nav>
      <router-link to="/"><h1>Student Courses API</h1></router-link>
      <div class="btn-wrapper">
        <router-link class="btn btn--login" to="/login">Log In</router-link>
        <router-link class="btn btn--register" to="/register"
          >Sign Up</router-link
        >
      </div>
    </nav>
  </header>
</template>
<script>
export default {
  name: "Header",
};
</script>

<style scoped>
header {
  padding: 4rem 0;
  margin-bottom: 4rem;
}
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
h1 {
  display: inline-block;
  font-size: 4rem;
  font-weight: 500;
  letter-spacing: 3px;
  background: linear-gradient(
    to right,
    var(--accent-purple),
    var(--accent-pink)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  border-bottom: 2px solid var(--accent-purple);
}
.btn-wrapper {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.btn {
  background: transparent;
  color: var(--text-color);
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