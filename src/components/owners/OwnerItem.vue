<template>
  <base-card>
    <li>
      <h3>First Name: {{ firstName }}</h3>
      <h3>Last Name: {{ lastName }}</h3>
    </li>
    <div class="col-md-12">
      <button
        type="button"
        class="btn btn-danger float-end"
        @click="removeOwner(id)"
      >
        Delete
      </button>
      <button
        id="show-modal"
        type="button"
        class="btn btn-primary float-end"
        @click="showModal = true"
      >
        Edit
      </button>
      <Teleport to="body">
        <base-modal :show="showModal" @close="showModal = false">
          <owner-update
            :key="id"
            :propId="id"
            @close="showModal = false"
          ></owner-update>
        </base-modal>
      </Teleport>
    </div>
  </base-card>
</template>

<script>
import OwnerUpdate from "./OwnerUpdate.vue";

export default {
  props: ["id", "firstName", "lastName"],
  components: {
    OwnerUpdate,
  },
  data() {
    return {
      showModal: false,
    };
  },
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