import { createStore } from "vuex";
import axios from "axios";
import router from "@/router";

export default createStore({
  state: {
    server: "https://fakestoreapi.com/",
    data: [],
    ShownData: [],
    SpecialOffers: [],
    Categories: [],
    loading: 0,
    keyValue: "",
    cart: [],
    SearchTearm: "",
    visible: 0,
    success: 0,
    errMessage: "",
    favorite: [],
    token: "",
  },
  getters: {},
  mutations: {
    ShowHideErrPopup(state, { errMessage, success }) {
      state.visible = 1;
      state.errMessage = errMessage;
      state.success = success;
      setTimeout(() => {
        state.visible = 0;
        state.errMessage = "";
        state.success = 0;
      }, 3000);
    },
    FilterCategories(state) {
      const data = state.data;
      state.Categories = [...new Set(data.map((item) => item.category))];
    },
    GetSpecialOffers(state) {
      const data = state.data.slice(0, 6);
      state.SpecialOffers = data.map((item) => {
        return {
          id: item.id,
          title: item.title,
          price: item.price,
          description: item.description,
          category: item.category,
          image: item.image,
          rating: item.rating,
          OldPrice: Math.floor(item.price * (Math.random() * 10)),
        };
      });
    },
    GetKeyValue(state, { key }) {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const keyValue = urlParams.get(key);
      state.keyValue = keyValue;
    },
    FilterDataByKey(state, { key }) {
      state.loading = 1;
      if (!state.keyValue && !state.SearchTearm) {
        state.ShownData = state.data;
      } else if (!state.SearchTearm || state.keyValue) {
        state.ShownData = state.data.filter((item) => {
          return item[key] == state.keyValue;
        });
      }
      state.loading = 0;
    },
    SetCart(state, cart) {
      state.cart = cart;
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    LoadCartFromLocalStorage(state) {
      const cart = localStorage.getItem("cart");
      if (cart) {
        state.cart = JSON.parse(cart);
      }
    },
    SearchByName(state) {
      const searchTerm = state.SearchTearm.toLowerCase();
      state.ShownData = state.data.filter((item) =>
        item.title.toLowerCase().includes(searchTerm)
      );
      router.push("/products");
    },
    SetFavorite(state, favorite) {
      state.favorite = favorite;
      localStorage.setItem("favorite", JSON.stringify(favorite));
    },
    LoadFavoriteFromLocalStorage(state) {
      const favorite = localStorage.getItem("favorite");
      if (favorite) {
        state.favorite = JSON.parse(favorite);
      }
    },
  },
  actions: {
    async GetData({ state, commit }, { api, trigger }) {
      state.loading = 1;
      try {
        const response = await axios.get(state.server + api);
        if (api === "products") {
          state.data = response.data;
        }
        if (trigger.length > 0) {
          for (let key in trigger) {
            commit(trigger[key]);
          }
        }
        state.loading = 0;
        return response.data;
      } catch (error) {
        console.log(error);
      }
    },

    AddToCart({ state, commit }, product) {
      const cart = [...state.cart];
      const item = cart.find((i) => i.id === product.id);
      if (item) {
        item.quantity += 1;
      } else {
        cart.push({ ...product, quantity: 1 });
      }
      commit("SetCart", cart);
      commit("ShowHideErrPopup", {
        errMessage: "Added to cart!",
        success: 1,
      });
    },

    RemoveOneFromCart({ state, commit }, productId) {
      const cart = [...state.cart];
      const item = cart.find((i) => i.id === productId);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
          commit("SetCart", cart);
          commit("ShowHideErrPopup", {
            errMessage: "Reduced quantity by one.",
            success: 1,
          });
        } else {
          const filtered = cart.filter((i) => i.id !== productId);
          commit("SetCart", filtered);
          commit("ShowHideErrPopup", {
            errMessage: "Item removed from cart.",
            success: 1,
          });
        }
      }
    },

    RemoveFromCart({ state, commit }, productId) {
      const cart = state.cart.filter((item) => item.id !== productId);
      commit("SetCart", cart);
      commit("ShowHideErrPopup", {
        errMessage: "Item removed from cart.",
        success: 1,
      });
    },

    EmptyCart({ commit }) {
      commit("SetCart", []);
      commit("ShowHideErrPopup", {
        errMessage: "Cart emptied.",
        success: 1,
      });
    },

    LoadCart({ commit }) {
      commit("LoadCartFromLocalStorage");
    },

    ToggleFavorite({ state, commit }, product) {
      const favorite = [...state.favorite];
      const index = favorite.findIndex((item) => item.id === product.id);

      if (index === -1) {
        favorite.push(product);
        commit("SetFavorite", favorite);
        commit("ShowHideErrPopup", {
          errMessage: "Added to favorites!",
          success: 1,
        });
      } else {
        favorite.splice(index, 1);
        commit("SetFavorite", favorite);
        commit("ShowHideErrPopup", {
          errMessage: "Removed from favorites.",
          success: 1,
        });
      }
    },

    LoadFavorite({ commit }) {
      commit("LoadFavoriteFromLocalStorage");
    },

    checkEmptyFields({ commit }, payload) {
      const isEmpty = Object.values(payload).some((value) => !value);

      if (isEmpty) {
        commit("ShowHideErrPopup", {
          errMessage: "Please fill in all required fields.",
          success: 0,
        });
        return false;
      }

      return true;
    },

    async AuthSubmit({ state, commit }, { api, dataObj }) {
      try {
        state.loading = 1;

        const response = await axios.post(state.server + api, dataObj, {
          headers: {
            "Content-Type": "application/json",
          },
        });

        // ----- LOGIN -----
        if (api === "auth/login") {
          if (response.status === 200) {
            const token = response.data.token;

            localStorage.setItem("token", token);
            state.token = token;

            commit("ShowHideErrPopup", {
              errMessage: "Login successful!",
              success: 1,
            });
            router.push("/");
          }
        }

        // ----- REGISTER -----
        else if (api === "users") {
          if (response.status === 200) {
            commit("ShowHideErrPopup", {
              errMessage: "Registration successful!",
              success: 1,
            });
            router.push("/login");
          }
        }

        return response.data;
      } catch (error) {
        if (error.response && error.response.status == 401) {
          let errMsg = "Something went wrong.";
          if (api === "auth/login") {
            errMsg = "Wrong username or password.";
          } else if (api === "users") {
            errMsg = "Username or email is already taken.";
          }

          commit("ShowHideErrPopup", {
            errMessage: errMsg,
            success: 0,
          });
        } else {
          commit("ShowHideErrPopup", {
            errMessage: "Server error. Please try again later.",
            success: 0,
          });
        }
      } finally {
        state.loading = 0;
      }
    },
  },

  modules: {},
});
