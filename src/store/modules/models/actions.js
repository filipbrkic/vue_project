export default {
    async registerModels(context, data) {
        const modelData = {
            id: "",
            name: data.name,
            description: data.description,
        }

        const response = await fetch("http://127.0.0.1:8080/models", {
            method: "POST",
            body: JSON.stringify(modelData)
        });

        if (!response.ok) {
            const error = new Error();
            throw error;
        }

        context.commit("registerModel", {
            ...modelData
        });
    },
};