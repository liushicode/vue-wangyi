<template>
  <div id="app">
    <div id="wrap">
      <div id="inner"></div>
    </div> 
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
*{
  margin:0;
  padding:0;
}
#wrap{
  width:300px;
}
#inner{
  width:187.5px;
  height:187.5px;
  background-color: red;
}
</style>
