<template>
  <div
    class="section w-full h-all max-w-6xl mx-auto px-0 sm:px-5 flex flex-col items-center justify-center"
  >
    <h1 class="text-2xl lg:text-3xl dark:text-darkLight py-5">- Contact -</h1>
    <form
      action="https://formsubmit.co/3a8fc293f830ac77d2f797c749103bd2"
      method="POST"
      class="flex flex-col"
    >
      <input
        class="p-3 my-2 focus:outline-none"
        type="text"
        placeholder="name"
        name="name"
        required
      />
      <input
        class="p-3 my-2 focus:outline-none"
        type="email"
        placeholder="email"
        name="email"
        required
      />
      <textarea
        class="p-3 my-2 focus:outline-none"
        type="text"
        placeholder="message"
        name="message"
        value=""
        required
        rows="4"
      >
      </textarea>
      <button
        class="text-xs md:text-base mt-5 py-2 md:py-3 px-3 md:px-6 rounded-xl text-white bg-primary hover:text-gray-500 transition ease-in-out duration-500"
        type="submit"
      >
        Send
      </button>
      <input
        type="hidden"
        name="_next"
        value="https://kisza18.github.io/portfolio/"
      />
      <input type="hidden" name="_captcha" value="false" />
    </form>
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
textarea {
  resize: none;
}
</style>
