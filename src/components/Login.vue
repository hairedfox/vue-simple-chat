<template>
  <v-flex sm8 offset-sm2>
    <v-card>
      <v-toolbar dark>
        <v-toolbar-title>
          Login
        </v-toolbar-title>
      </v-toolbar>
      <v-form>
        <v-container>
          <v-row>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="userName"
                label="User Name"
                required
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                v-model="password"
                label="Password"
                required
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
        <v-btn class="mr-4" @click="login">
          Login
        </v-btn>
      </v-form>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      userName: "",
      password: ""
    };
  },
  methods: {
    login() {
      try {
        this.$store.dispatch("login", {
          userName: this.userName,
          password: this.password
        });
      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>
