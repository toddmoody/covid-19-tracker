import React, { useEffect, useState } from 'react';
import { Card, CardContent, FormControl, MenuItem, Select } from '@material-ui/core';
import infoBox from './Infobox'
import Map from './Map'
import './App.css';
import Infobox from './Infobox';

function App() {

  const [countries, setCountries] = useState([])
  const [country, setCountry] = useState(['worldwide']) 

  useEffect(() => {
    const getCountriesData = async () => {
      await fetch('https://disease.sh/v3/covid-19/countries')
      .then((response) => response.json())
      .then((data) => {
        const countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2
          }));
          setCountries(countries);
      });
    };

    getCountriesData();
  }, []);


  const onCountryChange = (event) => {
    const countryCode = event.target.value

    setCountry(countryCode)
  }

  return ( 
    <div className="app">
      <div className="app__left">
        <div className="app__header">
          <h1>Covid-19 tracker</h1>
          <FormControl className="app__dropdown">
            <Select
              variant="outlined"
              onChange={onCountryChange}
              value={country}          
              >
              <MenuItem value="worldwide">Worldwide</MenuItem>
              {
                countries.map((country) => (
                  <MenuItem value={country.value}>{country.name}</MenuItem>
                ))
              }
            </Select>
          </FormControl>
        </div>
        <div className="app__stats">
          <Infobox title="Coronavirus Cases" cases={123} total={2000} />
          <Infobox title="Recovered" cases={456} total={3000} />
          <Infobox title="Deaths" cases={124} total={5000} />
        </div>
        <Map />
      </div>
      <Card className="app__right">
        <CardContent>
          <h3>Live cases by country</h3>
          <h3>Worldwide countries</h3>
        </CardContent>
      </Card> 
    </div>
  );
}

export default App;
