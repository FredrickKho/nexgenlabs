<script>
import ServiceItem from '@/components/ServiceItem.vue'
import Carousel from '@/components/Carousel.vue'
export default {
  components: { ServiceItem, Carousel },
  name: 'Home',
  data() {
    return {
      serviceImg: [
        '/assets/img/instastoryfood.png',
        '/assets/img/shooting-video.png',
        '/assets/img/video-camera.png',
        '/assets/img/travel-app.png',
      ],
      alt: ['instastoryfood.png', 'shooting-video.png', 'video-camera.png', 'travel-app.png'],
    }
  },
}
</script>
<template>
  <!-- introduction section -->
  <div class="flex max-md:flex-col my-16 max-sm:my-10 bg-gray-100">
    <div class="w-1/2 m-auto flex justify-center max-md:py-3">
      <h2
        class="text-h2-xs sm:text-h2-sm md:text-h2-md lg:text-h2-lg font-bold w-1/2 max-md:w-full max-md:text-center"
      >
        {{ $t('home.intro.text1') }}
        <span class="text-lime-500 dark:text-light-green italic">{{ $t('home.intro.span1') }}</span>
        {{ $t('home.intro.text2') }}
        <span class="text-lime-500 dark:text-light-green">{{ $t('home.intro.span2') }}</span>
      </h2>
    </div>
    <div class="w-1/2 max-md:w-full">
      <img src="/assets/img/go-viral.png" alt="go-viral.png" class="w-full" />
    </div>
  </div>

  <!-- problem section -->
  <div class="flex flex-col my-16 max-md:my-10 max-sm:my-6 bg-gray-100">
    <div
      class="bg-[url('/assets/img/city.png')] bg-cover bg-bottom w-full h-[40vh] max-md:h-[24vh] max-sm:h-[18vh] text-center flex justify-center"
    >
      <div class="dark:bg-transparent flex flex-col items-center justify-center">
        <h2
          class="text-white text-h2-xs sm:text-h2-sm md:text-h2-md lg:text-h2-lg font-bold max-md:text-center dark:bg-transparent mb-3"
        >
          {{ $t('home.problem.text1') }}
          <span class="text-lime-500 dark:text-light-green dark:bg-transparent">{{
            $t('home.problem.span1')
          }}</span
          >{{ $t('home.problem.text2') }}
          <span class="text-lime-500 dark:text-light-green dark:bg-transparent">
            {{ $t('home.problem.span2') }}
          </span>
        </h2>
        <h4
          class="text-white text-h4-xs sm:text-h4-sm md:text-h4-md lg:text-h4-lg font-bold max-md:text-center dark:bg-transparent"
        >
          {{ $t('home.problem.text3') }}
          <span class="text-lime-500 dark:text-light-green dark:bg-transparent">
            {{ $t('home.problem.span3') }}
          </span>
        </h4>
      </div>
    </div>
    <div class="flex max-md:flex-col-reverse max-md:items-center">
      <div class="w-1/2">
        <img src="/assets/img/analytics.png" alt="analytics.png" />
      </div>
      <div
        class="flex w-1/2 flex-col justify-center pl-5 max-md:pl-0 max-md:text-center max-md:items-center max-md:py-4"
      >
        <div class="w-1/2 mb-7 max-md:mb-3 max-md:w-full">
          <h3 class="text-h3-xs sm:text-h3-sm md:text-h3-md lg:text-h3-lg font-bold">
            {{ $t('home.problem.text4') }}
            <span class="text-lime-500 dark:text-light-green">
              {{ $t('home.problem.span4') }}
            </span>
            {{ $t('home.problem.text5') }}
            <span class="text-lime-500 dark:text-light-green">
              {{ $t('home.problem.span5') }}
            </span>
            {{ $t('home.problem.text6') }}
            <span class="text-lime-500 dark:text-light-green">{{ $t('home.problem.span6') }}</span>
          </h3>
        </div>
        <div>
          <button
            class="border border-solid border-1 border-black dark:border-white py-2 px-4 max-sm:py-1 max-sm:px-2 font-bold lg:text-p-lg max-md:text-p-md max-sm:text-p-sm hover:bg-gray-300 dark:hover:bg-gray-700"
            type="button"
          >
            {{ $t('home.readmore') }}
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- services section -->
  <div class="flex flex-col">
    <div class="text-center">
      <h2 class="text-h2-xs sm:text-h2-sm md:text-h2-md lg:text-h2-lg font-bold">
        {{ $t('home.service.title') }}
      </h2>
    </div>
    <div class="sm:mx-6 max-sm:mx-2">
      <div class="grid grid-cols-2 justify-items-center max-sm:grid-cols-1">
        <service-item
          v-for="(img, i) in serviceImg"
          :alt="alt[i]"
          :key="img"
          :img="img"
          :idx="i"
        ></service-item>
      </div>
    </div>
  </div>

  <!-- Creative Solution -->
  <div class="my-10 max-sm:my-10">
    <div class="text-center my-2">
      <h2 class="text-[20px] sm:text-h2-sm md:text-h2-md lg:text-h2-lg font-bold">
        {{ $t('home.solution.text1') }}
        <span class="text-lime-500 dark:text-light-green">{{ $t('home.solution.span1') }}</span>
        {{ $t('home.solution.text2') }}
      </h2>
    </div>
    <div class="grid grid-cols-3 justify-items-center text-center max-sm:grid-cols-1 max-sm:gap-10">
      <div class="w-full flex flex-col items-center max-sm:h-fit">
        <div>
          <h4
            class="text-lime-600 dark:text-light-green text-[15px] sm:text-h3-sm md:text-h4-md lg:text-h4-lg font-bold"
          >
            Product Ads
          </h4>
        </div>
        <div
          class="h-full max-sm:h-1/2 max-lg:h-3/4 mt-10 max-sm:mt-3 max-sm:w-1/2 max-md:mt-6 flex justify-center w-[80%] bg-black dark:bg-black"
        >
          <video controls class="h-full w-2/3 bg-black dark:bg-black">
            <source src="/assets/video/philips-lock-door.mp4" />
          </video>
        </div>
      </div>
      <div class="w-full flex flex-col items-center max-sm:h-fit">
        <div>
          <h4
            class="text-lime-600 dark:text-light-green text-[15px] sm:text-h3-sm md:text-h4-md lg:text-h4-lg font-bold"
          >
            Event Documentary
          </h4>
        </div>
        <div
          class="h-full max-sm:h-1/2 max-lg:h-3/4 mt-10 max-sm:mt-3 max-sm:w-1/2 max-md:mt-6 flex justify-center w-[80%] bg-black dark:bg-black"
        >
          <video controls class="h-full w-2/3 bg-black dark:bg-black">
            <source src="/assets/video/orchestra.mp4" />
          </video>
        </div>
      </div>
      <div class="w-full flex flex-col items-center max-sm:h-fit">
        <div>
          <h4
            class="text-lime-600 dark:text-light-green text-[15px] sm:text-h3-sm md:text-h4-md lg:text-h4-lg font-bold"
          >
            Marketing Reels
          </h4>
        </div>
        <div
          class="h-full max-sm:h-1/2 max-lg:h-3/4 mt-10 max-sm:mt-3 max-sm:w-1/2 max-md:mt-6 flex justify-center w-[80%] bg-black dark:bg-black"
        >
          <video controls class="h-full w-2/3 bg-black dark:bg-black">
            <source src="/assets/video/mamamasak.mp4" />
          </video>
        </div>
      </div>
    </div>
    <div class="flex justify-center mt-5">
      <button
        class="border border-solid border-1 border-black dark:border-white py-2 px-4 max-sm:py-1 max-sm:px-2 font-bold lg:text-p-lg max-md:text-p-md max-sm:text-p-sm hover:bg-gray-300 dark:hover:bg-gray-700"
        type="button"
      >
        {{ $t('home.solution.viewmore') }}
      </button>
    </div>
  </div>

  <!-- Testimony -->
  <div class="my-10 max-sm:my-10">
    <div class="text-center my-2">
      <h2 class="text-[20px] sm:text-h2-sm md:text-h2-md lg:text-h2-lg font-bold">
        {{ $t('home.testimony.title') }}
      </h2>
    </div>
    <div class="grid grid-cols-3 max-sm:grid-cols-1 text-center justify-items-center">
      <div class="flex flex-col w-[80%]">
        <div class="flex justify-center my-4">
          <img class="w-[75%]" src="/assets/img/user1.png" alt="" />
        </div>
        <div>
          <h3
            class="my-2 text-lime-600 dark:text-light-green text-[24px] sm:text-h3-sm md:text-[20px] lg:text-h3-lg font-bold"
          >
            {{ $t('home.testimony.user1.name') }}
          </h3>
          <p>"{{ $t('home.testimony.user1.desc') }}"</p>
        </div>
      </div>
      <div class="flex flex-col w-[80%]">
        <div class="flex justify-center my-4">
          <img class="w-[75%]" src="/assets/img/user2.png" alt="" />
        </div>
        <div>
          <h3
            class="my-2 text-lime-600 dark:text-light-green text-[24px] sm:text-h3-sm md:text-[20px] lg:text-h3-lg font-bold"
          >
            {{ $t('home.testimony.user2.name') }}
          </h3>
          <p>"{{ $t('home.testimony.user2.desc') }}"</p>
        </div>
      </div>
      <div class="flex flex-col w-[80%]">
        <div class="flex justify-center my-4">
          <img class="w-[75%]" src="/assets/img/user3.png" alt="" />
        </div>
        <div>
          <h3
            class="my-2 text-lime-600 dark:text-light-green text-[24px] sm:text-h3-sm md:text-[20px] lg:text-h3-lg font-bold"
          >
            {{ $t('home.testimony.user3.name') }}
          </h3>
          <p>"{{ $t('home.testimony.user3.desc') }}"</p>
        </div>
      </div>
    </div>
  </div>
</template>
