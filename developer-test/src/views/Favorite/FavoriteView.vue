<template>
  <div class="favorite-view">
    <SectionComponent
      :backgroundColor="'#ffffff'"
      v-if="$store.state.favorite.length > 0"
    >
      <div class="container mt-5">
        <PaginationComponent :products="$store.state.favorite" :perPage="12" />
      </div>
    </SectionComponent>
  </div>
</template>

<script>
import PaginationComponent from "@/components/Elements/Products/PaginationComponent.vue";
import SectionComponent from "@/components/SectionComponent.vue";
export default {
  name: "favorite-view",
  components: {
    PaginationComponent,
    SectionComponent,
  },
};
</script>
