<template>
  <div class="w-flex">
    <!-- Crypto Component -->
    <User />

    <!-- Crypto Component -->
    <Crypto />
  </div>
  <div>
    <w-button
      class="mt5 py4 px5 "
      bg-color="secondary"
      @click.prevent="printScreen"
    >
      Print Screen
    </w-button>
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
  methods: {
    printScreen() {
      window.print()
    }
  },
};
</script>

<style scoped>
</style>