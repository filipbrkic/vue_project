<template>
  <form @submit.prevent="submitForm">
    <div class="form-group">
      <label for="firstName">First Name</label>
      <input
        type="firstName"
        class="form-control"
        id="firstName"
        v-model.trim="firstName.val"
        placeholder="Enter First Name"
      />
    </div>
    <div class="form-group">
      <label for="lastName">Last Name</label>
      <textarea
        type="lastName"
        class="form-control"
        id="lastName"
        row="5"
        v-model.trim="lastName.val"
        placeholder="Enter Last Name"
      ></textarea>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>

<script>
export default {
  emits: ["save-owner-data"],
  data() {
    return {
      firstName: {
        val: "",
        type: String,
        required: true,
      },
      lastName: {
        val: "",
        type: String,
        required: true,
      },
    };
  },
  methods: {
    submitForm() {
      const formData = {
        firstName: this.firstName.val,
        lastName: this.lastName.val,
      };

      this.$emit("save-owner-data", formData);
    },
  },
};
</script>

<style scoped>
</style>