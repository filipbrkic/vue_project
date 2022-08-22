<template>
  <form @submit.prevent="submitForm">
    <div class="form-group" :class="{ invalid: !name.isValid }">
      <label for="name">Name</label>
      <input
        type="name"
        class="form-control"
        id="name"
        v-on:keyup.enter="submitForm"
        v-model.trim="name.val"
        placeholder="Enter Name"
        @blur="clearValidity('name')"
      />
      <p v-if="!name.isValid">Name must not be empty.</p>
    </div>
    <div class="form-group" :class="{ invalid: !description.isValid }">
      <label for="description">Description</label>
      <textarea
        type="description"
        class="form-control"
        id="description"
        row="5"
        v-on:keyup.enter="submitForm"
        v-model.trim="description.val"
        placeholder="Enter Description"
        @blur="clearValidity('description')"
      ></textarea>
      <p v-if="!description.isValid">Description must not be empty.</p>
    </div>
    <button type="submit" class="btn btn-primary">Update</button>
  </form>
</template>

<script>
export default {
  emits: ["update-brand-data", "close"],
  props: ["propId", "propName", "propDescription"],
  data() {
    return {
      id: {
        val: this.propId,
        type: Number,
      },
      name: {
        val: "",
        type: String,
        required: true,
        isValid: true,
      },
      description: {
        val: "",
        type: String,
        required: true,
        isValid: true,
      },
      formIsValid: true,
    };
  },
  methods: {
    clearValidity(input) {
      this[input].isValid = true;
    },
    validateForm() {
      this.formIsValid = true;
      if (this.name.val === "") {
        this.name.isValid = false;
        this.formIsValid = false;
      }
      if (this.description.val === "") {
        this.description.isValid = false;
        this.formIsValid = false;
      }
    },
    submitForm() {
      this.validateForm();

      if (!this.formIsValid) {
        return;
      }

      const formData = {
        id: this.id.val,
        name: this.name.val,
        description: this.description.val,
      };

      this.$store.dispatch("brands/updateBrand", formData);

      this.name.val = "";
      this.description.val = "";
    },
  },
};
</script>

<style scoped>
.invalid label {
  color: red;
}
.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>