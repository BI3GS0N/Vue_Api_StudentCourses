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

    <button @click="getCourses">Get courses</button>
  </main>
  <main v-show="!isLogged">
    <h1>Log in to do something</h1>
  </main>
</template>
<script>
import axios from "axios";
export default {
  name: "Home",
  data() {
    return {
      courseTitle: "",
      courseDescription: "",
    };
  },
  methods: {
    async getCourses() {
      const res = await axios.get("https://zaliczenie.btry.eu/api/Course", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const data = await res.data;
      console.log(data);
    },
    async addCourse(e) {
      e.preventDefault();
      const token = localStorage.getItem("token");
      console.log(token);
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
      console.log(res.data);
    },
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