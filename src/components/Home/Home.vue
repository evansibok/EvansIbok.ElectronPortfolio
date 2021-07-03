<template>
  <div class="w-flex">
    <div class="xs6 first-section flex align-center justify-center pt5">
      <h1>User Details</h1>
      <h3 class="mt3">Hello {{ state.user.firstName }}</h3>

      <w-form
        class="user-form justify-center align-center mt10 pa12"
        bg-color="primary"
      >
        <w-input
          class="mb8"
          label="First Name"
          name="firstName"
          placeholder="Enter First Name"
          v-model="state.inputValues.firstName"
        />
        <w-input
          class="mb3"
          label="Last Name"
          name="lastName"
          placeholder="Enter Last Name"
          v-model="state.inputValues.lastName"
        />

        <w-button
          class="name-btn mt8 pa5 bdrs5"
          bg-color="success"
          @click.prevent.stop="generateCode"
        >
          <p v-if="state.loading === true">Loading...</p>
          <p v-if="state.loading === false">Generate</p>
        </w-button>
      </w-form>

      <div v-if="Object.values(state.qrcode).length !== 0">
        <vue-qrcode
          value="Hello, World!"
          :options="{ width: 200 }"
        ></vue-qrcode>
      </div>
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
    value: {
      type: String,
    },
  },
  data: () => {
    return {
      state: {
        loading: false,
        inputValues: {
          firstName: "",
          lastName: "",
        },
        user: {
          firstName: "",
          lastName: "",
        },
        qrcode: {},
      },
    };
  },
  methods: {
    generateCode() {
      // Function to generate QR Code for user details
      console.log("state", this.state);
      this.state.loading = true;
      console.log(Object.values(this.state.qrcode).length === 0); // ["", ""]
      console.log(Object.values(this.state.qrcode));
      console.log(this.state.qrcode);

      // Generate QR Code here


      // Empty form fields
      // this.state.inputValues = {
      //   firstName: "",
      //   lastName: "",
      // };
      // Stop loading
      this.state.loading = false;
    },
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
.name-btn {
  width: 150px;
}
</style>