<template>
  <SectionComponent>
    <div class="about-container container py-5">
      <h1 class="about-title mb-4">About Us</h1>

      <p class="about-intro mb-4">
        Welcome to our developer test e-commerce store! This website is built to
        showcase front-end development skills using Vue.js and Bootstrap.
      </p>

      <div class="row mb-5">
        <div class="col-md-6 mb-4">
          <h2 class="about-section-title h4">What We Offer</h2>
          <ul class="about-list list-unstyled ms-3">
            <li>• Men's Clothing</li>
            <li>• Women's Clothing</li>
            <li>• Electronics</li>
            <li>• Jewelry</li>
          </ul>
        </div>

        <div class="col-md-6 mb-4">
          <h2 class="about-section-title h4">Our Mission</h2>
          <p>
            Though this is a demo project, it's structured to reflect real-world
            e-commerce platforms. The focus is on responsive layout, modularity,
            and performance.
          </p>
        </div>
      </div>

      <div class="about-disclaimer p-4 rounded">
        <h2 class="h5 mb-2">Disclaimer</h2>
        <p class="mb-0">
          This website is for testing and demonstration purposes only. No actual
          purchases can be made.
        </p>
      </div>
    </div>
  </SectionComponent>
</template>

<script setup>
import SectionComponent from "@/components/SectionComponent.vue";
</script>

<style scoped>
.about-container {
  color: var(--primary-text);
  font-family: var(--font-family-regular);
}

.about-title {
  font-family: var(--font-family-bold);
}

.about-section-title {
  font-family: var(--font-family-medium);
}

.about-list {
  font-family: var(--font-family-regular);
}

.about-disclaimer {
  background-color: var(--special-section-color);
  color: var(--secondary-color);
  font-family: var(--font-family-light);
}
</style>
