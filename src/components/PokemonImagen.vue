<template>
  <div class="container">
    <img
      :src="srcImagen"
      alt="no se encinyro img"
    />
  </div>
</template>

<script>
export default {
  props: {
    pokemonId: {
      type: Number,
      required: true,
    },
  },
  computed: {
    srcImagen() {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`;
    },
  },
};
</script>

<style scoped>
.container {
  height: 650px;
}

img {
  height: 200px;
  right: 32%;
  margin-top: 3%;
}
</style>