export default {
    async registerBrand(context, data) {
        const brandData = {
            name: data.name,
            description: data.description,
        }

        const response = await fetch("https://vue-http-demo-2bdd1-default-rtdb.europe-west1.firebasedatabase.app/brands.json", {
            method: "POST",
            body: JSON.stringify(brandData)
        });

        if (!response.ok) {
            const error = new Error();
            throw error;
        }

        context.commit("registerBrand", {
            ...brandData
        });
    },

    async loadBrands(context) {
        const response = await fetch("https://vue-http-demo-2bdd1-default-rtdb.europe-west1.firebasedatabase.app/brands.json");

        const responseData = await response.json();

        if (!response.ok) {
            const error = new Error(responseData.message || "Failed to fetch!");
            throw error;
        }

        const brands = [];

        for (const key in responseData) {
            const brand = {
                id: key,
                name: responseData[key].name,
                description: responseData[key].description
            }

            brands.push(brand);
        }

        context.commit("setBrands", brands);
    }
};