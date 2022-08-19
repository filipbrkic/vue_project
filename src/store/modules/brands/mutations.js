export default {
    registerBrand(state, payload) {
        state.brands.push(payload);
    },
    setBrands(state, payload) {
        state.brands = payload;
    }
};