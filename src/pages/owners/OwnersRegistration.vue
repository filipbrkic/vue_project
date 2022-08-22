<template>
  <section>
    <h2>Register Vehicle Owner</h2>
    <owner-form @save-owner-data="reg"></owner-form>
  </section>
</template>

<script>
import { mapActions } from "vuex";
import OwnerForm from "../../components/owners/OwnerForm.vue";

export default {
  components: {
    OwnerForm,
  },
  methods: {
    ...mapActions({
      reg: "owners/registerOwner",
    }),
  },
};
</script>