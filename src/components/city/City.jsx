import React, { useState } from "react";
import { useParams } from "react-router-dom";
import c from "./City.module.css"

export default function City() {

    const clave = useParams();
    const apiKey = '4ae2636d8dfbdc3044bede63951a019b';
    const [city, setCity] = useState();

    fetch(`http://api.openweathermap.org/data/2.5/weather?id=${clave.ciudadId}&appid=${apiKey}&units=metric`)
    .then(resp => resp.json())
    .then(data => {
        const miami = {
            name: data.name,
            temp: data.main.temp,
            weather: data.weather[0].main,
            wind: data.wind.speed,
            clouds: data.clouds.all,
            latitud: data.coord.lat,
            longitud: data.coord.lon
        }
        setCity(miami);
    })

    return !city ? (<h1 className={c.container} >Cargando...</h1>) :
    (
        <article className={c.container} >
            <h2>{city.name}</h2>
            <section className="info">
                <p>Temperatura: {city.temp} ºC</p>
                <p>Clima: {city.weather}</p>
                <p>Viento: {city.wind} km/h</p>
                <p>Cantidad de nubes: {city.clouds}</p>
                <p>Latitud: {city.latitud}º</p>
                <p>Longitud: {city.longitud}º</p>
            </section>
        </article>
    )
}

