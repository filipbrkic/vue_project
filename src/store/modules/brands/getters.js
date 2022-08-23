export default {
    brands(state) {
        return state.brands;
    },
    hasBrands(state) {
        return state.brands && state.brands.length > 0;
    }
};