<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <br />
      <NewMessage />
      <br />
      <Messages />
    </v-main>
  </v-app>
</template>

<script>
import Messages from "./components/Messages";
import NewMessage from "./components/NewMessage";

export default {
  name: "App",

  data: () => ({
    //
  }),
  components: {
    Messages,
    NewMessage
  }
};
</script>
