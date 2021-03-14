<template>
  <v-app-bar app color="primary" dark>
    <v-btn text light to="/">Messages</v-btn>
    <v-btn text light to="/new-message">New Message</v-btn>
    <v-spacer></v-spacer>
    <v-btn text light class="ml-2">Register</v-btn>
    <v-btn text light class="ml-2">Login</v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "Navbar"
};
</script>
