<template>
  <div class="w-full relative z-0 ">
    <div class="hidden-space h-20"></div>
    <div
      class="section max-w-6xl mx-auto flex flex-col items-center justify-center h-all px-5 sm:h-full sm:flex-row-reverse sm:px-10 sm:justify-evenly lg:h-all"
    >
      <!--image-->
      <div class="image mb-16 sm:mb-0">
        <img
          class="w-60 sm:w-72 md:w-80 lg:w-96"
          src="../assets/images/header_pic.png"
          alt=""
        />
      </div>
      <!--content-->
      <div
        class="content text-center sm:text-left sm:mr-5 sm:mb-10 sm:w-60 md:w-auto md:mb-20 lg:mb-36"
      >
        <h1 class="text-4xl font-bold mb-4 md:text-5xl dark:text-darkLight">
          Hi, I'm Szabi.
        </h1>
        <h4
          class="text-xl mb-5 pl-1 text-gray-800 dark:text-darkLight md:text-2xl"
        >
          I am a Front End Developer.
        </h4>
        <button
          class="text-base py-3 px-5 rounded-xl ml-1 text-white bg-primary transition duration-300 ease-in-out transform hover:scale-110 md:text-xl"
        >
          contact me<i class="fas fa-paper-plane ml-3"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
.section {
  min-height: 550px;
  max-height: 822px;
}
</style>
