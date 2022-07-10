import * as React from 'react';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';

const Component8 = () => {
    const [number, setNumber] = React.useState(0)
    const [conv, setconv] = React.useState(0)

    useEffect(() => { setconv((9 / 5) * (number) + 32) }, [number])


    function conversion(e) {
        setNumber(e.target.value)
    }

    function greet(name) {
   console.log("Hello my name is " + name)
    }
    greet('nicole')
    greet('jack')

    return (

        <div>
            number: <input placeholder='Enter your number' onChange={conversion}></input>
            {conv}
        </div>

    )


}

export default Component8