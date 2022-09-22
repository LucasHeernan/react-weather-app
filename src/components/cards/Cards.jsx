import React from "react";
import Card from "../card/Card";
import c from "./Cards.module.css";

import { connect } from "react-redux";

// export default function Cards({cities, onClose}) {
//     if (cities.length) {
//         return (
//             <section className={c.container} >
//                 {
//                     cities.map(e =>
//                         <Card
//                             key={e.id}
//                             name={e.name}
//                             temp={e.temp}
//                             img={e.img}
//                             description={e.description}
//                             max={e.max}
//                             min={e.min}
//                             humidity={e.humidity}
//                             country={e.country}
//                             onClose={() => onClose(e.id)}
//                             id={e.id}
//                         />
//                     )
//                 }
//             </section>
//         )
//     } else {
//         return (
//             <div>Sin ciudades</div>
//         )
//     }
// }

export function Cards({ciudades}) {
    if (ciudades.length) {
        return (
            <section className={c.container} >
                {
                    ciudades.map(e =>
                        <Card
                            key={e.id}
                            name={e.name}
                            temp={e.temp}
                            img={e.img}
                            description={e.description}
                            max={e.max}
                            min={e.min}
                            humidity={e.humidity}
                            country={e.country}
                            id={e.id}
                        />
                    )
                }
            </section>
        )
    } else {
        return (
            <div>Sin ciudades</div>
        )
    }
}

function mapStateToProps(state) {
    return {
        ciudades: state.ciudades
    }
}


export default connect ( mapStateToProps, null ) (Cards)