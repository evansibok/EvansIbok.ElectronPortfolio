<template>
  <div class="w-flex">
    <!-- User Details Component Template -->
    <!-- <template> -->
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

        <div v-if="state.qrcode.value === ''">
          <vue-qrcode
            value="state.qrcode.value"
            :options="{ width: 150 }"
          ></vue-qrcode>
        </div>
      </div>
    <!-- </template> -->

    <!-- Crypto Component Template -->
    <!-- <template> -->
      <div class="xs6 second-section flex align-center justify-center pt5">
        <h1>Crypto</h1>
        <h4>Hello {{ state.user.firstName }}</h4>

        <div class="w-flex row justify-center align-center mt8">
          <div class="ma5" v-for="coin in state.coinInfo" :key="coin">
            <p>
              Coin Name: <b>{{ coin.name }}</b>
            </p>
            <p class="mt3 mb3">
              Price: <b>${{ coin.price }}</b>
            </p>

            <vue-qrcode value="Hi" :options="{ width: 120 }"></vue-qrcode>
          </div>
        </div>
      </div>
    <!-- </template> -->
  </div>
</template>

<script>
import axios from "axios";
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
        qrcode: {
          value: "",
        },
        coinInfo: [
          {
            name: 'Tezos',
            price: '10'
          },
          {
            name: 'Burst',
            price: '3'
          },
          {
            name: 'Cardano',
            price: '0.23'
          }
        ],
      },
    };
  },
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
      console.log("user", this.state.user);

      // then set qrcode value to user values
      this.state.qrcode[
        "value"
      ] = `${this.state.user.firstName} ${this.state.user.lastName}`;
      console.log("qrcode", this.state.qrcode);

      // Clear form fields
      this.state.inputValues = {
        firstName: "",
        lastName: "",
      };
      // Stop loading
      this.state.loading = false;
    },
  },
  async mounted() {
    try {
      // const res = await axios.get("https://api.coindesk.com/v1/bpi/currentprice.json");
      const res = await axios.get(
        "https://api.coindesk.com/v1/bpi/currentprice.json"
      );

      console.log("res", res);
    } catch (e) {
      console.log("error", e);
    }
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