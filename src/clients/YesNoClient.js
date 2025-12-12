import axios from "axios";

//expresion de funcion lambda
export const consumirApi = async () => {
    const respuesta = axios.get('https://yesno.wtf/api')
        .then(resp => resp.data);
    console.log(respuesta);
    return respuesta;
}

 export async function consumirApiFachada() {
    return  await consumirApi();
}