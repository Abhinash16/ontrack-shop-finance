<template>
  <div class="m-0 p-0">
    <v-sheet class="mx-auto" max-width="100%">
      <v-item-group class="my-4">
        <v-container>
          <v-row>
            <v-col v-for="(item, index) in types" :key="index" cols="6" md="4">
              <v-item>
                <v-card
                  :color="selectedType === item.type ? 'primary' : '#fffff'"
                  class="d-flex align-center"
                  height="50"
                  @click="selectedType = item.type"
                >
                  <v-scroll-y-transition>
                    <div class="text-p flex-grow-1 text-center">
                      {{ item.type }}
                    </div>
                  </v-scroll-y-transition>
                </v-card>
              </v-item>
            </v-col>
          </v-row>
        </v-container>
      </v-item-group>
    </v-sheet>
    <v-sheet class="mx-auto my-4" max-width="100%">
      <p class="m-0 p-0">Select Manufacturer</p>
      <v-slide-group v-model="manufacturer">
        <v-slide-item v-for="n in 5" :key="n" v-slot="{ active, toggle }">
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
      <v-slide-group v-model="model">
        <v-slide-item v-for="n in 10" :key="n" v-slot="{ active, toggle }">
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
    <v-sheet class="mx-auto my-4" max-width="100%">
      <v-card class="" max-width="544" outlined>
        <v-list-item three-line>
          <v-list-item-content>
            <div class="text-overline mb-4">Selected</div>
            <v-list-item-title class="text-h10 mb-1">
              Honda Activa 3G
            </v-list-item-title>
            <v-list-item-subtitle> 120 CC | Kick & Self </v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-content>
            <v-img
              width="1px"
              src="https://on-track-jarvis.s3.ap-south-1.amazonaws.com/fc7fc50a-60a6-4d32-a8b4-fbdeac8ea3f7.png"
            ></v-img>
          </v-list-item-content>
        </v-list-item>

        <!-- <v-card-actions>
          <v-btn outlined rounded text> Button </v-btn>
        </v-card-actions> -->
      </v-card>
    </v-sheet>
    <v-sheet class="" max-width="100%">
      <v-tabs fixed-tabs v-model="vehicleTab">
        <v-tab>Finance</v-tab>
        <v-tab>Details</v-tab>
      </v-tabs>
    </v-sheet>
    <v-sheet class="" max-width="100%">
      <v-tabs-items v-model="vehicleTab">
        <v-tab-item>
          <v-list dense>
            <!-- <v-list-item>
              <v-list-item-content class="subheading font-weight-bold"
                >Model Details
              </v-list-item-content>
              <v-list-item-content class="align-end text-end">
                
              </v-list-item-content>
            </v-list-item> -->
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
    </v-sheet>
    <v-row class="my-5 px-4" align="center" justify="space-around">
      <v-btn tile block large color="primary" :to="`/finance/54`" depressed>
        Continue <v-icon class="my-0 py-0">mdi-chevron-right</v-icon>
      </v-btn>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    model: 2,
    manufacturer: 3,
    vehicleTab: null,
    downpayment: 45000,
    types: [
      {
        type: "Scooter",
      },
      {
        type: "Bike",
      },
    ],
    selectedType: "Scooter",
  }),
};
</script>

<style>
.bordered {
  border: 1px solid red !important;
}
</style>
