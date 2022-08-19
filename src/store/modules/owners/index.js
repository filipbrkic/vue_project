import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

export default {
    namespaced: true,
    state() {
        return {
            owners: [
                {
                    id: "",
                    first_name: "",
                    last_name: "",
                }
            ]
        }
    },
    mutations,
    actions,
    getters
};