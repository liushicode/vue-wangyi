<template>
  <div class="container">
    <router-view></router-view>
    <Footer v-show="$route.meta.isShowFooter" />
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.container
  width 100%
</style>
