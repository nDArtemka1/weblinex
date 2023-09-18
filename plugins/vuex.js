import { createStore } from "vuex";

const popup = {
    state: () => ({
        modalActive: false,
    }),
    mutations: {
        TOGGAL_MODAL(state) {
            return state.modalActive == !state.modalActive;
        }
    },
    actions: {
        TOGAL_MODAL({ commit }) {
            commit('TOGGAL_MODAL', modalActive);
        }
    },
    getters: {
        GET_MODAL_ACTIVE(state) {
            let modalActive = state.modalActive;
            return modalActive;
        },
    }
}

const moduleB = {
    state: () => ({}),
    mutations: {},
    actions: {}
}

const store = createStore({
    modules: {
        popup: popup,
        b: moduleB
    }
})

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(store);
    // Install the store instance as a plugin
});