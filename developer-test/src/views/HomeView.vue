<template>
  <div class="home-view">
    <SectionComponent
      :backgroundColor="'#eeeee4'"
      :image="image1"
      v-if="$store.state.Categories.includes('electronics')"
    >
      <h2 class="fw-bold display-4">SALE</h2>
      <p class="lead">ACCESS A LIMITED SELECTION<br />WITH UP TO 70% OFF</p>
      <BlackButton text="SHOP NOW" RouterUrl="/products?category=electronics" />
    </SectionComponent>
    <SectionComponent
      :backgroundColor="'#030303'"
      :image="image2"
      v-if="$store.state.Categories.includes('jewelery')"
    >
      <div class="spacing"></div>
      <WhiteButton text="SEE MORE" RouterUrl="/products?category=jewelery" />
    </SectionComponent>
    <SectionComponent
      :backgroundColor="'#ffffff'"
      v-if="Object.keys($store.state.SpecialOffers).length > 0"
    >
      <SwiperComponent
        title="Special Offers"
        :items="$store.state.SpecialOffers"
      />
    </SectionComponent>
    <SectionComponent
      :backgroundColor="'#cccdd2'"
      :image="image3"
      v-if="Object.keys($store.state.data).length > 0"
    >
      <div class="spacing"></div>
    </SectionComponent>
    <SectionComponent
      :backgroundColor="'#ffffff'"
      v-if="Object.keys($store.state.data).length > 0"
    >
      <SwiperComponent title="NEW ARRIVALS" :items="$store.state.data" />
    </SectionComponent>
    <SectionComponent
      :backgroundColor="'#ede635'"
      minHeight="150px"
      v-show="!$store.state.loading"
    >
      <div class="row">
        <div
          class="col-md-6 my-md-0 my-3 d-flex justify-content-center align-items-center"
        >
          <h2>BECOME A MEMBER & GET 15% OFF</h2>
        </div>
        <div
          class="col-md-6 my-md-0 my-3 d-flex justify-content-center align-items-center"
        >
          <BlackButton text="SIGN UP FOR FREE" RouterUrl="/sign-up" />
        </div>
      </div>
    </SectionComponent>
  </div>
</template>

<script>
import SectionComponent from "@/components/SectionComponent.vue";
import BlackButton from "@/components/Elements/Buttons/BlackButton.vue";
import WhiteButton from "@/components/Elements/Buttons/WhiteButton.vue";
import SwiperComponent from "@/components/Elements/Products/SwiperComponent.vue";

export default {
  name: "home-view",
  data() {
    return {
      image1: require("@/assets/Images/Header.jpg"),
      image2: require("@/assets/Images/Jewelry.jpg"),
      image3: require("@/assets/Images/NewCollection.jpg"),
    };
  },

  components: {
    SectionComponent,
    BlackButton,
    WhiteButton,
    SwiperComponent,
  },
};
</script>

<style scoped>
.spacing {
  min-height: 500px;
}

@media (max-width: 767.98px) {
  .spacing {
    min-height: 150px;
  }
}
</style>
