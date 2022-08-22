export default {
    registerBrand(state, payload) {
        state.brands.push(payload);
    },
    setBrands(state, payload) {
        state.brands = payload;
    },
    removeBrand(state, payload) {
        const index = state.brands.findIndex(brand => brand.id === payload);
        state.brands.splice(index, 1);
    }
};