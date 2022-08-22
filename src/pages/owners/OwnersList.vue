<template>
  <section>
    <base-card>
      <owners-registration></owners-registration>
    </base-card>
    <base-card>
      <div class="container">
        <div class="row">
          <div class="col-md-7">
            <h2>List of Vehicle Owners:</h2>
          </div>
        </div>
      </div>
      <ul>
        <owner-item
          v-for="owner in owners"
          :key="owner.id"
          :id="owner.id"
          :firstName="owner.first_name"
          :lastName="owner.last_name"
        ></owner-item>
      </ul>
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
      owners: []
    };
  },
  async mounted() {
    await this.loadOwners();
    this.filteredOwners();
  },
  methods: {
    async loadOwners() {
      try {
        await this.$store.dispatch("owners/loadOwners");
      } catch (error) {
        this.error = error.message || "Something went wrong!";
      }
    },
    filteredOwners() {
      this.owners = this.$store.getters["owners/owners"];
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