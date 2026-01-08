<template>
  <div class="container">
    <PokemonOpciones />
    <PokemonImagen :pokemonId="pokemonId" />
  </div>
</template>

<script>
import PokemonImagen from "../components/PokemonImagen.vue";
import PokemonOpciones from "../components/PokemonOpciones.vue";
export default {
  components: {
    PokemonImagen,
    PokemonOpciones,
  },
  data() {
    return {
      pokemonId: 654,
    };
  },
};
</script>

<style scoped>

</style>