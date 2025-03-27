<template>
  <Listbox v-model="currentLocale">
    <ListboxButton class="flex items-center">
      <span
        class="text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white block rounded-md text-sm font-bold"
      >
        {{localeName}}
      </span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
        class="h-5 w-5 text-gray-700 dark:text-gray-300"
      >
        <path
          fill-rule="evenodd"
          d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </ListboxButton>
    <transition
      leave-active-class="transition duration-100 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <ListboxOptions
        class="absolute mt-1 max-h-60 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/15 dark:ring-white/15 focus:outline-none sm:text-sm"
      >
        <ListboxOption @click='setLocale("en","English")' class="cursor-default select-none py-1 px-3 text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white block rounded-md text-sm" >
            English
        </ListboxOption>
        <ListboxOption @click='setLocale("id","Indonesia")' class="cursor-default select-none py-1 px-3 text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white block rounded-md text-sm" >
            Indonesia
        </ListboxOption>
      </ListboxOptions>
    </transition>
  </Listbox>
</template>

<script>
import { Listbox, ListboxButton, ListboxOptions, ListboxOption } from '@headlessui/vue'
import useLocaleStore from '@/stores/locale'
import { mapActions, mapWritableState } from 'pinia'

export default {
  name: 'LocaleSelector',
  components: {
    Listbox,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
  },
  computed: {
    ...mapWritableState(useLocaleStore,{
      localeName: 'name'
    })
  },
  data() {
    return {
      currentLocale: this.$i18n
    }
  },
  methods: {
    ...mapActions(useLocaleStore,['changeLocale']),
    setLocale(locale, name){
      this.changeLocale(locale,name)
      this.$i18n.locale = locale
    }
  },

}
</script>
