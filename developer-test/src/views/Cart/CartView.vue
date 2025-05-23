<template>
  <SectionComponent background-color="#ffffff">
    <div class="container my-5">
      <h2 class="mb-4">Your Cart</h2>
      <table
        class="table table-bordered table-striped text-center"
        v-if="cart.length > 0"
      >
        <thead class="table-dark">
          <tr>
            <th>Image</th>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in cart" :key="item.id">
            <td><img :src="item.image" alt="product" height="50" /></td>
            <td>{{ item.title }}</td>
            <td>AED {{ item.price.toFixed(2) }}</td>
            <td>{{ item.quantity }}</td>
            <td>AED {{ (item.price * item.quantity).toFixed(2) }}</td>
            <td>
              <button
                class="btn btn-sm btn-success me-1"
                @click="addToCart(item)"
              >
                +
              </button>
              <button
                class="btn btn-sm btn-warning me-1"
                @click="removeOne(item.id)"
              >
                -
              </button>
              <button
                class="btn btn-sm btn-danger"
                @click="removeFromCart(item.id)"
              >
                Remove
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <div v-else>
        <p>Your cart is empty.</p>
      </div>

      <div class="text-end mt-3" v-if="cart.length > 0">
        <button class="btn btn-outline-danger" @click="emptyCart">
          Empty Cart
        </button>
        <button class="btn btn-outline-success mx-2">Check out</button>
      </div>
    </div>
  </SectionComponent>
</template>

<script setup>
import { computed } from "vue";
import store from "@/store";
import SectionComponent from "@/components/SectionComponent.vue";

const cart = computed(() => store.state.cart);

const addToCart = (item) => {
  store.dispatch("AddToCart", item);
};

const removeFromCart = (id) => {
  store.dispatch("RemoveFromCart", id);
};

const removeOne = (id) => {
  store.dispatch("RemoveOneFromCart", id);
};

const emptyCart = () => {
  store.dispatch("EmptyCart");
};
</script>
