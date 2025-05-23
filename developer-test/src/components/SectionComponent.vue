<template>
  <section
    ref="sectionRef"
    class="dynamic-section d-flex align-items-center position-relative text-section animate-fade-in-up"
    :style="{
      backgroundColor,
      minHeight,
      backgroundImage: 'url(' + image + ')',
    }"
  >
    <div class="overlay position-absolute top-0 start-0 w-100 h-100"></div>
    <div class="container position-relative">
      <div class="row">
        <div class="col-md-6" v-if="image">
          <slot></slot>
        </div>
        <div class="col-md-12" v-else>
          <slot></slot>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { onMounted, ref } from "vue";

export default {
  name: "SectionComponent",
  props: {
    backgroundColor: {
      type: String,
      default: "#f9f9f2",
    },
    image: {
      type: String,
    },
    minHeight: {
      type: String,
    },
  },
  setup() {
    const sectionRef = ref(null);

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

      if (sectionRef.value) {
        observer.observe(sectionRef.value);
      }
    });

    return { sectionRef };
  },
};
</script>

<style scoped>
.dynamic-section {
  min-height: 700px;
  padding: 4rem 0;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.overlay {
  pointer-events: none;
  z-index: 1;
}

.container {
  z-index: 2;
  position: relative;
}

@media (max-width: 767.98px) {
  .dynamic-section {
    padding: 3rem 1rem;
    text-align: center;
    min-height: fit-content;
    padding: 10px 0;
  }
  .overlay {
    background: rgba(255, 255, 255, 0.2);
  }
}
</style>
