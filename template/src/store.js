import  Vuex from 'vuex'
import  Vue from 'vue'
Vue.use(Vuex)
const store = {
    state: {
        count: 0
    },
    mutations: {
        increment (state) {
            state.count++
        }
    }
}
const stores = new Vuex.Store(store)
export  default stores