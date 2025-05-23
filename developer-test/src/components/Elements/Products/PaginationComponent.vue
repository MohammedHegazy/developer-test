<template>
  <div class="product-list-container">
    <div class="row w-100">
      <div
        class="col-6 col-sm-4 col-md-3 col-lg-2 d-flex justify-content-center align-items-center"
        v-for="product in paginatedProducts"
        :key="product.id"
      >
        <CardComponent
          :id="product.id"
          :image="product.image"
          :title="product.title"
          :price="product.price"
          :OldPrice="product.OldPrice"
        />
      </div>
    </div>

    <div class="pagination-controls mt-4">
      <div class="d-flex justify-content-center align-items-center mb-2">
        <button
          class="me-2"
          :disabled="currentPage === 1"
          @click="changePage(currentPage - 1)"
        >
          Prev
        </button>
        <button
          :disabled="currentPage === totalPages"
          @click="changePage(currentPage + 1)"
        >
          Next
        </button>
      </div>
      <p>Page {{ currentPage }} of {{ totalPages }}</p>
    </div>
  </div>
</template>

<script>
import CardComponent from "./CardComponent.vue";

export default {
  name: "ProductList",
  components: {
    CardComponent,
  },
  props: {
    products: {
      type: Array,
      required: true,
    },
    perPage: {
      type: Number,
      default: 8,
    },
  },
  data() {
    return {
      currentPage: 1,
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.products.length / this.perPage);
    },
    paginatedProducts() {
      const start = (this.currentPage - 1) * this.perPage;
      return this.products.slice(start, start + this.perPage);
    },
  },
  methods: {
    changePage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;

        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
    },
  },
  watch: {
    products() {
      this.currentPage = 1;
    },
  },
};
</script>

<style scoped>
.pagination-controls {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: var(--font-family-regular);
}

.pagination-controls button {
  background-color: var(--primary-color);
  color: var(--secondary-color);
  border: 2px solid var(--secondary-color);
  font-family: var(--font-family-medium);
  padding: 0.5rem 1.25rem;
  margin: 0 0.5rem;
  border-radius: 30px;
  transition: all 0.3s ease;
}

.pagination-controls button:hover:not(:disabled) {
  background-color: var(--secondary-color);
  color: var(--primary-color);
}

.pagination-controls button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
  border-color: var(--secondary-color);
  background-color: var(--primary-color);
  color: var(--secondary-color);
}

.pagination-controls p {
  margin-top: 1rem;
  font-family: var(--font-family-light);
  color: var(--primary-text);
}
</style>
