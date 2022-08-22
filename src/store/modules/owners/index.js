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
                    firstName: "",
                    lastName: "",
                }
            ]
        }
    },
    mutations,
    actions,
    getters
};