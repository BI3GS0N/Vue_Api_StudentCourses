<template>
  <button @click="getCourses">Get Courses</button>
  <ul>
    <li v-for:="course in courses">{{ course.title }}</li>
  </ul>
</template>

<script>
import axios from "axios";
export default {
  name: "Courses",
  data() {
    return {
      courses: [],
    };
  },
  methods: {
    async getCourses() {
      try {
        const res = await axios.get("https://zaliczenie.btry.eu/api/Course", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        const data = res.data;
        console.log(data);
        const resCourses = res.data.records;
        this.courses = resCourses;
        console.log(this.courses);
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<style>
</style>