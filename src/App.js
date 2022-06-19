import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/searchBar/SearchBar';
import Cards from './components/cards/Cards';
import { Routes, Route } from 'react-router-dom';
import About from './components/about/About';
import City from './components/city/City';

function App() {
  const [cities, setCities] = useState([]);

  const apiKey = '4ae2636d8dfbdc3044bede63951a019b';

  function onSearch(input) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apiKey}&units=metric`)
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

      const repeat = cities.find(e => e.id === city.id)

      if (data.main) {
        !repeat ? setCities( oldCities => [...oldCities, city]) : alert('YA SE ENCUENTRA ESA CIUDAD')
      }

    })
    .catch(error => {
      alert('NO SE ENCONTRO LA CIUDAD');
    })
  }

  function onClose(id) {
    setCities(oldCities => oldCities.filter(e => e.id !== id))
  }

  /* function find(id) {
    let found = cities.find(c => c.id === parseInt(id));
    return found ? found : null;
  } */

  return (
    <div className="App">
      <header>
        <SearchBar onSearch={onSearch} />
      </header>
      <main>
        <Routes>
          <Route
            path='/ciudad/:ciudadId'
            element={ <City />}
          />
          <Route
            path='/about'
            element={ <About />}
          />
          <Route
            path='/'
            element={ <Cards cities={cities} onClose={onClose} />}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
