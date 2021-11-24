<template>
  <div class="login-wrapper">
    <h2>LOG IN</h2>
    <form action="#">
      <label for="email">
        <input id="email" type="email" placeholder="EMAIL" />
        <i class="fas fa-envelope"></i>
      </label>
      <label for="password">
        <input id="password" type="text" placeholder="PASSWORD" />
        <i class="fas fa-lock"></i>
      </label>
      <button>SUBMIT</button>
    </form>
  </div>
</template>
<script>
export default {
  name: "Login",
};
</script>
<style scoped>
.login-wrapper {
  background-color: #f8f9fa7a;
  padding: 7rem 5rem;
  border-radius: 1.5rem;
  margin: 0 auto;
  width: 350px;
  box-shadow: 0 0 30px #fff;
}
h2 {
  display: inline-block;
  background: linear-gradient(
    to right,
    var(--accent-pink),
    var(--accent-purple)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 300;
  font-size: 3rem;
  margin-bottom: 4rem;
}
form {
  display: flex;
  flex-direction: column;
}
label {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  border-bottom: 1px solid var(--bg);
  margin-bottom: 3rem;
}
input {
  background: transparent;
  border: none;
  color: var(--dark);
  width: 100%;
}
input::placeholder {
  color: var(--dark);
  letter-spacing: 3px;
}
i {
  color: var(--dark);
}
button {
  cursor: pointer;
  border-radius: 2rem;
  align-self: flex-end;
  padding: 0.5rem 2rem;
  /* font-size: 1.2rem; */
  color: var(--dark);
  letter-spacing: 2px;
  margin-top: 3rem;
  background: linear-gradient(
    to right,
    var(--accent-pink),
    var(--accent-purple)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: transform 0.4s ease-out;
  border: 1px solid var(--dark);
}
button:hover {
  transform: scale(0.95);
}
</style>