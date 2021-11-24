<template>
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

        if (res.status === 401) {
          console.log("kurwa");
        }

        const resCourses = res.data.records;
        this.courses = resCourses;
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<style>
</style>