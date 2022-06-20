import { OBTENER_CIUDAD, MAS_DETALLES } from "../action-types/actionTypes";     //  Traigo los tipos de acciones

const initialState = {
    ciudades: [],
    ciudad: {}
}

const climaReducer = (state = initialState, action) => {
    switch (action.type) {
        case OBTENER_CIUDAD:
            return {
                ...state,
                ciudades: action.payload
            }
        case MAS_DETALLES:
            return state;
        default:
            return state;
    }
}

export default climaReducer;