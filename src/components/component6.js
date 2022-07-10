import * as React from 'react';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';


const Component6 = () => {

    // two constants that never change
    // useEffect being used
    const [generate, setGenerate] = useState(0);
    const [rate, setrate] = useState(true);

    useEffect(() => { setrate( (Number.isInteger(generate / 2)) ) }
        , [generate]) // useEffect used when generate is triggered

    function gen() {
        setGenerate(Math.floor(Math.random() * 10))

    }


    return (
        <div>
            {generate} <br></br>
            <Button onClick={() => {gen()}} variant='outlined'>generate</Button>
            <br></br>
            even? {String(rate)} <br></br>
        </div>
    )

}

export default Component6