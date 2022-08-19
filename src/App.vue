<template>
    <the-header></the-header>
    <router-view></router-view>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
export default {
    components: {
        TheHeader
    }
};
</script>

<style>
@import url("https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css");
</style>