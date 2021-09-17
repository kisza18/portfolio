<template>
  <div
    class="card w-full flex flex-col-reverse md:flex-row items-center justify-between"
  >
    <!--image-->
    <div class="image w-full h-2/3 flex items-center justify-center md:h-full">
      <img
        class="w-72 md:w-80 md:ml-10 lg:w-96 lg:ml-20"
        :src="require(`../assets/images/${image}`)"
        alt="image"
      />
    </div>
    <!--content-->
    <div
      class="content w-full h-1/3 flex flex-col pt-16 md:pt-0 md:h-full justify-center"
    >
      <div class="flex flex-col justify-center lg:pr-20">
        <h1 class="text-2xl mb-1 lg:text-3xl dark:text-darkLight">
          {{ title }}
        </h1>
        <p class="text-sm font-thin mb-3 lg:text-base dark:text-darkLight">
          {{ text }}
        </p>
        <div class="flex items-center justify-between w-52 mx-auto md:w-auto">
          <a
            :href="siteUrl"
            target="_blank"
            class="text-xs py-2 px-4 rounded-xl text-white bg-primary mr-2 hover:text-gray-500 transition ease-in-out duration-500"
          >
            Go to website
          </a>
          <a :href="githubUrl" target="_blank"
            ><img
              class="w-24 bg-gray-50 rounded-xl px-2"
              src="../assets/github.png"
              alt=""
          /></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "text", "image", "githubUrl", "siteUrl"],
};
</script>

<style scoped>
.card {
  height: 500px;
}
</style>
