<template>
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
      <button @click="addCourse">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "AddCourse",
  data() {
    return {
      courseTitle: "",
      courseDescription: "",
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
      const newCourse = data.record;
      this.$emit("add-course", newCourse);
      //   this.courses = [...this.courses, data.record];
    },
  },
};
</script>

<style>
</style>