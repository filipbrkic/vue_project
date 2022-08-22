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
      <ul>
        <brand-item
          v-for="brand in brands"
          :key="brand.id"
          :id="brand.id"
          :name="brand.name"
          :description="brand.description"
        ></brand-item>
      </ul>
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
      brands: []
    };
  },
  async mounted() {
    await this.loadBrands();
    this.filteredBrands();
  },
  methods: {
    async loadBrands() {
      try {
        await this.$store.dispatch("brands/loadBrands");
      } catch (error) {
        this.error = error.message || "Something went wrong!";
      }
    },
    filteredBrands() {
      this.brands = this.$store.getters["brands/brands"];
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