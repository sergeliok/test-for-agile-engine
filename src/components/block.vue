<template>
  <div class="block" v-bind:style="stylesBlock"></div>
</template>

<script>
export default {
  name: 'block',
  props: ['top','left', 'width', 'height'],
  data(){
    return {
      stylesBlock: {
        top: this.top,
        left: this.left,
        width: this.width,
        height: this.height
      }
    }
  }
}
</script>

<style>
  .block {
    position: absolute;
    border: 1px solid #000;
    box-sizing: content-box;
  }
</style>

