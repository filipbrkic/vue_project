<template>
  <section>
    <h2>Register Vehicle Brand</h2>
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
    ...mapActions({
      reg: "brands/registerBrand",
    }),
  },
};
</script>