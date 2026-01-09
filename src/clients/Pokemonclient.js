import axios from "axios";

export const consumirApiPkemon = async (id) => {
    const respuesta = axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then(r => r.data);
    console.log(respuesta);
    return respuesta;
}

function obtenerNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const obtenerVectorNumerico = () => {
    const vector = [];
    for (let i = 0; i < 4; i++) {
        vector[i] = obtenerNumeroAleatorio(1, 600);
    }
    return vector;
}
const obtenerVectorPokemon = async (vectorNumerico) => {
    const data1 = await consumirApiPkemon(vectorNumerico[0]);
    const data2 = await consumirApiPkemon(vectorNumerico[1]);
    const data3 = await consumirApiPkemon(vectorNumerico[2]);
    const data4 = await consumirApiPkemon(vectorNumerico[3]);

    const obj1 = {
        nombre: data1.name,
        id: data1.id,
    }
    const obj2 = {
        nombre: data2.name,
        id: data2.id,
    }
    const obj3 = {
        nombre: data3.name,
        id: data3.id,
    }
    const obj4 = {
        nombre: data4.name,
        id: data4.id,
    }
    return [obj1, obj2, obj3, obj4];

}

export async function obtenerVectorPokemonFachada() {
    const vectorPokemon = obtenerVectorNumerico();
    return await obtenerVectorPokemon(vectorPokemon);
}

export function obtenerNumeroAleatorioFachada(min, max) {
    return obtenerNumeroAleatorio(min, max);
}