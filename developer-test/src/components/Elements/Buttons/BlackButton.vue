<template>
  <router-link class="button-black" :to="RouterUrl">
    {{ text }}
  </router-link>
</template>

<script>
export default {
  name: "black-button",
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
.button-black {
  display: inline-block;
  color: var(--secondary-text);
  text-align: center;
  background: url(../../../assets/Icons/Buttons/Bottun.png) no-repeat center
    center;
  background-size: contain;
  text-decoration: none;

  min-width: 300px;

  font-weight: bold;
  font-size: 1.25rem;
  padding: 30px 100px 30px 0px;

  transition: transform 0.3s ease, box-shadow 0.3s ease, filter 0.3s ease;
}

.button-black:hover {
  transform: scale(1.05);
  filter: brightness(1.1);
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
}
</style>
