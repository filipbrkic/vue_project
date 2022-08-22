export default {
    registerModel(state, payload) {
        state.models.push(payload);
    },
    setModels(state, payload) {
        state.models = payload;
    },
    removeModel(state, payload) {
        const index = state.models.findIndex(model => model.id === payload);
        state.models.splice(index, 1);
    }
};