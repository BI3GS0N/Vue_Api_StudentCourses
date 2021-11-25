<template>
  <div class="list-wrapper">
    <div class="list list--courses">
      <h3>Lista kursów:</h3>
      <ul>
        <li v-for:="course of courses">
          <h4>{{ course.title }}</h4>
          <p>{{ course.description }}</p>
          <button @click="getExams(course)">egzaminy</button>
          <button @click="toggleAddExam(course.id)">Dodaj egzamin</button>
        </li>
        <AddExam v-show="showAddExam" :courseId="selectedCourse" />
      </ul>
    </div>

    <div class="list list--exams">
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
import AddExam from "@/components/AddExam.vue";

export default {
  name: "Courses",
  components: {
    AddExam,
  },
  data() {
    return {
      exams: [],
      showAddExam: false,
      selectedCourse: "",
    };
  },
  props: ["courses"],
  methods: {
    getExams(course) {
      this.exams = course.exams;
    },
    toggleAddExam(id) {
      this.showAddExam = !this.showAddExam;
      this.selectedCourse = id;
    },
  },
};
</script>

<style scoped>
.list-wrapper {
  display: flex;
}
.list {
  flex: 1;
}
p {
  font-size: 1.3rem;
}
</style>