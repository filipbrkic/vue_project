<template>
  <section>
    <base-card>
      <models-registration></models-registration>
    </base-card>
    <base-card>
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <h2>List of Registered Models:</h2>
          </div>
        </div>
      </div>
      <ul></ul>
    </base-card>
  </section>
</template>

<script>
import ModelsRegistration from "./ModelsRegistration.vue";

export default {
  components: {
    ModelsRegistration,
  },
  data() {
    return {
      error: null,
    };
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>