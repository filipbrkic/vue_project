export default {
    registerOwner(state, payload) {
        state.owners.push(payload);
    },
    setOwners(state, payload) {
        state.owners = payload;
    },
    removeOwner(state, payload) {
        const index = state.owners.findIndex(owner => owner.id === payload);
        state.owners.splice(index, 1);
    },
    updateOwner(state, payload) {
        state.owners.push(payload);
    },
};