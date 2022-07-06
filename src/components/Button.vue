<template><button @click="navigate('hello')">Click me</button></template>
<script lang="ts">
import { Vue } from "vue-class-component";

export default class Button extends Vue {
  navigate = (hello: string) => {
    console.log(hello);
  };
}
</script>
