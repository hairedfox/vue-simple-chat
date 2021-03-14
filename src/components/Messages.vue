<template>
  <div>
    <h4 class="display-1">Messages</h4>
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
  </div>
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
    this.messages = (await axios.get("http://localhost:3000/messages")).data;
  }
};
</script>
