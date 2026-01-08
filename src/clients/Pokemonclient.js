import axios from "axios";

export const consumirApiPkemon = async (id) => {
    const respuesta = axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then(r => r.data);
    console.log(respuesta);
    return respuesta;
}

function obtenerNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const optenerVectorNumerico = () => {
    const vector = [];
    for (let i = 0; i < 4; i++) {
        vector[i] = obtenerNumeroAleatorio(1, 600);
    }
    return vector;
}
const obtenerVectorPokemon=(vectorNumerico)=>{
    const data1 = consumirApiPkemon(vectorNumerico[0]);
    const data2 = consumirApiPkemon(vectorNumerico[1]);
    const data3 = consumirApiPkemon(vectorNumerico[2]);
    const data4 = consumirApiPkemon(vectorNumerico[3]);
    
    const obj1 = {
        nombre: data1.name,
        imagen: data1.id,
    }
    
}

export async function consumirFachada() {
   return;
}