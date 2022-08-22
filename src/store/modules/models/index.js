import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

export default {
    namespaced: true,
    state() {
        return {
            models: [
                {
                    id: "",
                    name: "",
                    description: "",
                }
            ]
        }
    },
    mutations,
    actions,
    getters
};