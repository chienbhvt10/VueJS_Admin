<template><Header></Header> {{ users }}</template>

<script lang="ts">
import Header from "@/components/Header.vue";

export default {
  components: {
    Header,
  },
  data() {
    return {
      count: Number,
      users: Array,
    };
  },
  methods: {},
};
</script>
