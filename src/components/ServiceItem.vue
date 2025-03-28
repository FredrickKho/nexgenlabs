<template>
<div class="flex max-sm:m-1 sm:m-4 lg:m-8">
  <div class="w-1/2">
    <img :src="img" :alt="alt">
  </div>
  <div class="w-1/2 dark:bg-[#29425A] bg-gray-300">
    <div class="dark:bg-[#29425A] h-1/4 flex flex-col justify-center px-2">
      <p class="dark:bg-[#29425A] text-p-xs sm:text-p-sm md:text-p-md lg:text-p-lg">
        {{design}}
      </p>
    </div>
    <div class="dark:bg-[#29425A] h-3/4 px-2 flex flex-col justify-between">
      <h4 class="text-lime-600 dark:text-light-green dark:bg-[#29425A] text-h4-xs sm:text-h3-sm md:text-h4-md lg:text-h4-lg font-bold">
        {{topic}}
      </h4>
      <button class="py-2 px-4 my-4 max-sm:py-1 max-sm:px-2 rounded-lg font-semibold bg-slate-800 py-2.5 px-5 border-l border-r border-slate-700 text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
        {{$t('home.service.ineedthis')}}
  </button>

    </div>
    <!-- <div class="dark:bg-[#29425A] h-1/4">

    </div> -->
  </div>
</div>
</template>

<script>
export default {
  name: "ServiceItem",
  props:{
    img: String,idx: Number, alt: String
  },
  computed: {
    design(){
      return this.$t('home.service.card['+this.idx+'].designed');
    },
    topic(){
      return this.$t('home.service.card['+this.idx+'].topic');
    }
  }
}
</script>
