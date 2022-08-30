export default {
    async registerOwner(context, data) {
        const owner = {
            first_name: data.firstName,
            last_name: data.lastName
        };

        const response = await fetch("http://127.0.0.1:8080/owners", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(owner),
        });

        if (!response.ok) {
            const error = new Error(response.message);
            throw error;
        }
        context.commit("registerOwner", {
            ...await response.json()
        });
    },

    async loadOwners(context) {
        const response = await fetch("http://127.0.0.1:8080/owners");

        const responseData = await response.json();

        if (!response.ok) {
            const error = new Error(responseData.message);
            throw error;
        }

        const owners = [];

        for (const key in responseData) {
            const owner = {
                id: responseData[key].id,
                first_name: responseData[key].first_name,
                last_name: responseData[key].last_name
            }

            owners.push(owner);
        }

        context.commit("setOwners", owners);
    },

    async removeOwner(context, index) {
        const response = await fetch(`http://127.0.0.1:8080/owners/${index}`, {
            method: "DELETE",
        });

        if (!response.ok) {
            const error = new Error(response.message);
            throw error;
        }

        context.commit("removeOwner", index);
    },

    async updateOwner(context, data) {
        const owner = {
            id: data.id,
            first_name: data.firstName,
            last_name: data.lastName
        };

        const response = await fetch(`http://127.0.0.1:8080/owners/${owner.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(owner)
        });

        const responseData = await response.json();

        if (!response.ok) {
            const error = new Error(responseData.message);
            throw error;
        }
        context.commit('removeOwner', {
            ...owner.id
        });
        context.commit("updateOwner", {
            ...owner
        });
    }
};