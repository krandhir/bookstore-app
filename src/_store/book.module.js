import { bookService } from '../_services';

const state = {
    aBook: null
};

const actions = {
    getById( { commit } , id) {
        commit('getByIdRequest');
        bookService.getById(id)
            .then(
                book => commit('getByIdSuccess', book),
                error => commit('getByIdFailure', error)
            );
    },

};

const mutations = {
    getByIdRequest(state, id) {
        state.aBook = { loading: true };
        state.id = id;
    },
    getByIdSuccess(state, book) {
        state.aBook = book ;
        state.id = id;
    },
    getByIdFailure(state, error) {
        state.aBook = { error };
        state.id = null;
    },

};

export const book = {
    namespaced: true,
    state,
    actions,
    mutations
};
