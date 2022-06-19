import React, { useState } from "react";
import c from "./SearchBar.module.css";
import { Link } from "react-router-dom";
import { createBrowserHistory } from 'history';

export default function SearchBar( {onSearch} ) {

    const [city, setCity] = useState('');
    const history = createBrowserHistory();

    function inicio () {
        history.push('/');
    }

    function valid (text) {
        let test = text.replaceAll(' ', '').split('').map(e => isNaN(e));
        // let test = text.split('').filter(e => e !== ' ').map(e => !parseInt(e))
        return test;
    }

    return (
        <nav className={c.container} >
            <div>
                <a href="https://www.soyhenry.com/" target="_blank" rel="noopener noreferrer">
                    <img className={c.img} src="https://assets.soyhenry.com/henry-landing/assets/Henry/logo-white.png" alt="Henry"/>
                </a>
                <Link className={c.span} to='/'>
                    <span >- Weather App</span>
                </Link>
            </div>
            <Link className={c.about} to="/about" >
                <span>Tecnologias aplicadas</span>
            </Link>
            <form onSubmit={e => {
                e.preventDefault();
                if (!city) return alert('DEBES INGRESAR UNA CIUDAD');
                if (valid(city).includes(false)) return alert('NO SE PERMITEN NÚMEROS');
                else {
                    onSearch(city);
                    setCity('');
                    inicio();
                }
            }}>
                <input
                    className={c.input}
                    onChange={e => setCity(e.target.value)}
                    value={city.toUpperCase()}
                    type="search" placeholder=" Ciudad ..."
                />
                <input
                    className={c.btn}
                    type="submit" value="Buscar"
                />
            </form>
        </nav>
    )
}