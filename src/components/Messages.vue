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
          v-for="(message, idx) in $store.state.messages"
          :key="idx"
          :to="`messages/${idx}`"
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
export default {
  name: "Messages",
  async created() {
    this.$store.dispatch("getMessages");
  }
};
</script>
