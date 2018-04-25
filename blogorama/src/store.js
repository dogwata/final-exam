import Vue from 'vue';
import Vuex from 'vuex';

import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    entries: [],
  },
  getters: {
    entries: state => state.entries,
  },
  mutations: {
    setEntries (state, entries) {
      state.entries = entries;
    },
  },
  actions: {
    getEntries(context,user) {
      return axios.get("/api/entries").then(response => {
	return context.commit('setEntries',response.data.entries);
      }).catch(err => {
	console.log("getEntries failed:",err);
      });
    },
    addEntries: function() {
        axios.post("/api/entries", {
            text: this.form.text,
        }).then(response => {
            this.form.text = "";
            this.getEntries();
            return true;
        }).catch(err => {
        });
    },
    deleteEntries: function(id) {
        axios.delete("/api/entries/" + id).then(response => {
            this.getEntries();
            return true;
        }).catch(err => {
        });
    },
    updateEntries: function(entries) {
        axios.put("/api/entries/" + entries.id, entries).then(response => {
            this.getEntries();
            return true;
        }).catch(err => {
        });
  }
});
