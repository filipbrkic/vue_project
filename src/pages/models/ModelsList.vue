<template>
  <section>
    <base-card>
      <models-registration></models-registration>
    </base-card>
    <base-card>
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <h2>List of Registered Models:</h2>
          </div>
        </div>
      </div>
      <div v-if="isLoading">
        <base-spinner></base-spinner>
      </div>
      <ul v-else-if="hasModels">
        <model-item
          v-for="model in models"
          :key="model.id"
          :id="model.id"
          :name="model.name"
          :description="model.description"
        ></model-item>
      </ul>
      <div v-else class="container">
        <h5>No Models found.</h5>
      </div>
    </base-card>
  </section>
</template>

<script>
import ModelItem from "../../components/models/ModelItem.vue";
import ModelsRegistration from "./ModelsRegistration.vue";

export default {
  components: {
    ModelItem,
    ModelsRegistration,
  },
  data() {
    return {
      error: null,
      models: [],
      isLoading: false,
    };
  },
  async mounted() {
    await this.loadModels();
    this.filteredModels();
  },
  methods: {
    async loadModels() {
      this.isLoading = true;
      try {
        await this.$store.dispatch("models/loadModels");
      } catch (error) {
        this.error = error.message || "Something went wrong!";
      }
      this.isLoading = false;
    },
    filteredModels() {
      this.models = this.$store.getters["models/models"];
    },
  },
  computed: {
    hasModels() {
      return !this.isLoading && this.$store.getters["models/hasModels"];
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>