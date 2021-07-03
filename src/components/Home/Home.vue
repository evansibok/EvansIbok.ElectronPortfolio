<template>
  <div class="w-flex">
    <!-- Crypto Component -->
    <User />

    <!-- Crypto Component -->
    <Crypto />
  </div>
  <div>
    <!-- Evans Ibok's Details -->
    <MyDetails user="Evans Ibok" />
  </div>
</template>

<script>
import Crypto from "../Crypto/Crypto.vue";
import User from "../User/User.vue";
import MyDetails from "../MyDetails/MyDetails.vue"

export default {
  name: "Home",
  components: {
    User,
    Crypto,
    MyDetails
  },
  data: () => ({
    state: {},
  }),
  methods: {},
};
</script>

<style scoped>
</style>