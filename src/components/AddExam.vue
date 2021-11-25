<template>
  <div>
    <h2>Add Exam</h2>
    <label for="exam">
      <input id="exam" type="text" v-model="examDescription" />
      <button @click="addExam">submit</button>
    </label>
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
    };
  },
  methods: {
    async addExam() {
      const id = this.courseId;
      console.log(id);
      console.log(this.examDescription);
      const token = localStorage.getItem("token");

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
    },
  },
};
</script>

<style scoped>
</style>