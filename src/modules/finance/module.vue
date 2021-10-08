<template>
  <div>
    <v-stepper
      alt-labels
      class="border-0"
      style="background: none; box-shadow: none"
    >
      <v-stepper-header>
        <v-stepper-step step="1"> Select Vehicle </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step step="2"> Your Details </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step step="3"> Verify </v-stepper-step>
      </v-stepper-header>
    </v-stepper>
    <router-view />
  </div>
</template>

<script>
export default {};
</script>
