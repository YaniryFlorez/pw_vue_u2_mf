<template>
      <h1> Has ganado</h1>
  <div class="container">
    <PokemonOpciones
      v-on:seleccionado="evaluarGanador($event)"
      :listaPokemons="pokemonArr"
    />
    <PokemonImagen :pokemonId="this.pokemonGanador" />

  </div>
</template>

<script>
import PokemonImagen from "../components/PokemonImagen.vue";
import PokemonOpciones from "../components/PokemonOpciones.vue";
import {
  obtenerNumeroAleatorioFachada,
  obtenerVectorPokemonFachada,
} from "../clients/Pokemonclient.js";
export default {
  components: {
    PokemonImagen,
    PokemonOpciones,
  },
  data() {
    return {
      pokemonArr: [],
      pokemonGanador: 0,
      idGanador: null,
      mensaje: "",
    };
  },
  async mounted() {
    console.log("Mounted de PokemonView");
    this.iniciarJuego();
  },

  methods: {
    async iniciarJuego() {
      this.pokemonArr = await obtenerVectorPokemonFachada();

      const idAleatorio = obtenerNumeroAleatorioFachada(0, 3);
      this.pokemonGanador = this.pokemonArr[idAleatorio].id;
      console.log("ID del pokemon ganador: " + this.pokemonGanador);
    },
    evaluarGanador(idGanador) {
      console.log("ID ganador desde el padre: " + this.idGanador);
      if (idGanador === this.pokemonGanador) {
        console.log("¡Has ganado!");
        this.mensaje = "¡Has ganado!";
        this.mensaje.style.visibility = "visible";
       
      } else {

         console.log("¡Has perdido! Inténtalo de nuevo.");
         this.mensaje = "¡Has perdido! Inténtalo de nuevo.";

      }
    },
  },
};
</script>

<style scoped>

</style>