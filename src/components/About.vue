<template>
  <div class="section w-full h-all max-w-6xl mx-auto px-0 sm:px-5">
    <div class="flex h-12 items-center justify-center pt-5">
      <h1 class="text-2xl lg:text-3xl dark:text-darkLight">- About -</h1>
    </div>
    <div
      class="h-full pb-12 flex flex-col items-center justify-around px-5 md:flex-row"
    >
      <div
        class="h-1/2 flex flex-col justify-center items-center md:items-start sm:px-10 md:w-1/2"
      >
        <h1
          class="text-base font-light text-justify md:text-lg dark:text-darkLight"
        >
          Currently I'm not working as a developer, but I spend all my free time
          to learn front end development. I have already acquired many skills
          and knowledge, however I'm open to learn more and I would like to work
          on live projects.
        </h1>
        <a
          href="cv.jpg"
          download="Kiss_Szabolcs_CV"
          class="flex items-center text-xs md:text-base mt-5 py-2 md:py-3 px-3 md:px-6 rounded-xl text-white bg-primary hover:text-gray-500 transition ease-in-out duration-500"
        >
          Download CV<i
            class="fal fa-cloud-download ml-2 text-base md:text-xl"
          ></i>
        </a>
      </div>
      <div
        class="h-1/2 flex flex-col items-center justify-center mb-5 px-5 md:w-92"
      >
        <h1 class="text-xl mb-5 text-gray-700 dark:text-darkLight">Skills</h1>
        <div
          class="container grid grid-cols-5 grid-rows-2 gap-5 w-80 items-center"
        >
          <img class="" src="../assets/images/css.png" alt="" />
          <img class="" src="../assets/images/html.png" alt="" />
          <img class="" src="../assets/images/javascript.png" alt="" />
          <img class="" src="../assets/images/vue.png" alt="" />
          <img class="" src="../assets/images/sass.png" alt="" />
          <img class="" src="../assets/images/tailwind.png" alt="" />
          <img class="" src="../assets/images/figma.png" alt="" />
          <img class="" src="../assets/images/ps.png" alt="" />
          <img class="" src="../assets/images/vscode.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.section {
  min-height: 500px;
  max-height: 550px;
}
</style>
