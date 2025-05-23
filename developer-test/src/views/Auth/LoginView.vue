<template>
  <div class="login-container animate-fade-in">
    <div class="animated-background"></div>
    <div class="login-box card shadow p-4">
      <div class="basket-icon text-center mb-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          fill="currentColor"
          class="bi bi-basket"
          viewBox="0 0 16 16"
        >
          <path
            d="M2.5 1a.5.5 0 0 1 .5.5V2h10v-.5a.5.5 0 0 1 1 0V2h.5A1.5 1.5 0 0 1 16 3.5V5a.5.5 0 0 1-.5.5h-.614l-1.431 6.435A2 2 0 0 1 11.514 14H4.486a2 2 0 0 1-1.941-2.065L1.114 5.5H.5A.5.5 0 0 1 0 5V3.5A1.5 1.5 0 0 1 1.5 2H2v-.5a.5.5 0 0 1 .5-.5zM1 3.5V4h14v-.5a.5.5 0 0 0-.5-.5H13v.5a.5.5 0 0 1-1 0V3H4v.5a.5.5 0 0 1-1 0V3H1.5a.5.5 0 0 0-.5.5zM2.118 5l1.3 5.85A1 1 0 0 0 4.486 12h7.028a1 1 0 0 0 .987-.85L13.882 5H2.118z"
          />
        </svg>
      </div>
      <h2 class="title text-center mb-4">Login</h2>
      <form @submit.prevent="handleLogin">
        <div class="form-group mb-3">
          <label for="username" class="form-label">Username</label>
          <input
            type="text"
            id="username"
            v-model="username"
            class="form-control"
            required
          />
        </div>
        <div class="form-group mb-3">
          <label for="password" class="form-label">Password</label>
          <input
            type="password"
            id="password"
            v-model="password"
            class="form-control"
            required
          />
        </div>
        <button type="submit" class="btn w-100 login-button">Login</button>
      </form>
      <p class="register-link text-center mt-3">
        Don't have an account?
        <router-link to="/register">Register here</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import store from "@/store";
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    async handleLogin() {
      const isValid = await store.dispatch("checkEmptyFields", {
        username: this.username,
        password: this.password,
      });

      if (!isValid) return;

      await store.dispatch("AuthSubmit", {
        api: "auth/login",
        dataObj: {
          username: this.username,
          password: this.password,
        },
      });
    },
  },
};
</script>
