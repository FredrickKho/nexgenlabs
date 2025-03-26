<script>
import { onMounted } from 'vue';
import AppHeader from './components/Header.vue';
import useDarkmodeStore from '@/stores/darkmode';
export default {
  name: "App",
  components: {
    AppHeader
  },
  setup(){
    const darkmodeStore = useDarkmodeStore();
    onMounted(() => {
      darkmodeStore.initializeTheme();
    });
  }

}
</script>

<template>
  <AppHeader></AppHeader>
  <router-view>

  </router-view>
</template>

<style>

</style>
