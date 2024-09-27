<template>
  Guru yanng di pilih {{ selected }} <br />

  <Student studentName="Agil Jibrin">
    ini pake slot ceritanya bisa di isi dengan nilai default atau tidak
    <br />
  </Student>
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
