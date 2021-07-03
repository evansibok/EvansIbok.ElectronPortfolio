<template>
  <!-- User Details Component Template -->
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

    <div v-if="state.qrcode.value.length !== 0">
      <qrcode-vue
        :value="state.qrcode.value"
        :size="state.qrcode.size"
        level="H"
      />
    </div>
  </div>
</template>

<script>
import QrcodeVue from "qrcode.vue";

export default {
  name: "User",
  props: {},
  components: {
    QrcodeVue,
  },
  data: () => ({
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
      qrcode: {
        value: "",
        size: 150,
      },
    },
  }),
  methods: {
    generateCode() {
      // Function to generate QR Code for user details
      this.state.loading = true;

      // get input values
      // onclick of button
      // set user state to input values
      this.state.user = {
        firstName: this.state.inputValues.firstName,
        lastName: this.state.inputValues.lastName,
      };

      // then set qrcode value to user values
      if (
        this.state.inputValues.firstName !== "" &&
        this.state.inputValues.lastName !== ""
      ) {
        this.state.qrcode[
          "value"
        ] = `${this.state.user.firstName} ${this.state.user.lastName}`;
      }

      // Clear form fields
      this.state.inputValues = {
        firstName: "",
        lastName: "",
      };
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
.user-form {
  width: 500px;
  margin: 0 auto;
}
.name-btn {
  width: 150px;
}
</style>