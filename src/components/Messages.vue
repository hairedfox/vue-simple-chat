<template>
  <v-flex sm8 offset-sm2>
    <v-card>
      <v-toolbar dark>
        <v-toolbar-title>
          Messages
        </v-toolbar-title>
      </v-toolbar>
      <v-list>
        <v-list-item
          v-for="(message, idx) in messages"
          :key="idx"
          @click.prevent=""
        >
          <v-list-item-content>
            <v-list-item-title v-text="message"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
  </v-flex>
</template>

<script>
import axios from "axios";

export default {
  name: "Messages",
  data() {
    return {
      messages: []
    };
  },
  async created() {
    this.$root.$on("newMessage", message => {
      this.messages.push(message);
    });
    this.messages = (await axios.get("http://localhost:3000/messages")).data;
  }
};
</script>
