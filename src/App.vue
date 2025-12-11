<template>
  <div class="container">
    <PreguntaView />
  </div>
</template>

<script>
import DirectivasView from "../src/views/DirectivasView.vue";
import PreguntaView from "../src/views/PreguntaView.vue";
export default {
  components: {
    DirectivasView,
    PreguntaView,
  },
};
</script>

<style >
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>