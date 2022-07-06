<template>
  <div>Header</div>
  <router-link
    :class="['navigate-item', route.url ? 'will-nav' : '']"
    v-for="route in router_links"
    :key="route.url"
    :to="route.url"
  >
    {{ route.text }}
  </router-link>
</template>

<script lang="ts">
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      router_links: [
        { url: "/login", text: "Login" },
        { url: "/about", text: "About" },
        { url: "", text: "home" },
      ],
    };
  },
};
</script>
