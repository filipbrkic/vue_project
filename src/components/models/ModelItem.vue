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
        @click="removeModel(id)"
      >
        Delete
      </button>
      <button
        id="show-modal"
        type="button"
        class="btn btn-primary float-end"
        @click="showModal = true"
      >
        Edit
      </button>
      <Teleport to="body">
        <base-modal :show="showModal" @close="showModal = false">
          <model-update
            :key="id"
            :propId="id"
            @close="showModal = false"
          ></model-update>
        </base-modal>
      </Teleport>
    </div>
  </base-card>
</template>

<script>
import ModelUpdate from "./ModelUpdate.vue";

export default {
  props: ["id", "name", "description"],
  components: {
    ModelUpdate,
  },
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    removeModel(index) {
      try {
        this.$store.dispatch("models/removeModel", index);
      } catch (error) {
        this.error = error.message || "Something went wrong!";
      }
    },
  },
};
</script>