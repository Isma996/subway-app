import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';

const Component4 = () => {

    // two constants that never change
    const [searching, setsearch] = React.useState(undefined);
    const [searchingyout, setsearchyout] = React.useState(undefined);

// function that searches youtube when typed 
    function Lookdown(e){
        setsearchyout("https://www.youtube.com/results?search_query=" + (e.target.value))
        
    }
    // function that searches google when typed
    function Lookup(e) {
        setsearch("https://www.google.com/search?q=" + (e.target.value))
    }
//function that opens youtube search
    function JUL(){
        window.open(searchingyout)
    }
    // function that opens google
    function gogo() {
        window.open(searching)
    }

    //opens facebook
    function open() {
        window.open("http://www.facebook.com")

    }
    //opens youtube
    function YOYO(){
        window.open("http://youtube.com")
    }
//opens insta
    function insta(){
        window.open("http://instagram.com")
        
    }



    return (


        <div> <br></br>
            <h1>weblink</h1>
            <input placeholder="" onChange={Lookup}></input>
            <Button onClick={gogo} variant='outlined'>google search</Button>
            <br></br>
            <br></br>
            <input placeholder="" onChange={Lookdown}></input>
            <Button onClick={JUL} variant='outlined'>youtube search</Button>
            <br></br>
            <br></br>
            <Button onClick={open} variant='outlined'>facebook home</Button>
            <Button onClick={YOYO} variant='outlined'>youtube home</Button>
            <Button onClick={insta} variant='outlined'>instagram home</Button>

        </div>
    )




}






export default Component4




