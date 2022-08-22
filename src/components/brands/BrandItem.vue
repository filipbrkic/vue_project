<template>
  <base-card>
    <li>
      <h3>Name: {{ name }}</h3>
      <h4>Description: {{ description }}</h4>
    </li>
    <button type="button" class="btn btn-danger" @click="removeBrand(id)">
      Delete
    </button>
  </base-card>
</template>

<script>
export default {
  props: ["id", "name", "description"],
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