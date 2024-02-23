import React from "react";
import {useState} from "react";

export default function Object () {
    const [name , setName] = useState({
        country: 'Kyrgyzstan',
        capital: 'Bishkek',
        population: '7 million',
        currency: 'Som',
        area: "199,900 km2"
    })

    function handleCountryOnChange (e) {
        setName ({
            ...name,
            country: e.target.value
        })
    }
    function handleCapitalOnChange (e) {
        setName ({
            ...name,
            capital: e.target.value
        })
    }
    function handlePopulationOnChange (e) {
        setName ({
            ...name,
            population: e.target.value
        })
    }
    function handleCurrencyOnChange (e) {
        setName ({
            ...name,
            currency: e.target.value
        })
    }
    function handleAreaOnChange (e) {
        setName ({
            ...name,
            area: e.target.value
        })
    }

    return (
        <>
            <input value={name.country} onChange={handleCountryOnChange}/>
            <input value={name.capital} onChange={handleCapitalOnChange}/>
            <input value={name.population} onChange={handlePopulationOnChange}/>
            <input value={name.currency} onChange={handleCurrencyOnChange}/>
            <input value={name.area} onChange={handleAreaOnChange}/>
        </>
    )

}