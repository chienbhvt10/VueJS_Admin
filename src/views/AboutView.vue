<template>
  <div class="about">
    <h1>This is an about page</h1>
    <input type="text" v-model="name" />
    {{ name }}
  </div>
  <p ref="dom-element">{{ counter }}</p>
</template>
<script>
export default {
  data() {
    return {
      name: "",
      counter: 0,
    };
  },
  updated() {
    // Fired every second, should always be true
    console.log(+this.$refs["dom-element"].textContent === this.counter);
  },
  created() {
    setInterval(() => {
      this.counter++;
    }, 1000);
  },
};
</script>
