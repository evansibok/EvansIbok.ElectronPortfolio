<template>
  <div class="w-flex">
    <div class="xs6 first-section flex align-center justify-center pt5">
      <h1>User Details</h1>
      <h4>Hello {{ name }}</h4>

      <w-form
        class="user-form justify-center align-center mt10 pa12"
        bg-color="primary"
      >
        <w-input class="mb8" label="Label" placeholder="Enter First Name" />
        <w-input class="mb3" label="Label" placeholder="Enter Last Name" />

        <w-button class="mt8 pa5 bdrs5" bg-color="success"
          >Submit Name</w-button
        >
      </w-form>

      <div></div>

      <vue-qrcode value="Hello, World!" :options="{ width: 200 }"></vue-qrcode>
    </div>

    <div class="xs6 second-section flex align-center justify-center pt5">
      <h1>Crypto</h1>
      <h4>Hello {{ name }}</h4>

      <vue-qrcode value="Hello, World!" :options="{ width: 200 }"></vue-qrcode>
    </div>
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
.first-section {
  background-color: chartreuse;
}
.second-section {
  background-color: coral;
}
.user-form {
  width: 500px;
  margin: 0 auto;
}
</style>