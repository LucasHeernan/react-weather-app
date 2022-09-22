import { OBTENER_CIUDAD, MAS_DETALLES, ELIMINAR_CIUDAD } from "../action-types/actionTypes";     //  Traigo los tipos de acciones

const initialState = {
    ciudades: [],
    ciudad: {},
    error: ''
}

function dontRepeat(arr, id) {
    const repeat = arr.find(e => e.id === id)
    return repeat
}


const climaReducer = (state = initialState, action) => {
    switch (action.type) {
        case OBTENER_CIUDAD:
            return (
                dontRepeat(state.ciudades, action.payload.id) ? (
                    alert('YA SE ENCUENTRA ESA CIUDAD'),
                    {...state}
                ) : {
                    ...state,
                    ciudades: [...state.ciudades, action.payload]
                }
            )
        case ELIMINAR_CIUDAD:
            return {
                ...state,
                ciudades: state.ciudades.filter(e => e.id !== action.payload)
            }
        case MAS_DETALLES:
            return {
                ...state,
                ciudad: action.payload
            }
        default:
            return state;
    }
}

export default climaReducer;