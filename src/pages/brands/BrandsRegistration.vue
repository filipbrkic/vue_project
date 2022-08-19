<template>
    <section>
        <h2>Register Vehicles Brand</h2>
        <brand-form @save-data="reg"></brand-form>
    </section>
</template>

<script>
import BrandForm from "../../components/brands/BrandForm.vue";
import { mapActions } from "vuex";

export default {
    components: {
        BrandForm,
    },
    methods: {
      /*  saveData(data) {
            this.$store.dispatch("registerBrand", data);
        } */
        ...mapActions({
            reg: 'brands/registerBrand'
        })
    }
};
</script>

<style scoped>

</style>