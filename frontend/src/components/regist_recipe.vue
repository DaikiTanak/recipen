<template>
  <div class="mybody">
    <inputdish></inputdish>
  </div>
</template>


<script>
import inputdish from './inputdish'

export default {
  components: {
    inputdish,
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.mybody {
  height: 100%;
  width: 70%;
  opacity: 0.9.5;
  position: relative;
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;

}
</style>
