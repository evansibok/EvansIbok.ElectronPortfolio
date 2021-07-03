<template>
  <!-- Crypto Component Template -->
  <div class="xs6 second-section flex align-center justify-center pt5">
    <h1>Crypto</h1>
    <h4>Hello {{ user.firstName }}</h4>

    <div class="w-flex row justify-center align-center mt8">
      <div v-if="state.coinInfo.length === 0" class="mt3 mb3">
        <p>Loading...</p>
      </div>
      <div v-else class="ma5" v-for="coin in state.coinInfo" :key="coin">
        <div class="mt3 mb3">
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
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Crypto",
  props: {
    user: {
      type: String,
    },
  },
  data: () => ({
    state: {
      loading: false,
      qrcode: {
        value: "",
      },
      coinInfo: [],
    },
  }),
    async mounted() {
    try {
      const symbols = ["ADA", "BURST", "XTZ"];

      const prices = await axios.get(
        "http://localhost:8080/live?access_key=69bf5862d8d82e7794a03abb11c50f82",
        {
          headers: {
            "Access-Control-Allow-Origin": "origin",
          },
        }
      );

      const coinsList = await axios.get(
        "http://localhost:8080/list?access_key=69bf5862d8d82e7794a03abb11c50f82",
        {
          headers: {
            "Access-Control-Allow-Origin": "origin",
          },
        }
      );

      const priceResult = prices.data.rates;
      const coinsListResult = coinsList.data.crypto;

      let coin;

      for (const symbol of symbols) {
        coin = {
          name: coinsListResult[symbol]['name'],
          price: priceResult[symbol],
          symbol: symbol,
        };
        this.state.coinInfo.push(coin);
      }
    } catch (e) {
      console.log("error", e);
    }
  },
};
</script>

<style scoped>
</style>