<template>
  <base-card>
    <li>
      <h3>Name: {{ name }}</h3>
      <h4>Description: {{ description }}</h4>
    </li>
  </base-card>
</template>

<script>
import BaseCard from "../ui/BaseCard.vue";
export default {
  components: { BaseCard },
  props: ["name", "description"],
};
</script>

<style scoped>
</style>