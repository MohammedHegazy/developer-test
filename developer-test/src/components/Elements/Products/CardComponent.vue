<template>
  <router-link
    :to="{ path: '/product', query: { id } }"
    class="product-link text-decoration-none"
  >
    <div class="product-card text-center h-100">
      <div class="img-wrapper shadow">
        <img :src="image" alt="Product Image" class="img-fluid" />
      </div>

      <div class="card-body px-2">
        <p class="card-title mb-1">{{ title }}</p>
        <p class="card-text mb-0">
          <span
            class="text-muted text-decoration-line-through me-2"
            v-if="OldPrice"
          >
            AED {{ OldPrice }}
          </span>
          <strong>AED {{ price }}</strong>
        </p>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "card-component",
  props: {
    id: {
      type: [String, Number],
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    price: {
      type: [String, Number],
      required: true,
    },
    OldPrice: {
      type: [String, Number],
      default: null,
    },
  },
};
</script>

<style scoped>
.product-link {
  display: block;
  color: var(--primary-text);
}

.product-card {
  min-width: 180px;
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  border: none;
  background-color: transparent;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.product-card:hover {
  transform: translateY(-6px) scale(1.03);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.img-wrapper {
  height: 200px;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: var(--primary-color);
  border-radius: 0.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.product-card:hover .img-wrapper {
  transform: scale(1.05);
}

.img-wrapper img {
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;
}

@media (max-width: 768px) {
  .product-card {
    min-width: 140px;
  }

  .img-wrapper {
    height: 160px;
    padding: 0.75rem;
  }
}

@media (max-width: 480px) {
  .product-card {
    min-width: 120px;
  }

  .img-wrapper {
    height: 140px;
    padding: 0.5rem;
  }

  .card-title {
    font-size: 0.9rem;
  }

  .card-text {
    font-size: 0.85rem;
  }
}
</style>
