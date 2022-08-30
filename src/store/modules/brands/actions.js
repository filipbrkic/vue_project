export default {
    async registerBrand(context, data) {
        const brand = {
            name: data.name,
            description: data.description
        };

        const response = await fetch("http://127.0.0.1:8080/brands", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(brand),
        });

        if (!response.ok) {
            const error = new Error(response.message);
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
            const error = new Error(responseData.message);
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
            const error = new Error(response.message);
            throw error;
        }

        context.commit("removeBrand", index);
    },

    async updateBrand(context, data) {
        const brand = {
            id: data.id,
            name: data.name,
            description: data.description
        };

        const response = await fetch(`http://127.0.0.1:8080/brands/${brand.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(brand)
        });

        if (!response.ok) {
            const error = new Error(response.message);
            throw error;
        }
        context.commit('removeBrand', {
            ...brand.id
        });
        context.commit("updateBrand", {
            ...brand
        });
    }
};