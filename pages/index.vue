<template>
  <v-stage :config="stageSize" @wheel="handleWheel" ref="stageRef">
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

      <item-card />
    </v-layer>
  </v-stage>
</template>

<script setup>

const stageSize = {
  width: window.innerWidth,
  height: window.innerHeight
};
const GAP = computed(() => stageSize.height / 20)
const stageRef = ref(null);

const handleWheel = (e) => {
  e.evt.preventDefault();

  const stage = stageRef.value.getNode();
  const oldScale = stage.scaleX();
  const pointer = stage.getPointerPosition();

  const mousePointTo = {
    x: (pointer.x - stage.x()) / oldScale,
    y: (pointer.y - stage.y()) / oldScale,
  };

  // how to scale? Zoom in? Or zoom out?
  let direction = e.evt.deltaY > 0 ? 1 : -1;

  // when we zoom on trackpad, e.evt.ctrlKey is true
  // in that case lets revert direction
  if (e.evt.ctrlKey) {
    direction = -direction;
  }

  const scaleBy = 1.5;
  const newScale = direction > 0 ? oldScale * scaleBy : oldScale / scaleBy;

  stage.scale({ x: newScale, y: newScale });

  const newPos = {
    x: pointer.x - mousePointTo.x * newScale,
    y: pointer.y - mousePointTo.y * newScale,
  };
  stage.position(newPos);
};

const circleConfig = {
  x: window.innerWidth / 2,
  y: window.innerHeight / 2,
  radius: 70,
  fill: 'red',
  stroke: 'black',
  strokeWidth: 4,
  draggable: true
};

const handleMouseEnter = () => {
  document.body.style.cursor = 'pointer';
};

const handleMouseLeave = () => {
  document.body.style.cursor = 'default';
};

const simpleTextConfig = {
  x: window.innerWidth / 2,
  y: 15,
  text: 'Simple Text',
  fontSize: 30,
  fontFamily: 'Calibri',
  fill: 'green',
  offsetX: 60 // Approximate half width
};

const complexTextConfig = {
  x: 20,
  y: 60,
  text: "COMPLEX TEXT\n\nAll the world's a stage, and all the men and women merely players. They have their exits and their entrances.",
  fontSize: 18,
  fontFamily: 'Calibri',
  fill: '#555',
  width: 300,
  padding: 20,
  align: 'center'
};

const rectConfig = {
  x: 20,
  y: 60,
  stroke: '#555',
  strokeWidth: 5,
  fill: '#ddd',
  width: 300,
  height: 200, // Approximate height
  shadowColor: 'black',
  shadowBlur: 10,
  shadowOffsetX: 10,
  shadowOffsetY: 10,
  shadowOpacity: 0.2,
  cornerRadius: 10,
  draggable: true
};
</script>