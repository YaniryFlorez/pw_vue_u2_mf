<template>
  <div class="container">
    <PokemonView/>
  </div>
</template>

<script>
import DirectivasView from "../src/views/DirectivasView.vue";
import PreguntaView from "../src/views/PreguntaView.vue";
import PokemonView from "../src/views/PokemonView.vue";
export default {
  components: {
    DirectivasView,
    PreguntaView,
    PokemonView,
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