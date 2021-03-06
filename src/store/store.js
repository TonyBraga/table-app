import Vue from 'vue'
import Vuex from 'vuex'
import { getField, updateField } from 'vuex-map-fields' //connect plugin for heandlig v-model changes
import createPersistedState from 'vuex-persistedstate' //plugin for add state to LocalStore

Vue.use(Vuex)

const row = {fullName: '', position: '', salary: null, status: '', employmentDate: ''}

export default new Vuex.Store({
  state: {
    employees: []
  },
  getters: {
    getField
  },
  mutations: {
    addField: state => state.employees.push(row),
    removeField: (state, payload) => state.employees.splice(payload, 1),
    updateField
  }, 
  actions: {
    add(state) {
      state.commit('addField')
    },
    remove(state, payload) {
      state.commit('removeField', payload)
    }
  },
  plugins: [createPersistedState()],
  strict: true
})