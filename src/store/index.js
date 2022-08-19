import { createStore } from "vuex";

import brandsModule from "./modules/brands/index.js";
import ownersModule from "./modules/owners/index.js";
import modelsModule from "./modules/models/index.js";

const store = createStore({
    modules: {
        brands: brandsModule,
        owners: ownersModule,
        models: modelsModule,
    }
});

export default store;