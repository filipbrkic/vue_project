<template>
  <section>
    <base-card>
      <brands-registration></brands-registration>
    </base-card>
    <div class="container">
      <div class="row">
        <div class="col-md-5 offset-md-1">
          <h2>List of Registered Brands:</h2>
        </div>
      </div>
    </div>
    <ul>
      <brand-item
        v-for="brand in filteredBrands"
        :key="brand.id"
        :name="brand.name"
        :description="brand.description"
      ></brand-item>
    </ul>
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
    };
  },
  created() {
    this.loadBrands();
  },
  computed: {
    filteredBrands() {
      return this.$store.getters["brands/brands"];
    },
  },
  methods: {
    async loadBrands() {
      try {
        await this.$store.dispatch("brands/loadBrands");
      } catch (error) {
        this.error = error.message || "Something went wrong!";
      }
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