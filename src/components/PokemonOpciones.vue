<template>
    <div class="oopciones_container">
         <ul>
                <li  @:click="pasarPadre(pokemon.id)" v-for="pokemon in listaPokemons" :key="pokemon.id">{{ pokemon.nombre }}</li>
            
        </ul>
    </div>
</template>

<script>

export default {
    props: {
        listaPokemons: {
            type: Array,
            required: true
        }
    },

    methods: {
        pasarPadre(id){
            console.log("Opcion seleccionada: " + id);
            this.$emit('seleccionado',id);
        }
      
    },

}
</script>

<style scoped>
.oopciones_container{
    display: flex;
    justify-content: center;
}   

ul{
    list-style: none;
}
li{
    background-color: #f0f0f0;
    margin: 5px 0;
    padding: 7px;
    border-radius: 5px;
    border : 1px solid #ccc;
    cursor: pointer;
    width: 120px;
    text-align: center;
}
</style>