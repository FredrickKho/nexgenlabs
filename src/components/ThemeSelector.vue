<template>
  <!-- <div class="flex items-center">
    <label for="theme" class="mr-2">Theme:</label>
    <select id="theme" v-model="theme" @change="updateTheme" class="p-2 border rounded-md">
      <option value="dark" selected>Dark Theme</option>
      <option value="light">Light Theme</option>
    </select>
  </div> -->
  <div class="flex items-center">
    <Switch
      @click="toggleDarkmode"
      :class="isEnabledStyling"
      class="relative inline-flex h-[29px] w-[65px] lg:h-[33px] lg:w-[69px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
    >
      <span class="sr-only">Use setting</span>
      <span
        aria-hidden="true"
        :class="isEnabledTransition"
        class="flex items-center justify-center pointer-events-none inline-block h-[25px] w-[25px] lg:h-[29px] lg:w-[29px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out"
      >
        <svg
          v-if="!setDarkmode"
          class="transition-colors duration-200 ease-in-out h-[18px] w-[18px] lg:h-[20px] lg:w-[20px]"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0,0,256,256"
        >
          <g transform="translate(25.6,25.6) scale(0.8,0.8)">
            <g
              fill-opacity="0"
              fill="#ffffff"
              fill-rule="nonzero"
              stroke="none"
              stroke-width="1"
              stroke-linecap="butt"
              stroke-linejoin="miter"
              stroke-miterlimit="10"
              stroke-dasharray=""
              stroke-dashoffset="0"
              font-family="none"
              font-weight="none"
              font-size="none"
              text-anchor="none"
              style="mix-blend-mode: normal"
            >
              <path d="M-32,288v-320h320v320z" id="bgRectangle"></path>
            </g>
            <g
              fill-opacity="0"
              fill="#fdfdfd"
              fill-rule="nonzero"
              stroke="none"
              stroke-width="1"
              stroke-linecap="butt"
              stroke-linejoin="miter"
              stroke-miterlimit="10"
              stroke-dasharray=""
              stroke-dashoffset="0"
              font-family="none"
              font-weight="none"
              font-size="none"
              text-anchor="none"
              style="mix-blend-mode: normal"
            >
              <path d="M16,240v-224h224v224z" id="shape"></path>
            </g>
            <g
              fill="#000000"
              fill-rule="nonzero"
              stroke="none"
              stroke-width="1"
              stroke-linecap="butt"
              stroke-linejoin="miter"
              stroke-miterlimit="10"
              stroke-dasharray=""
              stroke-dashoffset="0"
              font-family="none"
              font-weight="none"
              font-size="none"
              text-anchor="none"
              style="mix-blend-mode: normal"
            >
              <g transform="scale(5.12,5.12)">
                <path
                  d="M24.98438,3.98633c-0.55152,0.00862 -0.99193,0.46214 -0.98437,1.01367v6c-0.0051,0.36064 0.18438,0.69608 0.49587,0.87789c0.3115,0.18181 0.69676,0.18181 1.00825,0c0.3115,-0.18181 0.50097,-0.51725 0.49587,-0.87789v-6c0.0037,-0.2703 -0.10218,-0.53059 -0.29351,-0.72155c-0.19133,-0.19097 -0.45182,-0.29634 -0.72212,-0.29212zM10.88867,9.89063c-0.40657,0.0009 -0.77213,0.24784 -0.92475,0.62467c-0.15262,0.37684 -0.06192,0.80856 0.22944,1.09212l4.19922,4.19922c0.25082,0.26123 0.62326,0.36645 0.9737,0.27509c0.35043,-0.09136 0.6241,-0.36502 0.71546,-0.71546c0.09136,-0.35043 -0.01386,-0.72288 -0.27509,-0.9737l-4.19922,-4.19922c-0.18874,-0.19402 -0.44807,-0.30325 -0.71875,-0.30273zM39.08008,9.89063c-0.2598,0.00774 -0.50638,0.11632 -0.6875,0.30273l-4.19922,4.19922c-0.26123,0.25082 -0.36645,0.62326 -0.27509,0.9737c0.09136,0.35043 0.36502,0.6241 0.71546,0.71546c0.35043,0.09136 0.72288,-0.01386 0.9737,-0.27509l4.19922,-4.19922c0.29576,-0.28749 0.38469,-0.72707 0.22393,-1.10691c-0.16075,-0.37985 -0.53821,-0.62204 -0.9505,-0.60988zM25,15c-0.03325,-0.00035 -0.06649,0.00095 -0.09961,0.00391c-0.03341,0.00288 -0.06666,0.00745 -0.09961,0.01367c-0.07181,0.01378 -0.14189,0.03539 -0.20898,0.06445c-2.59419,0.10974 -4.95239,1.13013 -6.66602,2.84375c-1.80833,1.80834 -2.92578,4.30755 -2.92578,7.07422c0,5.53333 4.46667,10 10,10c4.15,0 7.69922,-2.51289 9.21484,-6.10352c0.50521,-1.19688 0.78516,-2.51315 0.78516,-3.89648c0,-4.15 -2.51289,-7.69922 -6.10352,-9.21484c-1.07092,-0.45204 -2.26165,-0.65108 -3.48633,-0.70312c-0.01546,-0.00691 -0.03109,-0.01342 -0.04687,-0.01953c-0.0626,-0.02334 -0.12737,-0.04035 -0.19336,-0.05078c-0.03302,-0.00492 -0.06626,-0.00818 -0.09961,-0.00977c-0.02341,-0.00148 -0.04686,-0.00213 -0.07031,-0.00195zM5,24c-0.36064,-0.0051 -0.69608,0.18438 -0.87789,0.49587c-0.18181,0.3115 -0.18181,0.69676 0,1.00825c0.18181,0.3115 0.51725,0.50097 0.87789,0.49587h6c0.36064,0.0051 0.69608,-0.18438 0.87789,-0.49587c0.18181,-0.3115 0.18181,-0.69676 0,-1.00825c-0.18181,-0.3115 -0.51725,-0.50097 -0.87789,-0.49587zM39,24c-0.36064,-0.0051 -0.69608,0.18438 -0.87789,0.49587c-0.18181,0.3115 -0.18181,0.69676 0,1.00825c0.18181,0.3115 0.51725,0.50097 0.87789,0.49587h6c0.36064,0.0051 0.69608,-0.18438 0.87789,-0.49587c0.18181,-0.3115 0.18181,-0.69676 0,-1.00825c-0.18181,-0.3115 -0.51725,-0.50097 -0.87789,-0.49587zM15.08008,33.89063c-0.2598,0.00774 -0.50638,0.11632 -0.6875,0.30273l-4.19922,4.19922c-0.26123,0.25082 -0.36645,0.62326 -0.27509,0.9737c0.09136,0.35043 0.36502,0.6241 0.71546,0.71546c0.35043,0.09136 0.72288,-0.01386 0.9737,-0.27509l4.19922,-4.19922c0.29576,-0.28749 0.38469,-0.72707 0.22393,-1.10691c-0.16075,-0.37985 -0.53821,-0.62204 -0.9505,-0.60988zM34.88867,33.89063c-0.40657,0.0009 -0.77213,0.24784 -0.92475,0.62467c-0.15262,0.37684 -0.06192,0.80856 0.22944,1.09212l4.19922,4.19922c0.25082,0.26123 0.62326,0.36645 0.9737,0.27509c0.35043,-0.09136 0.6241,-0.36502 0.71546,-0.71546c0.09136,-0.35043 -0.01386,-0.72288 -0.27509,-0.9737l-4.19922,-4.19922c-0.18874,-0.19402 -0.44807,-0.30325 -0.71875,-0.30273zM24.98438,37.98633c-0.55152,0.00862 -0.99193,0.46214 -0.98437,1.01367v6c-0.0051,0.36064 0.18438,0.69608 0.49587,0.87789c0.3115,0.18181 0.69676,0.18181 1.00825,0c0.3115,-0.18181 0.50097,-0.51725 0.49587,-0.87789v-6c0.0037,-0.2703 -0.10218,-0.53059 -0.29351,-0.72155c-0.19133,-0.19097 -0.45182,-0.29634 -0.72212,-0.29212z"
                ></path>
              </g>
            </g>
          </g>
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-moon"
          viewBox="0 0 16 16"
        >
          <path
            d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286"
          />
        </svg>
      </span>
    </Switch>
  </div>
</template>

<script>
import { Switch } from '@headlessui/vue'
import useDarkmodeStore from '@/stores/darkmode'
import { mapActions, mapState, mapWritableState } from 'pinia'

export default {
  name: 'ThemeSelector',

  components: {
    // eslint-disable-next-line vue/no-reserved-component-names
    Switch,
  },
  computed: {
    ...mapState(useDarkmodeStore, ['isEnabledTransition', 'isEnabledStyling']),
    ...mapWritableState(useDarkmodeStore, {
      setDarkmode: 'isDark',
    }),
  },
  methods: {
    ...mapActions(useDarkmodeStore, ['toggleDarkmode']),
  },
}
</script>

<style scoped>
select {
  background-color: #fff;
  color: #333;
}
</style>
