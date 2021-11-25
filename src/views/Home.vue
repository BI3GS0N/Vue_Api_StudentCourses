<template>
  <main v-show="isLogged">
    <div class="login-wrapper">
      <form action="#">
        <h2>Add Course</h2>
        <label for="Title">
          <input
            id="Title"
            type="text"
            placeholder="Course Title"
            v-model="courseTitle"
          />
          <i class="fas fa-heading"></i>
        </label>
        <label for="Description">
          <input
            id="Description"
            type="text"
            placeholder="Course Description"
            v-model="courseDescription"
          />
          <i class="fas fa-signature"></i>
        </label>
        <button @click="addCourse">Add Course</button>
      </form>
    </div>
    <Courses :courses="courses" />
    <!-- <Exams :exams="exams" /> -->
  </main>
  <main v-show="!isLogged">
    <h1>Log in to manage your courses and exams</h1>
  </main>
</template>
<script>
import axios from "axios";

import Courses from "@/components/Courses.vue";
import Exams from "@/components/Exams.vue";

export default {
  name: "Home",
  components: {
    Courses,
    // Exams,
  },
  data() {
    return {
      courseTitle: "",
      courseDescription: "",
      courses: [],
      exams: [],
    };
  },
  methods: {
    async addCourse(e) {
      e.preventDefault();
      const token = localStorage.getItem("token");

      let formData = new FormData();
      formData.append("Title", this.courseTitle);
      formData.append("Description", this.courseDescription);

      const res = await axios({
        method: "post",
        url: "https://zaliczenie.btry.eu/api/Course",
        data: formData,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.data;
      console.log(data);
      this.courses = [...this.courses, data.record];
    },
  },
  async created() {
    if (this.isLogged) {
      const res = await axios({
        method: "get",
        url: "https://zaliczenie.btry.eu/api/Course",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const data = await res.data;
      this.courses = data.records;
      console.log(this.courses);
    }
  },
  computed: {
    isLogged: function () {
      return localStorage.getItem("token");
    },
  },
};
</script>
<style scoped>
</style>