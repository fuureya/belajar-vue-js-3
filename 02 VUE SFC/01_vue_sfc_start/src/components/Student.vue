<script>
export default {
  props: {
    studentName: String,
  },
};
</script>

<template>
  <slot>Nama Siswa Adalah :</slot>
  {{ studentName }}
</template>
