import { createStore } from "vuex";

import brandsModule from "./modules/brands/index.js";

const store = createStore({
    models: {
        brands: brandsModule
    }
});

export default store;