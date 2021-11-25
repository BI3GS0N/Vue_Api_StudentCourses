<template>
  <h3>Lista egzaminów:</h3>
  <ul>
    <li v-for:="exam of exams">
      <h4>{{ exam.title }}</h4>
      <p>{{ exam.description }}</p>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Exams",
  props: ["exams"],
};
</script>

<style scoped>
ul {
  /* list-style: none; */
}
</style>