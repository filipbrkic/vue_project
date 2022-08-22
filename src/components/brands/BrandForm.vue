<template>
  <form @submit.prevent="submitForm">
    <div class="form-group">
      <label for="name">Name</label>
      <input
        type="name"
        class="form-control"
        id="name"
        v-model.trim="name.val"
        placeholder="Enter name"
      />
    </div>
    <div class="form-group">
      <label for="description">Description</label>
      <textarea
        type="description"
        class="form-control"
        id="description"
        row="5"
        v-model.trim="description.val"
        placeholder="Enter description"
      ></textarea>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>

<script>
export default {
  emits: ["save-data"],
  data() {
    return {
      name: {
        val: "",
        type: String,
        required: true,
      },
      description: {
        val: "",
        type: String,
        required: true,
      },
    };
  },
  methods: {
    submitForm() {
      const formData = {
        name: this.name.val,
        description: this.description.val,
      };

      this.$emit("save-data", formData);
    },
  },
};
</script>