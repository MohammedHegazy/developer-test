<template>
  <NavbarComponent />
  <router-view class="margin-top" />
  <FooterComponent />
  <LoadingScreen />
  <ErrPopup />
</template>

<script setup>
import NavbarComponent from "@/components/NavbarComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
import LoadingScreen from "./components/LoadingScreen.vue";
import ErrPopup from "./components/ErrPopup.vue";
import { onBeforeMount } from "vue";
import store from "./store";

onBeforeMount(() => {
  store.dispatch("GetData", {
    api: "products",
    trigger: ["FilterCategories", "GetSpecialOffers"],
  });
  store.dispatch("LoadCart");
  store.dispatch("LoadFavorite");
});
</script>
