<template>
  <header class="fixed-top">
    <!-- Top Bar -->
    <div class="bg-white border-bottom py-2 px-4">
      <div
        class="container d-flex justify-content-between align-items-center flex-wrap"
      >
        <!-- Optional: Left side (you can leave this empty or add a logo, message, etc.) -->
        <div class="d-none d-lg-block"></div>

        <!-- Top links -->
        <div
          class="d-flex gap-3 flex-wrap justify-content-center justify-content-lg-end w-100 w-lg-auto mt-2 mt-lg-0"
        >
          <router-link to="/" class="text-decoration-none text-black-50"
            >Home</router-link
          >
          <router-link to="/about" class="text-decoration-none text-black-50"
            >About Us</router-link
          >
          <router-link to="/media" class="text-decoration-none text-black-50"
            >Media Center</router-link
          >
          <router-link to="/contact" class="text-decoration-none text-black-50"
            >Contact Us</router-link
          >
          <router-link to="/ar" class="text-decoration-none fw-bold text-dark"
            >AR</router-link
          >
        </div>
      </div>
    </div>

    <!-- Main Navbar -->
    <nav
      class="navbar navbar-expand-lg navbar-light bg-white shadow-sm px-4 py-3"
    >
      <div class="container-fluid">
        <!-- Logo -->
        <router-link to="/" class="navbar-brand d-flex align-items-center">
          <img src="/logo.png" alt="Logo" width="100" class="me-2" />
        </router-link>

        <!-- Toggle for mobile -->
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Navbar content -->
        <div class="collapse navbar-collapse" id="navbarContent">
          <!-- Category links -->
          <ul class="navbar-nav mx-auto mb-2 mb-lg-0 fw-semibold">
            <li
              class="nav-item mx-2"
              v-for="(item, index) in $store.state.Categories"
              :key="index"
            >
              <router-link
                class="nav-link"
                :to="'/products?category=' + item"
                >{{ item }}</router-link
              >
            </li>
          </ul>

          <!-- Search + Icons -->
          <div class="d-flex align-items-center gap-3">
            <!-- Search -->
            <div class="input-group bg-light rounded px-2">
              <input
                type="text"
                class="form-control border-0 bg-light"
                placeholder="Search"
                v-model="$store.state.SearchTearm"
              />
              <span
                class="input-group-text bg-light border-0 icon-click"
                @click="SearchItem()"
              >
                <img
                  src="../assets/Icons/Icons/Search Mouve.png"
                  alt="Search"
                  width="16"
                  height="16"
                />
              </span>
            </div>

            <!-- PNG Icons -->
            <div class="d-flex gap-3">
              <router-link to="/login">
                <img
                  src="../assets/Icons/Icons/Login.png"
                  alt="User"
                  width="20"
                  height="20"
                  class="icon-click"
              /></router-link>
              <router-link to="/favorite">
                <img
                  src="../assets/Icons/Icons/heart_11613265.png"
                  alt="Wishlist"
                  width="20"
                  height="20"
                  class="icon-click"
                />
              </router-link>
              <router-link to="/cart">
                <img
                  src="../assets/Icons/Icons/Cart.png"
                  alt="Cart"
                  width="20"
                  height="20"
                  class="icon-click"
                />
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import store from "@/store";
export default {
  name: "navbar-component",
  methods: {
    SearchItem() {
      store.commit("SearchByName");
    },
  },
};
</script>

<style scoped>
.nav-item .nav-link {
  text-transform: uppercase;
}
</style>
