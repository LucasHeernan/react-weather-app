import React from "react";
import City from "../city/City";
import c from "./Cities.module.css";
import { connect } from "react-redux";

export function Cities({ciudad}) {

    return Object.keys(ciudad).length == 0 ? (<h1 className={c.container} >Cargando...</h1>) :
    (
        <article className={c.container} >
            {
                <City
                    name={ciudad.name}
                    temp={ciudad.temp}
                    clima={ciudad.weather}
                    wind={ciudad.wind}
                    clouds={ciudad.clouds}
                    lat={ciudad.latitud}
                    lon={ciudad.longitud}
                />
            }
        </article>
    )
}

function mapStateToProps(state) {
    return {
        ciudad: state.ciudad
    }
}

export default connect( mapStateToProps, null )(Cities)