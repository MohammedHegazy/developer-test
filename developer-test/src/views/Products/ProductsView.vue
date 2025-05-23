<template>
  <div class="products-view">
    <SectionComponent
      :backgroundColor="'#ffffff'"
      v-if="$store.state.ShownData.length > 0"
    >
      <div class="container mt-5">
        <PaginationComponent :products="$store.state.ShownData" :perPage="12" />
      </div>
    </SectionComponent>
  </div>
</template>

<script>
import PaginationComponent from "@/components/Elements/Products/PaginationComponent.vue";
import SectionComponent from "@/components/SectionComponent.vue";
import store from "@/store";
export default {
  name: "products-view",
  components: {
    PaginationComponent,
    SectionComponent,
  },
  methods: {
    async FilterDataByCategory() {
      await store.commit("GetKeyValue", { key: "category" });
      await store.commit("FilterDataByKey", { key: "category" });
    },
  },
  watch: {
    $route() {
      this.FilterDataByCategory();
    },
  },
  mounted() {
    this.FilterDataByCategory();
  },
};
</script>
