<template>
    <div id="canvas" @mousedown="mousedown"
                     @mouseup="mouseup"
                     @mousemove="mousemove">
    <div class="block temp" v-if="isMousePresed" v-bind:style="stylesTempBlock"></div>
    <block v-for="block in blocks"
             v-bind:key="block.id"
             v-bind="block"></block>
    </div>
</template>

<script>
import Block from './block';

export default {
  name: 'canvas',
  components: {Block},
  data() {
    return {
      isMousePresed: false,
      isMouseMoved: false,
      startPoint: {},
      endPoint:{},
      counter: 0,
    }
  },
  computed:{
    blocks() { 
      return this.$store.getters.blocks;
    },
    stylesTempBlock() {
      let styles = {};
      if (this.startPoint.left < this.endPoint.left) {
        styles.left = this.startPoint.left + 'px';
        styles.width = this.endPoint.left - this.startPoint.left + 'px';
      } else {
        styles.left = this.endPoint.left + 'px';
        styles.width = this.startPoint.left - this.endPoint.left + 'px';
      }

      if (this.startPoint.top < this.endPoint.top) {
        styles.top = this.startPoint.top + 'px';
        styles.height = this.endPoint.top - this.startPoint.top + 'px';
      } else {
        styles.top = this.endPoint.top + 'px';
        styles.height = this.startPoint.top - this.endPoint.top + 'px';
      }
      return {
        top: styles.top,
        left: styles.left,
        width: styles.width,
        height: styles.height,
      };
    },
  },
  methods: {
    mousedown(event) {
      this.isMousePresed = true;
      this.startPoint = {
        left: event.clientX,
        top: event.clientY,
      };
      this.endPoint = {
        left: event.clientX,
        top: event.clientY,
      };
    },

    mouseup(event) {
      if (!this.isMouseMoved) {
        this.endPoint = {
          left: event.clientX,
          top: event.clientY,
        }
      }
      this.addBlock();
      this.isMouseMoved = false;
      this.isMousePresed = false;
    },

    mousemove(event) {
      if (this.isMousePresed) {
        this.isMouseMoved = true;
        this.endPoint = {
          left: event.clientX,
          top: event.clientY,
        }
      }
    },

    addBlock() {
      this.$store.dispatch('addBlock', {
          id:this.counter,
          top: this.stylesTempBlock.top,
          left: this.stylesTempBlock.left,
          width: this.stylesTempBlock.width,
          height: this.stylesTempBlock.height,
        });
      this.counter++;
    },
  }
}
</script>

<style scoped>
  #canvas {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: absolute;
  }
  block.temp {
    position: absolute;
    border: 1px solid #000;
    box-sizing: content-box;
  }
</style>
