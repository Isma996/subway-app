import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';

const Component3 = () => {

    const [total, settotal] = React.useState(0);
    const [num1, setnum1] = React.useState(0);
    const [num2, setnum2] = React.useState(0);

    function changenum1(e) {
        setnum1(e.target.value)
    }
    function changenum2(e) {
        setnum2(e.target.value)
    }

    function multiply() {
        settotal(parseInt(num1) * parseInt(num2))
    }

    function divide() {
        settotal(parseInt(num1) / parseInt(num2))
    }

    function plus() {
        settotal(parseInt(num1) + parseInt(num2))
    }

//parseInt used to turn obj into num
        function minus() {
            settotal(parseInt(num1) - parseInt(num2))
        }

        return (
            <div>
                <br />
                <br />
                {total} <br /><br />

                <input placeholder={num1} onChange={changenum1}></input> <br /> <br />
                <input placeholder={num2} onChange={changenum2}></input> <br /> <br />
                <Button onClick={plus} variant='outlined'>+</Button>
                <Button onClick={minus} variant='outlined'>-</Button>
                <Button onClick={multiply} variant='outlined'>*</Button>
                <Button onClick={divide} variant='outlined'>/</Button>
            </div>

        )
    
}

export default Component3