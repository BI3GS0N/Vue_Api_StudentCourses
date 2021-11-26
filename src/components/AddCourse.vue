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
      <div class="action-wrapper">
        <button @click="addCourse">SUBMIT</button>
        <div class="lds-dual-ring" v-if="loading"></div>
        <p v-show="message" class="message">{{ message }}</p>
      </div>
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
      loading: false,
      message: "",
    };
  },
  methods: {
    async addCourse(e) {
      this.loading = true;
      this.message = "";
      e.preventDefault();
      const token = localStorage.getItem("token");

      let formData = new FormData();
      formData.append("Title", this.courseTitle);
      formData.append("Description", this.courseDescription);
      try {
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
        this.loading = false;
        this.message = "Success";
        this.$emit("add-course", newCourse);
      } catch (error) {
        console.log(error.response.status);
        this.loading = false;
        this.message = "Error, Try Again";
      }
    },
  },
};
</script>

<style scoped>
.login-wrapper {
  margin-bottom: 3rem;
}
</style>