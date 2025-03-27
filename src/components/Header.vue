<template>
  <div class="p-3">
    <div class="flex flex-col">
      <div class="flex justify-between px-2">
        <h1 class="text-h1-xs sm:text-h1-sm md:text-h1-md lg:text-h1-lg font-bold">
          Nex<span class="text-lime-500 dark:text-light-green">Gen</span>Labs
        </h1>

        <div class="flex flex-row items-center hidden lg:flex">
          <div>
            <a
              href=""
              class="text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white block px-4 py-2.5 rounded-md text-sm font-bold"
              >{{ $t('header.home') }}</a
            >
          </div>
          <div>
            <a
              href=""
              class="text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white block px-4 py-2.5 rounded-md text-sm font-bold"
              >{{ $t('header.about') }}</a
            >
          </div>
          <div>
            <a
              href=""
              class="text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white block px-4 py-2.5 rounded-md text-sm font-bold"
              >{{ $t('header.portfolio') }}</a
            >
          </div>
          <div>
            <a
              href=""
              class="text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white block px-4 py-2.5 rounded-md text-sm font-bold"
              >{{ $t('header.contact') }}</a
            >
          </div>
          <div>
            <div
              class="px-4 py-2.5 "
            >
              <LocaleSelector></LocaleSelector>
            </div>
          </div>
          <div>
            <div
              class="text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white block px-4 py-2.5 rounded-md text-sm font-bold"
            >
              <theme-selector></theme-selector>
            </div>
          </div>
        </div>

        <div class="flex shrink-0 lg:hidden">
            <LocaleSelector></LocaleSelector>
          <button
            class="inline-flex justify-center items-center text-gray-500 rounded-md hover:text-black pl-2"
            @click="showMenu = !showMenu"
          >
            <span class="sr-only">Open main menu</span
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
              class="block w-6 h-6"
              :class="showMenu ? 'hidden' : ''"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
              class="block w-6 h-6"
              :class="showMenu ? '' : 'hidden'"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div class="flex flex-col lg:hidden" :class="showMenu ? '' : 'hidden'">
        <div class="">
          <a
            href="/"
            class="text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 block px-4 py-2.5 rounded-md text-sm font-medium"
            >{{ $t('header.home') }}</a
          >
        </div>
        <div>
          <a
            href="/about"
            class="text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 block px-4 py-2.5 rounded-md text-sm font-medium"
            >{{ $t('header.about') }}</a
          >
        </div>
        <div>
          <a
            href="/portfolio"
            class="text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 block px-4 py-2.5 rounded-md text-sm font-medium"
            >{{ $t('header.portfolio') }}</a
          >
        </div>
        <div>
          <a
            href=""
            class="text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 block px-4 py-2.5 rounded-md text-sm font-medium"
            >{{ $t('header.contact') }}</a
          >
        </div>

        <div>
          <div
            class="text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white block px-4 py-2.5 rounded-md text-sm font-bold"
          >
            <theme-selector></theme-selector>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import LocaleSelector from './LocaleSelector.vue'
import ThemeSelector from './ThemeSelector.vue'
export default {
  components: { ThemeSelector, LocaleSelector },
  name: 'AppHeader',
  data() {
    return {
      showMenu: false,
    }
  },
}
</script>
