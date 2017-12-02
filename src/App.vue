<template>
  <div id="app">
    <blocks/>
  </div>
</template>

<script>
import blocks from './components/blocks'

export default {
  name: 'app',
  components: {
    blocks
  }
}
</script>

<style>
#app {
  background-color: #eee;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
}
canvas {
  width: 100%;
  display: block;
}
</style>
