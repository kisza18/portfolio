<template>
  <div class="bg-light dark:bg-gray-900">
    <TheNavbar @clicked="scrollTo('home')" />
    <Home id="home" />
    <div id="about" class="h-16"></div>
    <About />
    <div id="portfolio" class="h-16"></div>
    <Portfolio id="portfolio" />
    <Contact id="contact" />
    <TheFooter />
  </div>
</template>

<script>
import TheNavbar from "./components/TheNavbar";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import TheFooter from "./components/TheFooter";
import Contact from "./components/Contact";

export default {
  name: "App",
  components: {
    TheNavbar,
    Home,
    Portfolio,
    About,
    TheFooter,
    Contact,
  },
  methods: {
    scrollTo(selector) {
      document.querySelector(selector).scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&display=swap");
* {
  font-family: "Poppins", sans-serif;
}
</style>
