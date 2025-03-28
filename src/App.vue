<script>
import { onMounted } from 'vue';
import AppHeader from './components/Header.vue';
import AppFooter from './components/Footer.vue';
import useDarkmodeStore from '@/stores/darkmode';

export default {
  name: "App",
  components: {
    AppHeader,AppFooter
  },
  setup(){
    const darkmodeStore = useDarkmodeStore();
    onMounted(() => {
      console.log("unmount dulu")
      darkmodeStore.initializeTheme();
    });
  }

}
</script>

<template>
  <AppHeader></AppHeader>
  <router-view>
  </router-view>
  <AppFooter></AppFooter>
</template>

<style>

</style>
