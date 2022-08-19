<template>
  <section>
    <base-card>
      <owners-registration></owners-registration>
    </base-card>
    <div class="container">
      <div class="row">
        <div class="col-md-5 offset-md-1">
          <h2>List of Vehicle Owners:</h2>
        </div>
      </div>
    </div>
    <ul>

    </ul>
  </section>
</template>

<script>
import OwnersRegistration from "./OwnersRegistration.vue";

export default {
    components: {
        OwnersRegistration,
    }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>