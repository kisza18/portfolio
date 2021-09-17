<template>
  <div class="section h-all max-w-6xl mx-auto px-0 sm:px-5">
    <div class="w-full relative">
      <div class="flex items-center justify-center pt-5">
        <h1 class="text-2xl lg:text-3xl dark:text-darkLight">- Portfolio -</h1>
      </div>
      <swiper
        :pagination="{
          dynamicBullets: true,
        }"
        :navigation="{ nextEl: '.nextArrow', prevEl: '.prevArrow' }"
        :slides-per-view="1"
      >
        <swiper-slide>
          <Card
            title="Apple website copy"
            text="VueJs - TailwindCss"
            image="apple_copy.png"
            siteUrl="https://kisza18.github.io/apple/"
            githubUrl="https://github.com/kisza18/apple"
          />
        </swiper-slide>
        <swiper-slide>
          <Card
            title="Microsoft website copy"
            text="VueJs - TailwindCss"
            image="microsoft_copy.png"
            siteUrl="https://kisza18.github.io/microsoft/"
            githubUrl="https://github.com/kisza18/microsoft"
          />
        </swiper-slide>
        <swiper-slide>
          <Card
            title="Agency landing page"
            text="VueJs - TailwindCss"
            image="sunnyside.png"
            siteUrl="https://kisza18.github.io/sunnyside/"
            githubUrl="https://github.com/kisza18/sunnyside"
          />
        </swiper-slide>
        <swiper-slide>
          <Card
            title="Blogr landing page"
            text="VueJs - TailwindCss"
            image="blogr.png"
            siteUrl="https://kisza18.github.io/blogr/"
            githubUrl="https://github.com/kisza18/blogr"
          />
        </swiper-slide>
        <swiper-slide>
          <Card
            title="BMW M8"
            text="HTML, CSS, JS"
            image="bmw.png"
            siteUrl="https://kisza18.github.io/bmwm8/"
            githubUrl="https://github.com/kisza18/bmwm8"
          />
        </swiper-slide>
      </swiper>
      <div
        class="prevArrow absolute top-0 flex items-center h-full z-10 left-5 lg:left-12 cursor-pointer hover:text-primary transition duration-500 ease-in-out"
      >
        <i class="fal fa-chevron-left"></i>
      </div>
      <div
        class="nextArrow absolute top-0 flex items-center h-full z-10 right-5 lg:right-12 cursor-pointer hover:text-primary transition duration-500 ease-in-out"
      >
        <i class="fal fa-chevron-right"></i>
      </div>
    </div>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "../assets/swiper-bundle.css";
import Card from "./Card";
import SwiperCore, { Pagination, Navigation } from "swiper/core";

SwiperCore.use([Pagination, Navigation]);

export default {
  components: {
    Swiper,
    SwiperSlide,
    Card,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
.swiper-slide {
  text-align: center;
  font-size: 18px;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
.section {
  min-height: 560px;
  max-height: 600px;
}
</style>
