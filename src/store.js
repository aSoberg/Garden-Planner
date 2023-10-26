import { createStore } from 'vuex'

export default createStore({
    state() {
        return {
            plants: []
        }
    },
    mutations: {
        addPlant(state, plant) {
            state.plants.push({ ...plant, id: Date.now() });
        }
    },
    actions: {
        addPlant({ commit }, plant) {
            commit("addPlant", plant);
        }
    }
});
