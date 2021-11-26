<template>
  <div class="list-wrapper">
    <div class="list list--courses">
      <h3>Courses List:</h3>
      <ul>
        <li v-for:="course of courses">
          <div class="list__info">
            <h4>{{ course.title }}</h4>
            <p>{{ course.description }}</p>
          </div>
          <div class="list__buttons">
            <button @click="getExams(course)">Exams</button>
            <button @click="toggleAddExam(course.id)">Add Exam</button>
          </div>
        </li>
        <AddExam v-show="showAddExam" :courseId="selectedCourse" />
      </ul>
    </div>

    <div class="list list--exams">
      <h3>Exams List:</h3>
      <ul>
        <li v-for:="exam of exams">
          <div class="list__">
            <h4>{{ exam.description }}</h4>
            <p>Passed: {{ exam.isPassed }}</p>
          </div>
          <div class="list__buttons">
            <button @click="passExam(exam)">Pass exam</button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import AddExam from "@/components/AddExam.vue";
import axios from "axios";

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
    async passExam(exam) {
      const id = exam.id;
      const token = localStorage.getItem("token");

      const res = await axios({
        method: "put",
        url: `https://zaliczenie.btry.eu/api/Exams/${id}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.data;
      console.log(data);
    },
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
  width: 100%;
}
.list {
  flex: 1;
}

h3 {
  color: var(--accent-pink);
}
h4 {
  margin-bottom: 0.5rem;
  font-size: 1.8rem;
}
p {
  font-size: 1.3rem;
}
ul {
  list-style: none;
  position: relative;
}
li {
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
}
.list__buttons {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}
.list__buttons button {
  cursor: pointer;
  padding: 0.5rem;
  background: transparent;
  border: 1px solid var(--dark);
  border-radius: 2rem;
  color: var(--accent-pink);
  transition: transform 0.2s ease-out;
}
.list__buttons button:hover {
  transform: scale(1.1);
}
</style>