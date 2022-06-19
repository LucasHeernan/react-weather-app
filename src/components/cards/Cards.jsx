import React from "react";
import Card from "../card/Card";
import c from "./Cards.module.css";

export default function Cards({cities, onClose}) {
    if (cities) {
        return (
            <section className={c.container} >
                {
                    cities.map(e =>
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
                            onClose={() => onClose(e.id)}
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
