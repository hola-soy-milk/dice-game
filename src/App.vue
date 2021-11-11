<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { ref } from 'vue'
import DieWrapper from './types/Dice'
import Die from './components/Die.vue'
const roll = () => Array.from({length: 4}, () => new DieWrapper(8));
const dice = ref(roll());
</script>

<template>
  <h1>Let's have a game of twenty-one!</h1>
  <div class="flex center">
    <Die v-for="die in dice" :faceValue="die.value()"/>
  </div>
  <button type="button" @click="dice = roll()">Reroll</button>
  <h1>
    {{dice.reduce((sum, die) => sum + die.value(), 0)}}
    <span v-if="dice.reduce((sum, die) => sum + die.value(), 0) < 21">🎉</span>
    <span v-else>😥</span>
  </h1>
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
