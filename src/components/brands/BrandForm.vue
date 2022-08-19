<template>
  <form @submit.prevent="submitForm">
  <div class="form-group">
    <label for="InputName">Name</label>
    <input type="name" class="form-control" id="Name" placeholder="Enter name">
  </div>
  <div class="form-group">
    <label for="InputDescription">Description</label>
    <textarea type="description" class="form-control" id="InputDescription" row="5" placeholder="Description"></textarea>
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
              type: String,
              required: true
            },
            description: {
              type: String,
              required: true
            }
        }
    },
    methods: {
        submitForm() {
            const formData = {
                name: this.name,
                description: this.description
            }

            this.$emit('save-data', formData);
        }
    }
};
</script>

<style scoped>

</style>