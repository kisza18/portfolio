<template>
  <div class="w-full bg-light dark:bg-gray-900 fixed z-50">
    <div
      class="navbar flex items-center justify-between max-w-7xl mx-auto h-20 px-5 sm:px-10"
    >
      <div class="nav_logo">
        <h1
          class="pl-2 pr-3 pb-1 text-base font-semibold text-gray-600 dark:text-darkLight border-b-2 border-l-2 border-gray-600 dark:border-darkLight"
        >
          Szabi
        </h1>
      </div>
      <div class="nav_links flex items-center">
        <div class="nav-container">
          <ul
            class="items-center hidden sm:flex text-gray-600 dark:text-darkLight"
          >
            <li class="mr-7">
              <a
                class="py-4 text-base font-semibold hover:text-primary transition duration-500"
                href="#home"
                @click="clicked"
                >Home</a
              >
            </li>
            <li class="mr-7">
              <a
                class="py-4 text-base font-semibold hover:text-primary transition duration-500"
                href="#about"
                @click="clicked"
                >About</a
              >
            </li>
            <li class="mr-7">
              <a
                class="py-4 text-base font-semibold hover:text-primary transition duration-500"
                href="#portfolio"
                @click="clicked"
                >Portfolio</a
              >
            </li>
            <li class="mr-7">
              <a
                class="py-4 text-base font-semibold hover:text-primary transition duration-500"
                href="#contact"
                @click="clicked"
                >Contact</a
              >
            </li>
          </ul>
        </div>
        <div class="dark-switch">
          <button
            v-if="!dark"
            @click="toggleDarkMode"
            class="py-4 text-base font-semibold text-gray-800 dark:text-darkLight hover:text-primary transition duration-500 focus:outline-none"
            href=""
          >
            <i class="fal fa-moon"></i>
          </button>
          <button
            v-if="dark"
            @click="toggleDarkMode"
            class="py-4 text-base font-semibold text-gray-600 dark:text-darkLight hover:text-primary transition duration-500 focus:outline-none"
            href=""
          >
            <i class="fal fa-sun"></i>
          </button>
        </div>
        <div class="hamburger ml-5 w-2 sm:hidden">
          <button
            v-if="!hamburger"
            @click="toggleMenu"
            class="py-4 text-base font-semibold text-gray-800 dark:text-darkLight hover:text-primary transition duration-500 focus:outline-none"
          >
            <i class="fal fa-bars"></i>
          </button>
          <button
            v-if="hamburger"
            @click="toggleMenu"
            class="py-4 text-base font-semibold text-gray-800 dark:text-darkLight hover:text-primary transition duration-500 focus:outline-none"
          >
            <i class="fal fa-times"></i>
          </button>
        </div>
      </div>
    </div>
    <div v-if="hamburger" class="mobile-menu w-full bg-light dark:bg-gray-900">
      <div class="mobile-nav-list">
        <ul class="text-center pt-10 text-gray-600 dark:text-darkLight">
          <li class="p-5"><a href="#home" @click="clicked">Home</a></li>
          <li class="p-5">
            <a href="#about" @click="clicked">About</a>
          </li>
          <li class="p-5">
            <a href="#portfolio" @click="clicked">Portfolio</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheNavbar",
  data() {
    return {
      dark: false,
      hamburger: false,
    };
  },
  methods: {
    toggleDarkMode() {
      this.dark = !this.dark;
      let html = document.querySelector("#htmlMain");
      if (this.dark) {
        html.className = "dark";
      } else html.className = "";
    },
    toggleMenu() {
      this.hamburger = !this.hamburger;
    },
    clicked() {
      this.$emit("clicked");
    },
  },
};
</script>

<style scoped>
a:after {
  display: block;
  content: "";
  border-bottom: solid 2px #8dbdd8;
  transform: scaleX(0);
  transition: transform 250ms ease-in-out;
}
a:hover:after {
  transform: scaleX(1);
}
a.fromRight:after {
  transform-origin: 100% 50%;
}
a.fromLeft:after {
  transform-origin: 0% 50%;
}
.mobile-nav-list {
  height: calc(100vh - 80px);
}
</style>
