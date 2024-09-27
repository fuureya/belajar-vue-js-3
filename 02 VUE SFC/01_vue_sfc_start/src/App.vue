<template>
  Guru yanng di pilih {{ selected }} <br />

  <Student studentName="Agil Jibrin" />
  <br />
  <Teacher @response="getName" teacherName="Asriadi" />
</template>

<script>
import { ref } from "vue";
import Student from "./components/Student.vue";
import Teacher from "./components/Teacher.vue";

export default {
  components: {
    Student,
    Teacher,
  },
  methods: {
    getName(params) {
      this.selected = params;
    },
  },
  data() {
    return {
      selected: ref(""),
    };
  },
};
</script>
