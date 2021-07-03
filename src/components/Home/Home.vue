<template>
  <div class="w-flex">
    <!-- Crypto Component -->
    <User />

    <!-- Crypto Component -->
    <Crypto />
  </div>
</template>

<script>
import Crypto from "../Crypto/Crypto.vue";
import User from "../User/User.vue";

export default {
  name: "Home",
  components: {
    User,
    Crypto,
  },
  data: () => ({
    state: {},
  }),
  methods: {},
};
</script>

<style scoped>
</style>