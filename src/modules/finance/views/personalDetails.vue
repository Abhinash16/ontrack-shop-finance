<template>
  <v-container>
    <p>This is personal Details Page</p>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  async created() {
    this.isLoading = true;

    try {
      const { data } = await axios.get(
        `https://fakestoreapi.com/products/${this.$route.params.id}`
      );
      this.product = data;
    } finally {
      this.isLoading = false;
    }
  }
};
</script>

<style></style>
