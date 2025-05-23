<template>
  <div class="err-popup">
    <div class="errorPopUp" id="ErrPop" v-if="$store.state.visible">
      <div class="errorText" id="ErrText">
        <lottie-player
          v-if="$store.state.success == 0"
          src="https://lottie.host/9b50f67f-f10b-4c4e-b88f-e6f3ceb1e8cd/QrdcJ2mAeA.json"
          background="##FFFFFF"
          speed="1"
          style="width: 40px; height: 40px"
          loop
          autoplay
          direction="1"
          mode="normal"
        ></lottie-player>
        <lottie-player
          v-else
          src="https://lottie.host/ed967064-b8bd-4ab2-86ff-13a86e443f4e/ufQlVOpi5Y.json"
          background="##ffffff"
          speed="1"
          style="width: 40px; height: 40px"
          loop
          autoplay
          direction="1"
          mode="normal"
        ></lottie-player>
        {{ $store.state.errMessage }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "err-popup",
};
</script>

<style>
.errorPopUp {
  position: fixed;
  top: 10px;
  right: 10px;
  background-color: white;
  border-radius: 10px;
  color: black;
  font-weight: 700;
  z-index: 1;
  width: fit-content;
  height: fit-content;
  padding: 15px;
  z-index: 10000000000;
  transition: 0.5s ease-in-out;
}

.errorText {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
</style>
