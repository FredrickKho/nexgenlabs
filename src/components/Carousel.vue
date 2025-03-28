<template>
  <div class="flex items-center justify-center relative" id="default-carousel" data-carousel="static">
    <div class="mx-10">
      <button type="button" class="" data-carousel-prev>
        <span
          class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
        >
          <svg
            class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span class="sr-only">Previous</span>
        </span>
      </button>
    </div>
    <div class="relative h-56 w-56 overflow-hidden rounded-lg">
      <div class="hidden duration-700 ease-in-out" data-carousel-item>
        <img src="/public/assets/img/analytics.png" alt="analytics.png" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
      </div>
      <div class="hidden duration-700 ease-in-out" data-carousel-item>
        <video controls class="absolute block h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" >
          <source src="/public/assets/video/philips-lock-door.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div class="hidden duration-700 ease-in-out" data-carousel-item>
        <img
          src="/public/assets/img/instastoryfood.png"
          class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          alt="..."
        />
      </div>
    </div>
    <div class="mx-10">
      <button type="button" class="" data-carousel-next>
        <span
          class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
        >
          <svg
            class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span class="sr-only">Next</span>
        </span>
      </button>
    </div>
  </div>



</template>

<script>
export default {
  name: 'Carousel',
}
</script>
