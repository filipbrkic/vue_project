import { createRouter, createWebHistory } from "vue-router";

import BrandsList from "./pages/brands/BrandsList.vue";
import ModelsList from "./pages/models/ModelsList.vue";
import OwnersList from "./pages/owners/OwnersList.vue";
import NotFound from "./pages/NotFound.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", redirect: "/brands" },
        { path: "/brands", component: BrandsList },
        { path: "/models", component: ModelsList },
        { path: "/owners", component: OwnersList },
        { path: "/:notFound(.*)", component: NotFound },
    ]
});

export default router;