<template>
  <section>
    <base-card>
      <owners-registration></owners-registration>
    </base-card>
    <base-card>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h2>List of Registered Vehicle Owners:</h2>
          </div>
        </div>
      </div>
      <div v-if="isLoading">
        <base-spinner></base-spinner>
      </div>
      <ul v-else-if="hasOwners">
        <owner-item
          v-for="owner in owners"
          :key="owner.id"
          :id="owner.id"
          :firstName="owner.first_name"
          :lastName="owner.last_name"
        ></owner-item>
      </ul>
      <div v-else class="container">
        <h5>No Registered Owners found.</h5>
      </div>
    </base-card>
  </section>
</template>

<script>
import OwnersRegistration from "./OwnersRegistration.vue";
import OwnerItem from "../../components/owners/OwnerItem.vue";

export default {
  components: {
    OwnersRegistration,
    OwnerItem,
  },
  data() {
    return {
      error: null,
      owners: [],
      isLoading: false,
    };
  },
  async mounted() {
    await this.loadOwners();
    this.filteredOwners();
  },
  methods: {
    async loadOwners() {
      this.isLoading = true;
      try {
        await this.$store.dispatch("owners/loadOwners");
      } catch (error) {
        this.error = error.message || "Something went wrong!";
      }
      this.isLoading = false;
    },
    filteredOwners() {
      this.owners = this.$store.getters["owners/owners"];
    },
  },
  computed: {
    hasOwners() {
      return !this.isLoading && this.$store.getters["owners/hasOwners"];
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>