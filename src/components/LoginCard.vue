<template>
  <div
    class="flex max-w-lg lg:max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden lg:max-w-4xl"
  >
    <div
      class="hidden md:block md:w-1/2 bg-cover"
      style="background-image:url('https://images.unsplash.com/photo-1602610411365-76e8c2a88e18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=333&q=80')"
    ></div>

    <div class="w-full py-8 px-6 md:px-8 md:w-1/2">
      <h2 class="text-2xl font-semibold text-gray-700 text-center">
        Brand
      </h2>

      <p class="text-xl text-gray-600 text-center">Welcome back!</p>

      <a
        href="#"
        class="flex items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100"
      >
        <div class="px-4 py-3">
          <icon-google />
        </div>

        <span class="px-4 py-3 w-5/6 text-center text-gray-600 font-bold"
          >Sign in with Google</span
        >
      </a>

      <div class="mt-4 flex items-center justify-between">
        <span class="border-b w-1/5 lg:w-1/4"></span>

        <a
          href="#"
          class="text-xs text-center text-gray-500 uppercase hover:underline"
          >or login with email</a
        >

        <span class="border-b w-1/5 lg:w-1/4"></span>
      </div>

      <div class="mt-4">
        <label
          class="block text-gray-600 text-sm font-medium mb-2"
          for="LoggingEmailAddress"
          >Email Address</label
        >
        <input
          id="LoggingEmailAddress"
          class="bg-white text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:border-blue-500 focus:outline-none focus:shadow-outline"
          type="email"
        />
      </div>

      <div class="mt-4">
        <div class="flex justify-between">
          <label
            class="block text-gray-600 text-sm font-medium mb-2"
            for="loggingPassword"
            >Password</label
          >
          <a href="#" class="text-xs text-gray-500 hover:underline"
            >Forget Password?</a
          >
        </div>

        <input
          id="loggingPassword"
          class="bg-white text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:border-blue-500 focus:outline-none focus:shadow-outline"
          type="password"
        />
      </div>

      <div class="mt-8">
        <button
          class="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
        >
          Login
        </button>
      </div>

      <div class="mt-4 flex items-center justify-between">
        <span class="border-b w-1/5 md:w-1/4"></span>

        <a href="#" class="text-xs text-gray-500 uppercase hover:underline"
          >or sign up</a
        >

        <span class="border-b w-1/5 md:w-1/4"></span>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import IconGoogle from "@/components/icons/iconGoogle.vue";
export default {
  name: "login-card",
  components: { IconGoogle }
};
</script>
