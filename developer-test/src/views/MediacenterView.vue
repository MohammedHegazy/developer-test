<template>
  <SectionComponent>
    <div class="media-container container py-5">
      <h1 class="media-title mb-4">Media Center</h1>

      <p class="media-intro mb-4">
        Stay updated with the latest news, promotions, and updates from our demo
        e-commerce store. This Media Center showcases how you might present blog
        posts, press releases, or featured announcements in a real application.
      </p>

      <div class="row gy-4">
        <div class="col-md-6">
          <div class="media-card p-4 rounded shadow-sm h-100">
            <h2 class="h5 media-card-title mb-2">
              Latest Launch: New Jewelry Line
            </h2>
            <p class="mb-0">
              Discover our new jewelry collection, designed to reflect both
              elegance and everyday wear. This is part of our continued effort
              to simulate real-life product rollouts.
            </p>
          </div>
        </div>
        <div class="col-md-6">
          <div class="media-card p-4 rounded shadow-sm h-100">
            <h2 class="h5 media-card-title mb-2">
              Tech Spotlight: Trending Electronics
            </h2>
            <p class="mb-0">
              Explore the top-rated electronic products in our demo catalog.
              This section highlights simulated product trends and user interest
              metrics.
            </p>
          </div>
        </div>
        <div class="col-md-6">
          <div class="media-card p-4 rounded shadow-sm h-100">
            <h2 class="h5 media-card-title mb-2">
              Event Recap: Virtual Shopping Week
            </h2>
            <p class="mb-0">
              A look back at our mock virtual shopping event – featuring themed
              discounts and interactive product showcases, all for demo
              purposes.
            </p>
          </div>
        </div>
        <div class="col-md-6">
          <div class="media-card p-4 rounded shadow-sm h-100">
            <h2 class="h5 media-card-title mb-2">Behind the Scenes</h2>
            <p class="mb-0">
              Learn about the design and development of this Vue.js + Bootstrap
              project. From layout decisions to UX principles, it's all here.
            </p>
          </div>
        </div>
      </div>
    </div>
  </SectionComponent>
</template>

<script setup>
import SectionComponent from "@/components/SectionComponent.vue";
</script>

<style scoped>
.media-container {
  color: var(--primary-text);
  font-family: var(--font-family-regular);
}

.media-title {
  font-family: var(--font-family-bold);
}

.media-intro {
  font-family: var(--font-family-light);
}

.media-card {
  background-color: var(--primary-color);
  color: var(--primary-text);
  font-family: var(--font-family-regular);
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.media-card-title {
  font-family: var(--font-family-medium);
}
</style>
