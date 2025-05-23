import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import ProductsViewVue from "@/views/Products/ProductsView.vue";
import ProductViewVue from "@/views/Products/ProductView.vue";
import CartViewVue from "@/views/Cart/CartView.vue";
import FavoriteViewVue from "@/views/Favorite/FavoriteView.vue";
import LoginViewVue from "@/views/Auth/LoginView.vue";
import RegisterViewVue from "@/views/Auth/RegisterView.vue";
import AboutusViewVue from "@/views/AboutusView.vue";
import MediacenterViewVue from "@/views/MediacenterView.vue";
import ContactusViewVue from "@/views/ContactusView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/products",
    name: "ProductsViewVue",
    component: ProductsViewVue,
  },
  {
    path: "/product",
    name: "ProductViewVue",
    component: ProductViewVue,
  },
  {
    path: "/cart",
    name: "CartViewVue",
    component: CartViewVue,
  },
  {
    path: "/favorite",
    name: "FavoriteViewVue",
    component: FavoriteViewVue,
  },
  {
    path: "/login",
    name: "LoginViewVue",
    component: LoginViewVue,
  },
  {
    path: "/register",
    name: "RegisterViewVue",
    component: RegisterViewVue,
  },
  {
    path: "/about",
    name: "AboutusViewVue",
    component: AboutusViewVue,
  },
  {
    path: "/media",
    name: "MediacenterViewVue",
    component: MediacenterViewVue,
  },
  {
    path: "/contact",
    name: "ContactusViewVue",
    component: ContactusViewVue,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
