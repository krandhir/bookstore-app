import { bookService } from '../_services';

const state = {
    all: {}
};

const actions = {
    getAll({ commit }) {
        commit('getAllRequest');

        bookService.getAll()
            .then(
                books => commit('getAllSuccess', books),
                error => commit('getAllFailure', error)
            );
    },

};

const mutations = {
    getAllRequest(state) {
        state.all = { loading: true };
    },
    getAllSuccess(state, books) {
        state.all = { items: books };
    },
    getAllFailure(state, error) {
        state.all = { error };
    },

};

export const books = {
    namespaced: true,
    state,
    actions,
    mutations
};
