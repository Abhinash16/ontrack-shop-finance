<template>
  <div class="home">
    <h1>Home Page</h1>

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum aliquid
      impedit quod voluptatibus maiores provident, perspiciatis laborum.
      Molestias exercitationem quod ut aspernatur nostrum debitis molestiae
      ipsam, dolores assumenda alias quidem.
    </p>
    <v-btn tile color="primary" :to="`/finance`" depressed>
      Jump to finance page <v-icon class="my-0 py-0">mdi-chevron-right</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>
