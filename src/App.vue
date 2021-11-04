<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { ref } from 'vue'
import DieWrapper from './types/Dice'
import Die from './components/Die.vue'
const roll = () => Array.from({length: 6}, () => new DieWrapper());
const dice = ref(roll());
</script>

<template>
  <div class="flex center">
    <Die v-for="die in dice" :faceValue="die.value()"/>
  </div>
  <button type="button" @click="dice = roll()">Reroll</button>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.flex {
  display: flex;
}
.center {
  justify-content: center;
}
</style>
