<template>
  <div>
    <h1>Home</h1>
    <h4>Hello {{ name }}</h4>

    <div class='justify-center align-center mt10 pa12'>
      <w-input class="mb8" label="Label" placeholder="Enter First Name" />
      <w-input class="mb3" label="Label" placeholder="Enter Last Name" />

      <w-button class="mt8 pa5 bdrs5" bg-color='success'>Submit Name</w-button>
    </div>
    
    <div>
      
    </div>

   
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