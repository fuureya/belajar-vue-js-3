<template>
  Nama Guru Adalah : {{ teacherName }}
  <button @click="showDetail">Detail</button> <br />
</template>

<script>
export default {
  props: {
    teacherName: String,
  },
  emits: ["response"],
  methods: {
    showDetail() {
      this.$emit("response", this.teacherName);
    },
  },
};
</script>
