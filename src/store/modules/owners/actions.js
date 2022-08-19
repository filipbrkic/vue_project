export default {
    async registerOwner(context, data) {
        const ownerData = {
            first_name: data.firstName,
            last_name: data.lastName,
        }

        const response = await fetch("https://vue-http-demo-2bdd1-default-rtdb.europe-west1.firebasedatabase.app/owners.json", {
            method: "POST",
            body: JSON.stringify(ownerData)
        });

        if (!response.ok) {
            const error = new Error();
            throw error;
        }

        context.commit("registerOwner", {
            ...ownerData
        });
    },
};