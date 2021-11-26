<template>
  <main v-show="isLogged">
    <button class="btn" @click="toggleAddCourse">Add New Course</button>
    <AddCourse v-show="showAddCourse" @add-course="addCourse" />
    <CoursesList :courses="courses" v-if="!loading" />
    <div class="lds-dual-ring" v-else></div>
  </main>
  <main v-show="!isLogged">
    <h1>Log in to manage your courses and exams</h1>
  </main>
</template>

<script>
import axios from "axios";

import CoursesList from "@/components/CoursesList.vue";
import AddCourse from "@/components/AddCourse.vue";

export default {
  name: "Home",
  components: {
    CoursesList,
    AddCourse,
  },
  data() {
    return {
      courses: [],
      loading: false,
      showAddCourse: false,
    };
  },
  methods: {
    addCourse(newCourse) {
      this.courses = [...this.courses, newCourse];
    },
    toggleAddCourse() {
      this.showAddCourse = !this.showAddCourse;
    },
    async getCourses() {
      try {
        const res = await axios({
          method: "get",
          url: "https://zaliczenie.btry.eu/api/Course",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        return res.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
  async created() {
    if (this.isLogged) {
      this.loading = true;
      const data = await this.getCourses();
      this.courses = data.records;
      this.loading = false;
      console.log("test");
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
main {
  display: flex;
  flex-direction: column;

  align-items: center;
}

.lds-dual-ring {
  display: inline-block;
  width: 80px;
  height: 80px;
}
.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid #fff;
  border-color: var(--dark) transparent var(--dark) transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.btn {
  width: 300px;
  font-size: 1.8rem;
  font-weight: 700;
  letter-spacing: 2px;
  cursor: pointer;
  padding: 0.5rem 2rem;
  border-radius: 2rem;
  border: 1px solid var(--dark);
  background: linear-gradient(
    to right,
    var(--accent-pink),
    var(--accent-purple)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: transform 0.2s ease-out;
  margin-bottom: 3rem;
}
.btn:hover {
  transform: scale(1.1);
}
</style>