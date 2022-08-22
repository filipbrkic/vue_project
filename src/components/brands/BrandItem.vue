<template>
  <base-card>
    <li>
      <h3>Name: {{ name }}</h3>
      <h4>Description: {{ description }}</h4>
    </li>
    <div class="col-md-12">
      <button
        type="button"
        class="btn btn-danger float-end"
        @click="removeBrand(id)"
      >
        Delete
      </button>
      <button
        id="show-modal"
        type="button"
        class="btn btn-warning float-end"
        @click="showModal = true"
      >
        Edit
      </button>
      <Teleport to="body">
        <base-modal :show="showModal" @close="showModal = false">
          <brand-update
            :key="id"
            :propId="id"
            :propName="name"
            :propDescription="description"
            @close="showModal = false"
          ></brand-update>
        </base-modal>
      </Teleport>
    </div>
  </base-card>
</template>

<script>
import BrandUpdate from "./BrandUpdate.vue";

export default {
  props: ["id", "name", "description"],
  components: {
    BrandUpdate,
  },
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    removeBrand(index) {
      try {
        this.$store.dispatch("brands/removeBrand", index);
      } catch (error) {
        this.error = error.message || "Something went wrong!";
      }
    },
  },
};
</script>