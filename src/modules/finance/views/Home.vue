<template>
  <div class="m-0 p-0">
    <v-sheet class="mx-auto" max-width="100%">
      <p class="m-0 p-0">Select Manufacturer</p>
      <v-slide-group v-model="manufacturer" show-arrows>
        <v-slide-item v-for="n in 25" :key="n" v-slot="{ active, toggle }">
          <v-card
            :color="active ? undefined : 'white lighten-1'"
            :class="active ? 'bordered' : ''"
            class="ma-3 bordered"
            height="50"
            width="50"
            @click="toggle"
          >
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
    <v-sheet class="mx-auto" max-width="100%">
      <p class="m-0 p-0">Select Model</p>
      <v-slide-group v-model="model" show-arrows>
        <v-slide-item v-for="n in 25" :key="n" v-slot="{ active, toggle }">
          <v-card
            :color="active ? undefined : 'white lighten-1'"
            :class="active ? 'bordered' : ''"
            class="ma-3 bordered"
            height="50"
            width="50"
            @click="toggle"
          >
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
    <v-container class="my-5 md-6">
      <v-img
        src="https://picsum.photos/510/300?random"
        aspect-ratio="2"
      ></v-img>
    </v-container>
    <v-container>
      <v-tabs fixed-tabs v-model="vehicleTab">
        <v-tab>Finance</v-tab>
        <v-tab>Detail</v-tab>
      </v-tabs>
    </v-container>
    <div cols="12" sm="6" md="4" lg="3" style="min-height:200px">
      <v-tabs-items v-model="vehicleTab">
        <v-tab-item>
          <v-list dense>
            <v-list-item>
              <v-list-item-content class="subheading font-weight-bold"
                >Model Details
              </v-list-item-content>
              <v-list-item-content class="align-end text-end">
                Honda Activa 3G
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content class="subheading font-weight-bold"
                >Down Payment
              </v-list-item-content>
              <v-list-item-content class="align-end text-end">
                <div class="d-flex">
                  <v-icon>mdi-minus</v-icon>
                  <p
                    style="vertical-align: middle"
                    class="px-2 my-0 mx-0 py-0 justify-content"
                  >
                    35000
                  </p>
                  <v-icon>mdi-plus</v-icon>
                </div>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content class="subheading font-weight-bold"
                >Tenure
              </v-list-item-content>
              <v-list-item-content class="align-end text-end">
                <div class="d-flex">
                  <v-icon>mdi-minus</v-icon>
                  <p
                    style="vertical-align: middle"
                    class="px-2 my-0 mx-0 py-0 justify-content"
                  >
                    35000
                  </p>
                  <v-icon>mdi-plus</v-icon>
                </div>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content class="subheading font-weight-bold"
                >EMI
              </v-list-item-content>
              <v-list-item-content class="align-end text-end">
                1500 / month
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content class="subheading font-weight-bold"
                >On Road Price
              </v-list-item-content>
              <v-list-item-content class="align-end text-end">
                70,000
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-tab-item>
        <v-tab-item>
          <v-list dense>
            <p>Bike Details will arrive here!</p>
          </v-list>
        </v-tab-item>
      </v-tabs-items>
    </div>
    <v-row class="my-5" align="center" justify="space-around">
      <v-btn tile color="primary" :to="`/finance/54`" depressed>
        Continue <v-icon class="my-0 py-0">mdi-chevron-right</v-icon>
      </v-btn>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    model: null,
    manufacturer: null,
    vehicleTab: null,
    downpayment: 45000,
  }),
};
</script>

<style>
.bordered {
  border: 1px solid red !important;
}
</style>
