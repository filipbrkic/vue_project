<template>
  <section>
    <base-card>
      <brands-registration></brands-registration>
    </base-card>
    <brand-item
      v-for="brand in filteredBrands"
      :key="brand.id"
      :name="brand.name"
      :description="brand.description"
    ></brand-item>
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
      return this.$store.getters.brands;
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
</style>