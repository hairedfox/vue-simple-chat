import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    messages: []
  },
  mutations: {
    updateMessages(state, messages) {
      state.messages = messages;
    },
    newMessage(state, message) {
      state.messages.push(message);
    }
  },
  actions: {
    async getMessages({ commit }) {
      let res = await axios.get("http://localhost:3000/messages");
      commit("updateMessages", res.data.messages || []);
    },
    async newMessage({ commit }, messageBody) {
      let res = await axios.post("http://localhost:3000/messages", {
        message: messageBody
      });
      commit("newMessage", res.data.message);
    }
  }
});
