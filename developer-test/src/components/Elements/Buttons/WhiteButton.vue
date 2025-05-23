<template>
  <router-link class="white-button" :to="RouterUrl">
    {{ text }}
  </router-link>
</template>

<script>
export default {
  name: "white-button",
  props: {
    RouterUrl: {
      type: String,
      default: "/products",
    },
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.white-button {
  display: inline-block;
  color: var(--primary-text);
  text-align: center;
  background: url(../../../assets/Icons/Buttons/Bottun\ White.png) no-repeat
    center center;
  background-size: contain;
  text-decoration: none;

  min-width: 300px;

  font-weight: bold;
  font-size: 1.25rem;
  padding: 30px 100px 30px 0px;

  transition: transform 0.3s ease, box-shadow 0.3s ease, filter 0.3s ease;
}

.white-button:hover {
  transform: scale(1.05);
  filter: brightness(1.1);
  box-shadow: 10px 10px 5px 0px rgba(255, 255, 255, 0.75);
  -webkit-box-shadow: 10px 10px 5px 0px rgba(255, 255, 255, 0.75);
  -moz-box-shadow: 10px 10px 5px 0px rgba(255, 255, 255, 0.75);
}
</style>
