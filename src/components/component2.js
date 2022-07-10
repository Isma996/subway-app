import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';

 const Component2 = () => {
    const [num, setnum] = React.useState(0);
    const [num2, setnum2] = React.useState(0);
    const [num3, setnum3] = React.useState(num + num2)

    function onNumberChange(e) {
        setnum(e.target.value)
    }

    function onNumber2Change(e) {
        setnum2(e.target.value)
    }
 
    function add(){
        setnum3(parseInt(num) + parseInt(num2));
        
    }
    return (
        <div>
            Number: <input placeholder='Enter num 1' onChange={onNumberChange}></input>
            Number2: <input placeholder='Enter num 2' onChange={onNumber2Change}></input>
            <Button onClick={add} variant='outlined'>ADD</Button>
            Total:{num3}


        </div>

        
        
    )
    }

export default Component2