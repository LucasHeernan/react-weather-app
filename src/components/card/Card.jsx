import React from "react";
import c from "./Card.module.css";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { eliminarCiudad } from "../../redux/actions/climaActions";

// export default function Card({name, temp, img, description, max, min, humidity, country, onClose, id}) {
//     return (
//         <article className={c.container} >
//             <button className={c.btn} onClick={onClose} >X</button>
//             <div className={c.temp} >
//                 <section>
//                     <h2>{temp}°</h2>
//                     <Link className={c.section} to={`/ciudad/${id}`} >
//                         <h3>{name}</h3>
//                     </Link>
//                 </section>
//                 <section>
//                     <img className={c.img} src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="img" />
//                     <p className={c.p} >{description}</p>
//                 </section>
//             </div>
//             <div className={c.detail} >
//                 <section>
//                     <p>Max</p>
//                     <p>{max}°</p>
//                 </section>
//                 <section>
//                     <p>Min</p>
//                     <p>{min}°</p>
//                 </section>
//                 <section>
//                     <p>Humidity</p>
//                     <p>{humidity} %</p>
//                 </section>
//                 <section>
//                     <p>Country</p>
//                     <p>{country}</p>
//                 </section>
//             </div>
//         </article>
//     )
// }

export function Card({name, temp, img, description, max, min, humidity, country, id, eliminarCiudad}) {
    return (
        <article className={c.container} >
            <button className={c.btn} onClick={() => eliminarCiudad(id)} >X</button>
            <div className={c.temp} >
                <section>
                    <h2>{temp}°</h2>
                    <Link className={c.section} to={`/ciudad/${id}`} >
                        <h3 /* onClick={() => masDetalles(id)} */ >{name}</h3>
                    </Link>
                </section>
                <section>
                    <img className={c.img} src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="img" />
                    <p className={c.p} >{description}</p>
                </section>
            </div>
            <div className={c.detail} >
                <section>
                    <p>Max</p>
                    <p>{max}°</p>
                </section>
                <section>
                    <p>Min</p>
                    <p>{min}°</p>
                </section>
                <section>
                    <p>Humidity</p>
                    <p>{humidity} %</p>
                </section>
                <section>
                    <p>Country</p>
                    <p>{country}</p>
                </section>
            </div>
        </article>
    )
}


function mapDispatchToProps(dispatch) {
    return {
        eliminarCiudad: (id) => dispatch(eliminarCiudad(id))
        /* masDetalles: (ciudadId) => dispatch(masDetalles(ciudadId)) */
    }
}

export default connect ( null, mapDispatchToProps ) (Card)
