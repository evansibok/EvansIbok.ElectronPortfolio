<template>
  <div>
    <h1>Home</h1>
    <h4>Hello {{ name }}</h4>

    <w-flex class="wrap">
      <w-button class="ma1" bg-color="success">success</w-button>
      <w-button class="ma1" bg-color="error">error</w-button>
      <w-button class="ma1" bg-color="warning">warning</w-button>
      <w-button class="ma1" bg-color="info">info</w-button>
      <w-button class="ma1" bg-color="primary">primary</w-button>
      <w-button class="ma1" bg-color="secondary">secondary</w-button>
    </w-flex>
    <vue-qrcode value="Hello, World!" :options="{ width: 200 }"></vue-qrcode>

  </div>
</template>

<script>
export default {
  name: "Home",
  props: {
    name: String,
  },
};
</script>

<style scoped>
</style>