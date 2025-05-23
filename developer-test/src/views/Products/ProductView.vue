<template>
  <SectionComponent backgroundColor="#ffffff">
    <div class="container my-4" v-if="product">
      <div class="row align-items-center product-wrapper">
        <!-- Image Section -->
        <div
          class="col-md-6 mb-3 mb-md-0 image-container"
          @mousemove="handleMouseMove"
          @mouseleave="resetZoom"
          ref="imageContainer"
        >
          <img
            :src="product.image"
            :alt="product.title"
            class="product-image w-100"
            ref="productImage"
          />
        </div>

        <!-- Content Section -->
        <div class="col-md-6">
          <div class="card product-card text-center p-3">
            <h5 class="product-title">{{ product.title }}</h5>
            <p class="product-category">{{ product.category }}</p>
            <p class="product-description">{{ product.description }}</p>
            <p class="product-price">AED {{ product.price.toFixed(2) }}</p>
            <div class="product-rating">
              ⭐ {{ product.rating.rate }} ({{ product.rating.count }} reviews)
            </div>

            <button class="btn btn-primary mt-3" @click="addToCart">
              Add to Cart
            </button>
            <button
              class="btn mt-2 favorite-button"
              @click="toggleFavorite"
              :class="{ active: isFavorite }"
              :aria-label="
                isFavorite ? 'Remove from favorites' : 'Add to favorites'
              "
            >
              <img :src="heartIcon" alt="Favorite" class="heart-icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </SectionComponent>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import SectionComponent from "@/components/SectionComponent.vue";
import store from "@/store";
import heartIconImage from "@/assets/Icons/Icons/heart_11613265.png"; // Adjust path as needed

const product = ref(null);
const imageContainer = ref(null);
const productImage = ref(null);

onMounted(async () => {
  store.commit("GetKeyValue", { key: "id" });
  const data = await store.dispatch("GetData", {
    api: "products/" + store.state.keyValue,
    trigger: [],
  });
  product.value = data;
});

// Zoom
const handleMouseMove = (event) => {
  const container = imageContainer.value;
  const image = productImage.value;
  const rect = container.getBoundingClientRect();
  const x = ((event.clientX - rect.left) / rect.width) * 100;
  const y = ((event.clientY - rect.top) / rect.height) * 100;
  image.style.transformOrigin = `${x}% ${y}%`;
  image.style.transform = "scale(2)";
};

const resetZoom = () => {
  const image = productImage.value;
  image.style.transform = "scale(1)";
  image.style.transformOrigin = "center center";
};

// Cart
const addToCart = () => {
  if (product.value) {
    store.dispatch("AddToCart", product.value);
  }
};

// Favorite
const isFavorite = computed(() =>
  store.state.favorite.some((item) => item.id === product.value?.id)
);
const heartIcon = computed(() => heartIconImage);

const toggleFavorite = () => {
  if (product.value) {
    store.dispatch("ToggleFavorite", product.value);
  }
};
</script>

<style scoped>
.product-wrapper {
  background-color: var(--primary-color);
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.product-card {
  background-color: var(--primary-color);
  color: var(--primary-text);
  font-family: var(--font-family-regular);
  border: none;
}

.image-container {
  overflow: hidden;
  border-radius: 12px 0 0 12px;
  height: 100%;
  max-height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f8f8f8;
}

.product-image {
  max-width: 100%;
  max-height: 400px;
  transition: transform 0.2s ease, transform-origin 0.2s ease;
  object-fit: contain;
  display: block;
}

.product-title {
  font-family: var(--font-family-bold);
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
}

.product-category {
  font-family: var(--font-family-medium);
  font-size: 0.95rem;
  color: var(--secondary-color);
  margin-bottom: 0.5rem;
}

.product-description {
  font-family: var(--font-family-light);
  font-size: 1rem;
  margin-bottom: 1rem;
}

.product-price {
  font-family: var(--font-family-bold);
  font-size: 1.2rem;
  color: var(--special-section-color);
  margin-bottom: 0.5rem;
}

.product-rating {
  font-family: var(--font-family-medium);
  font-size: 0.9rem;
  color: var(--secondary-color);
}

.btn-primary {
  background-color: var(--special-section-color);
  border: none;
  padding: 0.5rem 1.25rem;
  border-radius: 6px;
  font-weight: 600;
}

.btn-primary:hover {
  background-color: var(--secondary-color);
}

.favorite-button {
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  transition: transform 0.2s ease, background-color 0.2s ease;
  border-radius: 6px;
  background-color: transparent;
}

.favorite-button:hover {
  transform: scale(1.1);
}

.favorite-button.active {
  background-color: #e63946;
}

.heart-icon {
  width: 28px;
  height: 28px;
  filter: grayscale(100%) brightness(1);
  transition: filter 0.2s ease;
}

.favorite-button:hover .heart-icon,
.heart-icon.active {
  filter: none;
}
</style>
