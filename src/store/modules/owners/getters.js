export default {
    owners(state) {
        return state.owners;
    },
    hasOwners(state) {
        return state.owners && state.owners.length > 0;
    }
};