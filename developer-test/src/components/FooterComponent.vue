<template>
  <footer class="bg-black text-white pt-5 pb-3 border-top border-white">
    <div class="container">
      <div class="row text-center text-md-start">
        <!-- Logo + Social -->
        <div class="col-md-3 mb-4">
          <img
            src="../assets/Logos/DEVELOPER TEST - Logo.png"
            alt="Logo"
            style="max-width: 180px"
          />
          <div
            class="d-flex justify-content-center justify-content-md-start gap-3"
          >
            <a
              class="footer-social-media"
              href="https://www.facebook.com/"
              target="_blank"
            >
              <img
                src="../assets/Icons/Socialmedia/facebook_Gold.png"
                alt="Facebook"
                class="footer-icon"
              />
            </a>
            <a
              class="footer-social-media"
              href="https://www.youtube.com/"
              target="_blank"
            >
              <img
                src="../assets/Icons/Socialmedia/Youtube - Gold.png"
                alt="YouTube"
                class="footer-icon"
              />
            </a>
            <a
              class="footer-social-media"
              href="https://www.instagram.com/"
              target="_blank"
            >
              <img
                src="../assets/Icons/Socialmedia/instagram_Gold.png"
                alt="Instagram"
                class="footer-icon"
              />
            </a>
            <a
              class="footer-social-media"
              href="https://x.com/"
              target="_blank"
            >
              <img
                src="../assets/Icons/Socialmedia/Twitter - Gold.png"
                alt="X"
                class="footer-icon"
              />
            </a>
          </div>
        </div>

        <!-- Menu Links -->
        <div class="col-md-3 mb-4">
          <h4 class="fw-bold">Useful Links</h4>
          <ul class="list-unstyled">
            <li>
              <router-link to="/" class="footer-link">Home</router-link>
            </li>
            <li>
              <router-link to="/about" class="footer-link"
                >About us</router-link
              >
            </li>
            <li>
              <router-link to="/media" class="footer-link"
                >Media center</router-link
              >
            </li>
            <li>
              <router-link to="/contact" class="footer-link"
                >Contact Us</router-link
              >
            </li>
          </ul>
        </div>

        <!-- Categories -->
        <div class="col-md-3 mb-4">
          <h4 class="fw-bold">Categories</h4>
          <ul class="list-unstyled">
            <li v-for="(item, index) in $store.state.Categories" :key="index">
              <router-link
                :to="'/category?category=' + item"
                class="footer-link"
                >{{ item }}</router-link
              >
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div class="col-md-3 mb-4">
          <h4 class="fw-bold">Contact us</h4>
          <p class="mb-1">+971 00 000 0000</p>
          <p class="mb-1">+971 0 000 0000</p>
          <p class="mb-0">info@sample.com</p>
        </div>
      </div>

      <hr class="border-white" />
      <p class="text-center m-0">© Developer Test 2024. All Rights Reserved.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "footer-component",
};
</script>
