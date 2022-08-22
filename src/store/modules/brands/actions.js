export default {
    async registerBrand(context, data) {
        var bodyFormData = new FormData();
        bodyFormData.append('name', data.name);
        bodyFormData.append('description', data.description);
        const response = await fetch("http://127.0.0.1:8080/brands", {
            method: "POST",
            body: bodyFormData,
        });

        if (!response.ok) {
            const error = new Error("Failed to create a brand!");
            throw error;
        }
        context.commit("registerBrand", {
            ...await response.json()
        });
    },

    async loadBrands(context) {
        const response = await fetch("http://127.0.0.1:8080/brands");

        const responseData = await response.json();

        if (!response.ok) {
            const error = new Error(responseData.message || "Failed to fetch!");
            throw error;
        }

        const brands = [];

        for (const key in responseData) {
            const brand = {
                id: responseData[key].id,
                name: responseData[key].name,
                description: responseData[key].description
            }

            brands.push(brand);
        }

        context.commit("setBrands", brands);
    },

    async removeBrand(context, index) {
        const response = await fetch(`http://127.0.0.1:8080/brands/${index}`, {
            method: "DELETE",
        });

        if (!response.ok) {
            const error = new Error("Failed to delete a brand!");
            throw error;
        }

        context.commit("removeBrand", index);
    },
};