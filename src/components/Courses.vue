<template>
  <div class="wrapper">
    <div class="left">
      <h3>Lista kursów:</h3>
      <ul>
        <li v-for:="course of courses">
          <h4>{{ course.title }}</h4>
          <p>{{ course.description }}</p>
          <button @click="getExams(course)">egzaminy</button>
        </li>
      </ul>
    </div>
    <div class="right">
      <h3>Lista Egzaminów:</h3>
      <ul>
        <li v-for:="exam of exams">
          {{ exam.description }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Courses",
  data() {
    return {
      exams: [],
    };
  },
  props: ["courses"],
  methods: {
    getExams(course) {
      this.exams = course.exams;
    },
  },
};
</script>

<style scoped>
ul {
  /* list-style: none; */
}
p {
  font-size: 1.3rem;
}
.wrapper {
  display: flex;
}
.left,
.right {
  flex: 1;
}
</style>