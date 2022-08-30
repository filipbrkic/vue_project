export default {
    async registerModel(context, data) {
        const model = {
            name: data.name,
            description: data.description
        };

        const response = await fetch("http://127.0.0.1:8080/models", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(model),
        });

        if (!response.ok) {
            const error = new Error(response.message);
            throw error;
        }
        context.commit("registerModel", {
            ...await response.json()
        });
    },

    async loadModels(context) {
        const response = await fetch("http://127.0.0.1:8080/models");

        const responseData = await response.json();

        if (!response.ok) {
            const error = new Error(responseData.message);
            throw error;
        }

        const models = [];

        for (const key in responseData) {
            const model = {
                id: responseData[key].id,
                name: responseData[key].name,
                description: responseData[key].description
            }

            models.push(model);
        }

        context.commit("setModels", models);
    },

    async removeModel(context, index) {
        const response = await fetch(`http://127.0.0.1:8080/models/${index}`, {
            method: "DELETE",
        });

        if (!response.ok) {
            const error = new Error(response.message);
            throw error;
        }

        context.commit("removeModel", index);
    },

    async updateModel(context, data) {
        const model = {
            id: data.id,
            name: data.name,
            description: data.description
        };

        const response = await fetch(`http://127.0.0.1:8080/models/${model.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(model)
        });

        if (!response.ok) {
            const error = new Error(response.message);
            throw error;
        }
        context.commit('removeModel', {
            ...model.id
        });
        context.commit("updateModel", {
            ...model
        });
    }
};