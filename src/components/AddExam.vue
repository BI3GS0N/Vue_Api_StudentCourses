<template>
  <div class="login-wrapper">
    <h2>Add Exam</h2>
    <label for="exam">
      <input
        id="exam"
        type="text"
        v-model="examDescription"
        placeholder="Exam description"
      />
      <i class="fas fa-file-alt"></i>
    </label>
    <div class="action-wrapper">
      <button @click="addExam">SUBMIT</button>
      <div class="lds-dual-ring" v-if="loading"></div>
      <p v-show="message" class="message">{{ message }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "AddExam",
  props: ["courseId"],
  data() {
    return {
      examDescription: "",
      loading: false,
      message: "",
    };
  },
  methods: {
    async addExam() {
      this.loading = true;
      this.message = "";
      const id = this.courseId;
      console.log(id);
      console.log(this.examDescription);
      const token = localStorage.getItem("token");

      try {
        const res = await axios({
          method: "post",
          url: "https://zaliczenie.btry.eu/api/Exams",
          data: {
            description: this.examDescription,
            courseId: id,
          },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await res.data;
        console.log(data);
        this.loading = false;
        this.message = "Success";
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
  background-color: var(--bg-dark);
  position: absolute;
  right: 0;
  top: 0;
  transform: translateX(100%);
  z-index: 2;
}
.login-wrapper input {
  color: var(--text-color-light);
}
.login-wrapper i {
  color: var(--bg-light);
}
.login-wrapper .action-wrapper p {
  color: var(--text-color-light);
}
</style>