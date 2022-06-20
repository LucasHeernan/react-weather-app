import { OBTENER_CIUDAD, MAS_DETALLES } from "../action-types/actionTypes";

export function obtenerCiudad() {
    const ciudad = [
        {
            id: 1,
            nombre: 'leche',
            apellido: 'mucha leche'
        }
    ]

    return {
        type: OBTENER_CIUDAD,
        payload: ciudad
    }
}

export function masDetalles(id){
    const ciudad = {
        masInfo: 'blablabla',
        detalle: 123
    }

    return {
        type: MAS_DETALLES,
        payload: ciudad
    }
}