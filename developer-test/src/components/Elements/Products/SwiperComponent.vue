<template>
  <div class="swiper-component py-5 animate-fade-in-up" ref="swiperRef">
    <h2 class="fw-bold text-uppercase mb-4">{{ title }}</h2>

    <div
      :id="carouselId"
      class="carousel slide position-relative"
      data-bs-ride="carousel"
    >
      <!-- Carousel Items -->
      <div class="carousel-inner d-flex">
        <div
          class="carousel-item"
          :class="{ active: i === 0 }"
          v-for="(chunk, i) in chunkedItems"
          :key="i"
        >
          <div class="d-flex justify-content-start">
            <div class="card-wrapper" v-for="(item, j) in chunk" :key="j">
              <CardComponent
                :id="item.id"
                :title="item.title"
                :image="item.image"
                :price="item.price"
                :OldPrice="item.OldPrice"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Arrows -->
      <button
        class="carousel-control-prev custom-arrow"
        type="button"
        :data-bs-target="'#' + carouselId"
        data-bs-slide="prev"
      >
        <span class="arrow-label">‹</span>
      </button>
      <button
        class="carousel-control-next custom-arrow"
        type="button"
        :data-bs-target="'#' + carouselId"
        data-bs-slide="next"
      >
        <span class="arrow-label">›</span>
      </button>

      <!-- Indicators -->
      <div
        class="carousel-indicators mt-4 position-static justify-content-center"
      >
        <button
          v-for="(chunk, i) in chunkedItems"
          :key="'indicator-' + i"
          type="button"
          :data-bs-target="'#' + carouselId"
          :data-bs-slide-to="i"
          :class="{ active: i === 0 }"
          :aria-current="i === 0 ? 'true' : undefined"
          :aria-label="'Slide ' + (i + 1)"
          class="dash-indicator"
        ></button>
      </div>
    </div>
  </div>
</template>

<script>
import CardComponent from "./CardComponent.vue";
import { onMounted, ref } from "vue";

export default {
  name: "swiper-component",
  components: {
    CardComponent,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
    itemsPerSlide: {
      type: Number,
      default: 4,
    },
  },
  data() {
    return {
      responsiveItemsPerSlide: this.itemsPerSlide,
    };
  },
  computed: {
    chunkedItems() {
      const chunks = [];
      for (
        let i = 0;
        i < this.items.length;
        i += this.responsiveItemsPerSlide
      ) {
        chunks.push(this.items.slice(i, i + this.responsiveItemsPerSlide));
      }
      return chunks;
    },
    carouselId() {
      return `carousel-${this.title.replace(/\s+/g, "-").toLowerCase()}`;
    },
  },
  mounted() {
    this.updateItemsPerSlide();
    window.addEventListener("resize", this.updateItemsPerSlide);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.updateItemsPerSlide);
  },
  methods: {
    updateItemsPerSlide() {
      const width = window.innerWidth;
      if (width >= 1200) {
        this.responsiveItemsPerSlide = 4;
      } else if (width >= 992) {
        this.responsiveItemsPerSlide = 3;
      } else if (width >= 768) {
        this.responsiveItemsPerSlide = 2;
      } else {
        this.responsiveItemsPerSlide = 1;
      }
    },
  },
  setup() {
    const swiperRef = ref(null);

    onMounted(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-visible");
            observer.unobserve(entry.target);
          }
        },
        {
          threshold: 0.1,
        }
      );

      if (swiperRef.value) {
        observer.observe(swiperRef.value);
      }
    });

    return { swiperRef };
  },
};
</script>

<style scoped>
.carousel-inner {
  overflow: hidden !important;
}

.card-wrapper {
  padding: 1rem;
  flex: 1;
}

.carousel-indicators .dash-indicator {
  width: 30px;
  height: 4px;
  background-color: var(--secondary-color);
  border: none;
  margin: 0 6px;
  opacity: 0.5;
  transition: opacity 0.3s, transform 0.3s;
}

.carousel-indicators .dash-indicator.active {
  opacity: 1;
  transform: scaleX(1.2);
}

.custom-arrow {
  background-color: var(--primary-color);
  border: 1px solid var(--secondary-color);
  border-radius: 4px;
  width: 40px;
  height: 40px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 2;
  cursor: pointer;
  transition: all 0.3s ease;
}

.custom-arrow:hover {
  background-color: var(--secondary-color);
  color: var(--primary-color);
}

.carousel-control-prev.custom-arrow {
  left: -50px;
}

.carousel-control-next.custom-arrow {
  right: -50px;
}

.arrow-label {
  font-size: 20px;
  font-weight: bold;
  color: var(--secondary-color);
}

.custom-arrow:hover .arrow-label {
  color: var(--primary-color);
}

@media (max-width: 1199.98px) {
  .carousel-control-prev.custom-arrow {
    left: -30px;
  }

  .carousel-control-next.custom-arrow {
    right: -30px;
  }
}

@media (max-width: 991.98px) {
  .custom-arrow {
    width: 32px;
    height: 32px;
  }

  .carousel-control-prev.custom-arrow {
    left: -20px;
  }

  .carousel-control-next.custom-arrow {
    right: -20px;
  }

  .arrow-label {
    font-size: 18px;
  }
}

@media (max-width: 767.98px) {
  .custom-arrow {
    width: 28px;
    height: 28px;
  }

  .carousel-control-prev.custom-arrow {
    left: 8px;
  }

  .carousel-control-next.custom-arrow {
    right: 8px;
  }

  .arrow-label {
    font-size: 16px;
  }
}
</style>
