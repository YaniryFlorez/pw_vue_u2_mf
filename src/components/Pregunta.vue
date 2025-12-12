<template>
  <div>
    <img v-if="imagen"
      :src=imagen
      alt="no se carga la imagen"
    />
    <div class="oscuro"></div>
  </div>

  <div class="pregunta-container">
    <input v-model="pregunta" type="text" placeholder="Haz una pregunta?" />
    <p>Recuerda terminar con el signo de interrogación (?)</p>
    <h2>Seré millonario?</h2>
    <h1>{{ respuesta }}</h1>
  </div>
</template>

<script>
import { consumirApiFachada } from "@/clients/YesNoClient";
export default {
  data() {
    return {
      pregunta: null,
      respuesta: null,
      imagen: null,
    };
  },
  watch: {
    pregunta(value, oldValue) {
      if (value.includes("?")) {
        this.respuesta = "Pensando...";
        this.consumirApi();
      }
    },
  },
  methods: {
    async consumirApi() {
      const resp = await consumirApiFachada();
      console.log(resp);
      console.log(resp.answer);
      this.respuesta = resp.answer;
      this.imagen = resp.image;

    },
  },
};
</script>

<style>
img, .oscuro {
  width: 100vw;
  height: 100vh;
  max-height: 100%;
  max-width: 100%;
  position: fixed;
  left: 0px;
  top: 0px;
  /* z-index: -1;  */
}
.oscuro {
  background-color: rgba(0, 0, 0, 0.5);
}
.pregunta-container {
  position: relative;
  display: flex;
  flex-direction: column;
  color: white;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}
input {
  padding: 10px;
  border-radius: 5px;
  border: none;
  margin-bottom: 10px;
  width: 300px;
  font-size: 16px;
}
input:focus {
  outline: none;
}
p {
  margin-top: 60px;
  font-size: 20px;
}
</style>