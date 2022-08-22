<template>
  <base-card>
    <li>
      <h3>First Name: {{ firstName }}</h3>
      <h4>Last Name: {{ lastName }}</h4>
    </li>
    {{id}}
    <button type="button" class="btn btn-danger" @click="removeOwner(id)">
      Delete
    </button>
  </base-card>
</template>

<script>
export default {
  props: ["id", "firstName", "lastName"],
  methods: {
    removeOwner(index) {
      try {
        this.$store.dispatch("owners/removeOwner", index);
      } catch (error) {
        this.error = error.message || "Something went wrong!";
      }
    },
  },
};
</script>