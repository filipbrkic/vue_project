export default {
    models(state) {
        return state.models;
    },
    hasModels(state) {
        return state.models && state.models.length > 0;
    }
};