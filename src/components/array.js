import React from "react";
import {useState} from "react";

let data = [
    {name:'Daniyar' , age: 19},
    {name:'Altynai' , age: 15},
    {name:'Islam' , age: 16},
    {name:'Baktiyar' , age: 13},
    {name:'Ayana' , age: 17},
    {name:'Milana' , age: 18},
]

export default function Array () {
    const [start, setStart] = useState(
        data
    )

    return (
        <>
            {start.map((item) =>
                <h1>name: {item.name}, age: {item.age}</h1>
            )}
        </>
    )
}