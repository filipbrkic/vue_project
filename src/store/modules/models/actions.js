export default {
    async registerModel(context, data) {
        var bodyFormData = new FormData();
        bodyFormData.append('name', data.name);
        bodyFormData.append('description', data.description);
        const response = await fetch("http://127.0.0.1:8080/models", {
            method: "POST",
            body: bodyFormData,
        });

        if (!response.ok) {
            const error = new Error("Failed to create a model!");
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
            const error = new Error(responseData.message || "Failed to fetch!");
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
            const error = new Error("Failed to delete a model!");
            throw error;
        }

        context.commit("removeModel", index);
    },
};