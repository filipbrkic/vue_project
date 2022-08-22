<template>
  <section>
    <h2>Register Vehicle Model</h2>
    <model-form @save-mode-data="model"></model-form>
  </section>
</template>

<script>
import ModelForm from "../../components/models/ModelForm.vue";
import { mapActions } from "vuex";

export default {
  components: {
    ModelForm,
  },
  methods: {
    ...mapActions({
      model: "models/registerModel",
    }),
  },
};
</script>