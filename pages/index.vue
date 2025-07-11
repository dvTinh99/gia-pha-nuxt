<template>
  <v-stage :config="stageSize" @wheel="handleWheel">
  <v-layer>
    <template v-for="i in stageSize.height">
      <v-line :config="{
        points: [0, (0 + i) * GAP, stageSize.width, (0 + i) * GAP],
        stroke: 'black',
        strokeWidth: 0.1,
      }" />
    </template>
    <template v-for="i in stageSize.width">
      <v-line :config="{
        points: [(0 +i ) * GAP, 0, (0 +i ) * GAP, stageSize.height],
        stroke: 'black',
        strokeWidth: 0.1,
      }" />
    </template>
  </v-layer>
    <v-layer>
    </v-layer>
  </v-stage>
</template>

<script setup>

const stageSize = {
  width: window.innerWidth,
  height: window.innerHeight
};
const GAP = computed(() => stageSize.height / 20)

const zoom = ref(1)

// const handleWheel = (e) => {
//   // how to scale? Zoom in? Or zoom out?
//   let direction = e.evt.deltaY > 0 ? 1 : -1;

//   if(direction == 1) {
//     console.log('zoom in');
//     zoom ++
//   } else {
//     console.log('zoom out');
//     zoom --
//   }
// }
</script>