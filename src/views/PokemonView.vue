<template>
  <div class="container">
    <PokemonOpciones
      v-on:seleccionado="evaluarGanador($event)"
      :listaPokemons="pokemonArr"
    />
    <PokemonImagen v-if="mostrar" :pokemonId="this.pokemonGanador" />

    <button @click="destruir()">Destruir</button>
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
      mostrar: true,
    };
  },
/*  crea el componente  */
  beforeCreate() {
    console.log("BeforeCreate, apenas se inicia la instacia del componente");
  },

created() {
    console.log("Created, ya se creo la instancia del componente");
  },
/*  monta el componente, renderiza el componente  */
beforeMount() {
    console.log("BeforeMount, antes de renderizar un elemento html");
  },

  mounted() {
      console.log("Mounted, ya se rederizo el componente en el html");
    console.log("Mounted de PokemonView");
    this.iniciarJuego();
  },
/* Actualizacion de un componente  */
beforeUpdate() {
    console.log("BeforeUpdate, cuando cambio un data, un prop, antes de renderizarse");
  },

  updated() {
    console.log("Updated, se actualizo despues de la re- renderizacion");
  },



  methods: {
    destruir() {
      this.mostrar = false;
    },

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