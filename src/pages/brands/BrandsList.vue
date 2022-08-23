<template>
  <section>
    <base-card>
      <brands-registration></brands-registration>
    </base-card>
    <base-card>
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <h2>List of Registered Brands:</h2>
          </div>
        </div>
      </div>
      <div v-if="isLoading">
        <base-spinner></base-spinner>
      </div>
      <ul v-else-if="hasBrands">
        <brand-item
          v-for="brand in brands"
          :key="brand.id"
          :id="brand.id"
          :name="brand.name"
          :description="brand.description"
        ></brand-item>
      </ul>
      <div v-else class="container">
        <h5>No Brands found.</h5>
      </div>
    </base-card>
  </section>
</template>

<script>
import BrandItem from "@/components/brands/BrandItem.vue";
import BrandsRegistration from "./BrandsRegistration.vue";

export default {
  components: {
    BrandItem,
    BrandsRegistration,
  },
  data() {
    return {
      error: null,
      brands: [],
      isLoading: false,
    };
  },
  async mounted() {
    await this.loadBrands();
    this.filteredBrands();
  },
  methods: {
    async loadBrands() {
      this.isLoading = true;
      try {
        await this.$store.dispatch("brands/loadBrands");
      } catch (error) {
        this.error = error.message || "Something went wrong!";
      }
      this.isLoading = false;
    },
    filteredBrands() {
      this.brands = this.$store.getters["brands/brands"];
    },
  },
  computed: {
    hasBrands() {
      return !this.isLoading && this.$store.getters["brands/hasBrands"];
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