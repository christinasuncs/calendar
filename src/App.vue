<template>
  <TheNavigation />
  <!-- <a href="/about">A tag About</a> -->
  <div class="container">
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" :key="$route.path"></component>
      </transition>
    </router-view>
  </div>
</template>

<script>
import TheNavigation from "@/components/TheNavigation.vue"

export default {
  components: { TheNavigation },
}
</script>

<style lang="css">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
/* .container {
  display: flex;
}
.left-sidebar {
  width: 20%;
}
.main-view {
  width: 100%;
} */
</style>
