<template>
  <div>
    <label for="id_nombre">Nombre</label>
    <input v-model="nombre" id="id_nombre" type="text" />
    <p>{{ nombre }}</p>
    <label for="id_apellido">Apellido</label>
    <input v-model="apellido" id="id_apellido" type="text" />
    <br>
    <br />

    <button v-on:click="imprimirNombre()">Imprimor nombre</button>
    <button v-on:click="agregarEstudiante()">Agregar Estudiante</button>

    <ul>
        <li v-show="nombre !== null"  
        v-for="(estu,index) in arreglo" :key="index">{{ estu.nombre }} - {{ estu.apellido }}</li>
    </ul>

    <h2>Tabla</h2>
    <table style="border: 1px solid black">
        <tr>
            <th>Nombre</th>
            <th>Apellido</th>
        </tr>
        <tr v-for="(estu, index) in arreglo" :key="index">
            <td>{{ estu.nombre }}</td>
            <td>{{ estu.apellido }}</td>
        </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nombre: "",
      apellido: "",
      arreglo: [],
    };
  },
  methods: {
    imprimirNombre() {
      console.log(this.nombre);
      console.log(this.apellido);
    },
    agregarEstudiante() {
      const estu = {
        nombre: this.nombre,
        apellido: this.apellido,
      };

      console.log("Estudiante agregado:");
      console.log(estu);
      this.arreglo.push(estu);
      this.limpiarFormulario();
    },

    limpiarFormulario() {
      this.nombre = "";
      this.apellido = "";
    },

  },


};
</script>

<style>
</style>