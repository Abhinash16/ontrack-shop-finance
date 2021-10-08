<template>
  <v-app style="overflow:hidden">
    <v-app-bar app dense flat outlined>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Ontrack Finance</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-whatsapp</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-phone</v-icon>
      </v-btn>
      <!--
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn> -->
    </v-app-bar>
    <div>
      <v-navigation-drawer v-model="drawer" absolute bottom temporary>
        <div class="col-4 col-md-6 col-sm-4">
          <v-img
            src="https://book.on-track.in/img/ontrack-logo.f3184495.png"
          ></v-img>
        </div>
        <v-divider></v-divider>
        <v-list dense>
          <v-list-item v-for="item in items" :key="item.title" link>
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </div>
    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      drawer: null,
      items: [
        { title: "Home", icon: "mdi-view-dashboard" },
        { title: "How it works", icon: "mdi-head-question-outline" },
        { title: "About us", icon: "mdi-information" },
        { title: "Contact us", icon: "mdi-phone" }
      ]
    };
  }
};
</script>
