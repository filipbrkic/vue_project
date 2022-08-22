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
    </div>
  </base-card>
</template>

<script>
export default {
  props: ["id", "name", "description"],
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