import React from "react";
import c from "./About.module.css";

export default function About() {
    return (
        <section className={c.about} >
            <p>Tecnologias que tiene esta app</p>
            <ul>
                <li>React</li>
                <li>React Router</li>
                <li>Redux</li>
                <li>React Redux</li>
            </ul>
        </section>
    )
}