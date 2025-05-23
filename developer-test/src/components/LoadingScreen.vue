<template>
  <div class="loading-screen" v-show="$store.state.loading">
    <div class="loading-circle"></div>
  </div>
</template>

<script>
export default {
  name: "loading-screen",
};
</script>

<style scoped>
.loading-screen {
  position: fixed;
  top: 0;
  left: 0;
  height: 100svh;
  width: 100svw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  backdrop-filter: blur(10px);
  z-index: 100000000000;
}
.loading-circle {
  height: 200px;
  width: 200px;
  background: linear-gradient(white, white) padding-box,
    linear-gradient(
        to right,
        var(--special-section-color),
        var(--secondary-color)
      )
      border-box;
  border-radius: 50em;
  border: 10px solid transparent;
  animation: rotation360 1.5s infinite;
}

@keyframes rotation360 {
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
}
</style>
