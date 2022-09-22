// import React, { useState } from "react";
// import { useParams } from "react-router-dom";
// import c from "./City.module.css"

// export default function City() {

//     const clave = useParams();
//     const apiKey = '4ae2636d8dfbdc3044bede63951a019b';
//     const [city, setCity] = useState();

//     fetch(`http://api.openweathermap.org/data/2.5/weather?id=${clave.ciudadId}&appid=${apiKey}&units=metric`)
//     .then(resp => resp.json())
//     .then(data => {
//         const miami = {
//             name: data.name,
//             temp: data.main.temp,
//             weather: data.weather[0].main,
//             wind: data.wind.speed,
//             clouds: data.clouds.all,
//             latitud: data.coord.lat,
//             longitud: data.coord.lon
//         }
//         setCity(miami);
//     })

//     return !city ? (<h1 className={c.container} >Cargando...</h1>) :
//     (
//         <article className={c.container} >
//             <h2>{city.name}</h2>
//             <section className="info">
//                 <p>Temperatura: {city.temp} ºC</p>
//                 <p>Clima: {city.weather}</p>
//                 <p>Viento: {city.wind} km/h</p>
//                 <p>Cantidad de nubes: {city.clouds}</p>
//                 <p>Latitud: {city.latitud}º</p>
//                 <p>Longitud: {city.longitud}º</p>
//             </section>
//         </article>
//     )
// }

// import React from "react";
// import c from "./City.module.css"

// export default function City({name, temp, clima, wind, clouds, lat, lon}) {

//     return (
//         <article className={c.container} >
//             <h2>{name}</h2>
//             <section className="info">
//                 <p>Temperatura: {temp} ºC</p>
//                 <p>Clima: {clima}</p>
//                 <p>Viento: {wind} km/h</p>
//                 <p>Cantidad de nubes: {clouds}</p>
//                 <p>Latitud: {lat}º</p>
//                 <p>Longitud: {lon}º</p>
//             </section>
//         </article>
//     ) 
// }

import React from "react";
import c from "./City.module.css";
import { useParams } from "react-router-dom";
import { masDetalles, clearDetails } from "../../redux/actions/climaActions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function City() {

    const dispatch = useDispatch();
    const { ciudadId } = useParams();
    const ciudad = useSelector((state) => state.ciudad);
    
    useEffect(() => {
        dispatch(masDetalles(ciudadId));
        return () => dispatch(clearDetails())
    }, [dispatch, ciudadId])
    
    if (Object.keys(ciudad).length < 2) {
        return (
            <h1 className={c.container} >Cargando...</h1>
        )
    }
    return (
        <article className={c.container} >
            <h2>{ciudad.name}</h2>
            <section className="info">
                <p>Temperatura: {ciudad.temp} ºC</p>
                <p>Clima: {ciudad.weather}</p>
                <p>Viento: {ciudad.wind} km/h</p>
                <p>Cantidad de nubes: {ciudad.clouds}</p>
                <p>Latitud: {ciudad.latitud}º</p>
                <p>Longitud: {ciudad.longitud}º</p>
            </section>
        </article>
    )
}


// export default function Cards() {
//     const dispatch= useDispatch();
//     const error= useSelector(state=>state.error);

//     useEffect(()=>{
//         dispatch(getAllCharacters())
//     },[]);
        
//     let characters=useSelector((state)=> state.characters)
    
//     return (
//     <div className='Cards'>
//         {
//         (error!=='') ? <label className='error'>error {error.status} {error.data.error}</label> :
//         characters.map(character=>(
//             <Card key={character.id} id={character.id} name={character.name} status={character.status} image={character.image}/>
//         ))}
        
//     </div>
//     )
// }