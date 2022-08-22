export default {
    async registerOwner(context, data) {
        var bodyFormData = new FormData();
        bodyFormData.append('first_name', data.firstName);
        bodyFormData.append('last_name', data.lastName);
        const response = await fetch("http://127.0.0.1:8080/owners", {
            method: "POST",
            body: bodyFormData,
        });

        if (!response.ok) {
            const error = new Error("Failed to create an owner!");
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
            const error = new Error(responseData.message || "Failed to fetch!");
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
            const error = new Error("Failed to delete a woner!");
            throw error;
        }

        context.commit("removeOwner", index);
    },
};