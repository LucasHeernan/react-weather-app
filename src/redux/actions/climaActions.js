import { OBTENER_CIUDAD, MAS_DETALLES, ELIMINAR_CIUDAD, CLEAR_DETAILS } from "../action-types/actionTypes";

const apiKey = 'f04ac54b99ccc56ac6f1b07c0fbc336d';

export function obtenerCiudad(ciudadId) {
    return function(dispatch) {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudadId}&appid=${apiKey}&units=metric`)
        .then(resp => resp.json())
        .then(data => {
            const city = {
                name: data.name,
                temp: Math.round(data.main.temp),
                img: data.weather[0].icon,
                description: data.weather[0].description,
                min: Math.round(data.main.temp_min),
                max: Math.round(data.main.temp_max),
                humidity: data.main.humidity,
                country: data.sys.country,
                id: data.id,
            }
            return dispatch({ type: OBTENER_CIUDAD, payload: city })
        })
        .catch(error => {
            alert('NO SE ENCONTRO LA CIUDAD');
        })
    }
}

export function eliminarCiudad(ciudadId) {
    return function(dispatch) {
        return dispatch({ type: ELIMINAR_CIUDAD, payload: ciudadId })
    }
}

export function masDetalles(ciudadId) {
    return async (dispatch) => {
        try {
            const resp = await fetch(`http://api.openweathermap.org/data/2.5/weather?id=${ciudadId}&appid=${apiKey}&units=metric`)
            const data = await resp.json()
            let city = {
                name: data.name,
                temp: data.main.temp,
                weather: data.weather[0].main,
                wind: data.wind.speed,
                clouds: data.clouds.all,
                latitud: data.coord.lat,
                longitud: data.coord.lon
            }
            return dispatch({ type: MAS_DETALLES, payload: city })
        } catch (err) {
            console.log('ERROR :',err)
        }
    }
}

export function clearDetails(payload){
    return {
        type: CLEAR_DETAILS,
        payload: [],
    }
}