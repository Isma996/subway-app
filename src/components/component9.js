import * as React from 'react';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';

const Component9 = () => {

const [total, setTotal]= React.useState(0);
const [breadPrice, setBreadPrice] = React.useState({italian:3, honey:2, oaty:1})
const [isDisabled, setIsDisabled] = React.useState(false);


function addPrice (price){
    setTotal(price + total)
    setIsDisabled(true)
}



return (
        <div>
<h1>LeSUBway2</h1>

<br></br>
<h2>choose your bread</h2>
<Button disabled={isDisabled} onClick={() => addPrice(breadPrice.italian)} variant='outlined'>italian</Button>
<Button  disabled={isDisabled} variant='outlined'>honey</Button>
<Button  disabled={isDisabled} variant='outlined'>oaty</Button>
<br></br><Button> Cancel bread selection </Button>
<h3>choose your salad</h3>
<Button variant='outlined'>lettuce</Button>
<Button variant='outlined'>cucumber</Button>
<Button variant='outlined'>tomato</Button><br></br>
<div  style={{marginLeft: "-244px"}}>
<Button  variant='outlined'>-</Button><br></br>
<Button variant='outlined'>-</Button><br></br>
<Button variant='outlined'>-</Button><br></br>
</div>
<h4>choose your sauce</h4>
<Button variant='outlined'>ranch</Button>
<Button variant='outlined'>chili</Button>
<Button variant='outlined'>southwest</Button><br></br>
<div style={{marginLeft: "-215px"}}>
<Button variant='outlined'>-</Button><br></br>
<Button variant='outlined'>-</Button><br></br>
<Button variant='outlined'>-</Button><br></br>
<div>your total is: {total} </div>
</div>
</div>





    )
}
export default Component9