<template>
   <div>
    <Contador/>
    <Contador/>
    <Contador tit="Contador 1" v-bind:inicio="4+4" v-bind:mostrar="true"/>
    <Contador tit="Contador 2" :inicio="4" :mostrar="false"/>
  </div>
</template>

<script>
import Contador from '../components/Contador.vue'
export default {
    components:{
        Contador,
    },

};
</script>

<style>

</style>