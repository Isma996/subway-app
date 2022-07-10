import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';

const Component1 = () => {
    const [age, setAge] = React.useState(25);
    const [finalAge, setFinalAge] = React.useState(undefined);
    const [chosenName, setChosenName] = React.useState(undefined);
    const [currentName, setCurrentName] = useState(undefined);
    const [angles, setCurrentangle] = useState(undefined);
    const [width, setWidthChange] = useState(undefined);
    const [height, setHeightchange] = useState(undefined);

    function onNameChange(e) {
        setCurrentName(e.target.value)


    }

    function kliki() {

        setChosenName(currentName)
    }

    function updateAge() {
        setFinalAge(age)
    }
    function onagechange(e) {
        setAge(e.target.value)
    }
    function onWidthChange(e) {
        setWidthChange(e.target.value)
    }

    function onHeightChange(e) {
        setHeightchange(e.target.value)
    }

    function angle() {
        
        setCurrentangle(width*height)

    }

    return (
        <div>

            Name: <input placeholder='Enter your name' onChange={onNameChange}></input>
            <input placeholder='Enter your age' onChange={onagechange} ></input>
            <Button onClick={kliki} variant='outlined'>Update name</Button>
            <Button onClick={updateAge} variant='outlined'>update age</Button>
            <br></br>

            <input placeholder='enter width' onChange={onWidthChange} ></input>
            <input placeholder='enter height' onChange={onHeightChange}></input>
            <Button onClick={angle} variant='outlined'>update angle</Button>

            <br />
            <br />
            your chosen age is <b>{finalAge}</b>
            <br />
            your chosen name is <b>{chosenName}</b>
            <br />
            <br />
            your anglez is <b>{angles}</b>
        </div>
    )
}

export default Component1