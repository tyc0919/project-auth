<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { computed } from '@vue/reactivity';
import Footer from './components/Footer.vue'
import { usePageStore } from './stores/page';

let store = usePageStore()


</script>

<template>
  <!-- ====== Navbar Section Start -->
  <div
      class="
        ud-header
        bg-transparent
        absolute
        top-0
        left-0
        z-40
        w-full
        flex
        items-center
      "
    >
      <div class="container">
        <div class="flex -mx-4 items-center justify-between relative">
          <div class="px-4 w-60 max-w-full">
            <a href="index.html" class="navbar-logo w-full block py-5">
              <img
                src="/src/assets/images/logo/logo-white.svg"
                alt="logo"
                class="w-full header-logo"
              />
            </a>
          </div>
          <div class="flex px-4 justify-between items-center w-full">
            <div>
              <button
                id="navbarToggler"
                class="
                  block
                  absolute
                  right-4
                  top-1/2
                  -translate-y-1/2
                  hidden
                  focus:ring-2
                  ring-primary
                  px-3
                  py-[6px]
                  rounded-lg
                "
              >
                <span
                  class="relative w-[30px] h-[2px] my-[6px] block bg-white"
                ></span>
                <span
                  class="relative w-[30px] h-[2px] my-[6px] block bg-white"
                ></span>
                <span
                  class="relative w-[30px] h-[2px] my-[6px] block bg-white"
                ></span>
              </button>

            </div>
            <div class="sm:flex justify-end lg:pr-0">
            <router-link class="
                  text-base
                  font-medium
                  text-white
                  hover:opacity-70
                  py-3
                  px-7
                  mr-5
                  loginBtn
            " to="/signin">
            登入
            </router-link>

            <router-link to="/signup" class="
            text-base
            font-medium
            text-white
            bg-white bg-opacity-20
            rounded-lg
            py-3
            px-6
            hover:bg-opacity-100 hover:text-dark
            signUpBtn
            duration-300
            ease-in-out
            ">
              註冊
            </router-link>
          </div>
          </div>
        </div>
      </div>
    </div>
  <router-view></router-view>
  <!-- ====== Navbar Section End -->

  <Footer></Footer>
</template>

<style scoped>
</style>
