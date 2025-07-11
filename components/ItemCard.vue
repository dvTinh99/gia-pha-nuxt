<template>
    <v-group :config="groupConfig">
        <v-rect :config="rectConfig" />
        <v-circle :config="circleConfig" />
    </v-group>
</template>

<script setup>

const x = 50
const y = 50
const stageSize = {
  width: window.innerWidth,
  height: window.innerHeight
};

const groupConfig = {
  x: x,
  y: y,
  draggable: true
};

const circleConfig = {
  x: x + 50,
  y: y + 50,
  radius: 30,
  fill: 'red'
};

const rectConfig = {
  x: x,
  y: y,
  width: 300,
  height: 100,
  fill: 'green'
};
</script>