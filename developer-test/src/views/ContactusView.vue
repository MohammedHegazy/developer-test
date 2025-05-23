<template>
  <SectionComponent>
    <div class="contact-container container py-5">
      <h1 class="contact-title mb-4">Contact Us</h1>

      <div class="row g-4">
        <!-- Contact Form -->
        <div class="col-lg-6">
          <form @submit.prevent="handleSubmit">
            <div class="mb-3">
              <input
                v-model="form.name"
                type="text"
                class="form-control contact-input"
                placeholder="Your Name"
              />
            </div>

            <div class="mb-3">
              <input
                v-model="form.email"
                type="email"
                class="form-control contact-input"
                placeholder="Your Email"
              />
            </div>

            <div class="mb-3">
              <input
                v-model="form.subject"
                type="text"
                class="form-control contact-input"
                placeholder="Subject"
              />
            </div>

            <div class="mb-3">
              <textarea
                v-model="form.message"
                rows="5"
                class="form-control contact-textarea"
                placeholder="Message"
              ></textarea>
            </div>

            <button type="submit" class="btn btn-dark px-4">
              Send Message
            </button>
          </form>
        </div>

        <!-- Google Map -->
        <div class="col-lg-6">
          <div class="map-container rounded overflow-hidden shadow-sm">
            <iframe
              width="100%"
              height="100%"
              style="border: 0"
              loading="lazy"
              allowfullscreen
              referrerpolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d832715.9016953911!2d36.02425405000001!3d33.5121878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1518e72d44d06a6b%3A0xcff0b4b06a7c59a0!2sDamascus%2C%20Syria!5e0!3m2!1sen!2sus!4v1716574000000"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </SectionComponent>
</template>

<script setup>
import { reactive } from "vue";
import { useStore } from "vuex";
import SectionComponent from "@/components/SectionComponent.vue";

const store = useStore();

const form = reactive({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const handleSubmit = async () => {
  const valid = await store.dispatch("checkEmptyFields", { ...form });
  if (!valid) return;

  store.commit("ShowHideErrPopup", {
    errMessage: "Message sent successfully!",
    success: 1,
  });

  form.name = "";
  form.email = "";
  form.subject = "";
  form.message = "";
};
</script>

<style scoped>
.contact-container {
  color: var(--primary-text);
  font-family: var(--font-family-regular);
}

.contact-title {
  font-family: var(--font-family-bold);
}

.contact-input,
.contact-textarea {
  font-family: var(--font-family-light);
  background-color: var(--primary-color);
  border: 1px solid rgba(0, 0, 0, 0.15);
  color: var(--primary-text);
}

.map-container {
  width: 100%;
  height: 100%;
  min-height: 400px;
}
</style>
