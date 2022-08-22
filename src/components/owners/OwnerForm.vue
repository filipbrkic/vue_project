<template>
  <form @submit.prevent="submitForm">
    <div class="form-group" :class="{ invalid: !firstName.isValid }">
      <label for="firstName">First Name</label>
      <input
        type="firstName"
        class="form-control"
        id="firstName"
        v-model.trim="firstName.val"
        placeholder="Enter First Name"
        @blur="clearValidity('firstName')"
      />
      <p v-if="!firstName.isValid">First Name must not be empty.</p>
    </div>
    <div class="form-group" :class="{ invalid: !lastName.isValid }">
      <label for="lastName">Last Name</label>
      <input
        type="lastName"
        class="form-control"
        id="lastName"
        v-model.trim="lastName.val"
        placeholder="Enter Last Name"
        @blur="clearValidity('lastName')"
      />
      <p v-if="!lastName.isValid">Last Name must not be empty.</p>
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
        isValid: true,
      },
      lastName: {
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
      if (this.firstName.val === "") {
        this.firstName.isValid = false;
        this.formIsValid = false;
      }
      if (this.lastName.val === "") {
        this.lastName.isValid = false;
        this.formIsValid = false;
      }
    },
    submitForm() {
      this.validateForm();

      if (!this.formIsValid) {
        return;
      }
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
.invalid label {
  color: red;
}
.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>