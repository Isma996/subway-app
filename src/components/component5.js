import * as React from 'react';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';


const Component5 = () => {
   //constants used throughout
   const [total, setTotal] = React.useState(0);
   const [isDisabled, setIsDisabled] = React.useState(false);


   const [breadSelection, setBreadSelection] = React.useState(undefined);
   const [bP, setbP] = useState([2, 1, 3])
   const [cbP, setcbP] = useState(0)



   const [tomatoCount, setTomatoCount] = React.useState(0);
   const [lettuceCount, setLettuceCount] = React.useState(0);
   const [cucumberCount, setCucumberCount] = React.useState(0);

   const [chiliCount, setChiliCount] = React.useState(0);
   const [ranchCount, setRanchCount] = React.useState(0);
   const [southwestCount, setSouthwestCount] = React.useState(0);

   const [tomatoeDisably, setTomatoDisably] = React.useState(true)
   const [lettuceDisably, setLettuceDisably] = React.useState(true)
   const [cucumberDisably, setCucumberDisably] = React.useState(true)

   const [chiliDisably, setChiliDisably] = React.useState(true)
   const [ranchDisably, setRanchDisably] = React.useState(true)
   const [southwestDisably, setSouthwestDisably] = React.useState(true)



   useEffect(() => {
      if (chiliCount === 0) {
         setChiliDisably(true)
      }
      if (tomatoCount === 0) {
         setTomatoDisably(true)
      }
      if (lettuceCount === 0) {
         setLettuceDisably(true)
      }
      if (cucumberCount === 0) {
         setCucumberDisably(true)
      }
      if (southwestCount === 0) {
         setSouthwestDisably(true)
      }
      if (ranchCount === 0) {
         setRanchDisably(true)
      }
   }, [chiliCount, tomatoCount, lettuceCount, cucumberCount, southwestCount, ranchCount,]);


   function handleAddTomato() {
      handleAddPrice(0.3);
      setTomatoCount(tomatoCount + 1)
      setTomatoDisably(false)

   }

   function handleAddLettuce() {
      handleAddPrice(0.4);
      setLettuceCount(lettuceCount + 1)
      setLettuceDisably(false)
   }
   function handleAddCucumber() {
      handleAddPrice(0.2);
      setCucumberCount(cucumberCount + 1)
      setCucumberDisably(false)
   }
   function handleAddChili() {
      handleAddPrice(0.1);
      setChiliCount(chiliCount + 1)
      setChiliDisably(false)
   }

   function handleAddRanch() {
      handleAddPrice(0.2);
      setRanchCount(ranchCount + 1)
      setRanchDisably(false)
   }

   function handleAddSouthwest() {
      handleAddPrice(0.5);
      setSouthwestCount(southwestCount + 1)
      setSouthwestDisably(false)
   }


   function handleMinusTomato() {
      if (total > 0.00 && tomatoCount > 0) {
         handleAddPrice(-0.3)
      }
      setTomatoCount(tomatoCount - 1)

   }

   function handleMinusLettuce() {
      console.log(lettuceCount)
      if (total > 0.00 && lettuceCount > 0) {
         handleAddPrice(-0.4)

      }

      if (lettuceCount === 0) {
         setLettuceDisably(true)
         return
      }
      setLettuceCount(lettuceCount - 1)

   }
   function handleMinusCucumber() {
      if (total > 0.00 && cucumberCount > 0) {
         handleAddPrice(-0.2)
      }
      if (cucumberCount === 0) {
         setCucumberDisably(true)
         return
      }
      setCucumberCount(cucumberCount - 1)
   }

   function handleMinusChili() {
      if (total > 0.00 && chiliCount > 0) {
         handleAddPrice(-0.1)
      }
      if (chiliCount === 0) {
         setChiliDisably(true)
         return
      }
      setChiliCount(chiliCount - 1)

   }
   function handleMinusRanch() {
      if (total > 0.00 && ranchCount > 0) {
         handleAddPrice(-0.2)

      }
      if (ranchCount === 0) {
         setRanchDisably(true)
         return
      }
      setRanchCount(ranchCount - 1)

   }

   function handleMinusSouthwest() {
      if (total > 0.00 && southwestCount > 0) {
         handleAddPrice(-0.5)
      }
      if (southwestCount === 0) {
         setSouthwestDisably(true)
         return
      }
      setSouthwestCount(southwestCount - 1)


   }


   function handleAddPrice(price, disabled, bread) {
      setTotal((Number(total) + Number(price)).toFixed(2));


      if (disabled) {
         var tbp = price
         setIsDisabled(true)
         setcbP(tbp)
      }
      if (bread) {
         setBreadSelection(bread)
      }


   }

   function resetBreadSelection() {
      setTotal((total - cbP).toFixed(2))
      setIsDisabled(false)
      setBreadSelection(undefined)
   }

   function payme() {
      window.open("https://www.just-eat.co.uk/")
   }

   return (
      <div>
         <h1>Lesubway</h1>
         {/* {foodArray.map(foodItem => {
            return (
               <>
                  <colum>{foodItem.type}</colum>
                  <br></br>
                  <br></br>
                  <Button onClick={ita} variant='outlined'>italian</Button>
                  <Button onClick={hon} variant='outlined'>honey</Button>
                  <Button onClick={oat} variant='outlined'>oaty</Button>
               </>
            )
         })} */}

         <br />
         <br></br>
         <br></br>
         <Button disabled={isDisabled} onClick={() => handleAddPrice(bP[0], true, "italian")} variant='outlined'>italian</Button>
         <Button disabled={isDisabled} onClick={() => handleAddPrice(bP[1], true, "honey")} variant='outlined'>honey</Button>
         <Button disabled={isDisabled} onClick={() => handleAddPrice(bP[2], true, "oaty")} variant='outlined'>oaty</Button>
         <br></br>
         {breadSelection && "your bread selection is:" + breadSelection}
         {breadSelection && <Button onClick={resetBreadSelection}>Cancel bread selection</Button>}
         <br></br>
         <colum>veggies</colum>
         <br></br>
         <br></br>
         <Button onClick={handleAddTomato} variant='outlined'>Tomato</Button>
         <Button onClick={handleAddLettuce} variant='outlined'>Lettuce</Button>
         <Button onClick={handleAddCucumber} variant='outlined'>Cucumber</Button><br></br>

         <column> <Button disabled={tomatoeDisably} onClick={handleMinusTomato} variant='outlined'>-</Button>
            your selected tomatoes:{tomatoCount}</column> <br></br>
         <column> <Button disabled={lettuceDisably} onClick={handleMinusLettuce} variant='outlined'>-</Button>
            your selected lettuce:{lettuceCount}</column> <br></br>
         <column> <Button disabled={cucumberDisably} onClick={handleMinusCucumber} variant='outlined'>-</Button>
            your selected cucumber:{cucumberCount}</column>
         <br></br>
         <br></br>
         <colum>sauce</colum>
         <br></br>
         <br></br>
         <Button onClick={handleAddChili} variant='outlined'>chili</Button>
         <Button onClick={handleAddRanch} variant='outlined'>ranch</Button>
         <Button onClick={handleAddSouthwest} variant='outlined'>southwest</Button>
         <br></br>
         <column> <Button disabled={chiliDisably} onClick={handleMinusChili} variant='outlined'>-</Button>
            your selected chili:{chiliCount}</column> <br></br>
         <column> <Button disabled={ranchDisably} onClick={handleMinusRanch} variant='outlined'>-</Button>
            your selected ranch:{ranchCount}</column> <br></br>
         <column> <Button disabled={southwestDisably} onClick={handleMinusSouthwest} variant='outlined'>-</Button>
            your selected southwest:{southwestCount}</column> <br></br>
         {/* <Button onClick={()=> backup} variant='outlined'>Add SUB</Button> */}
         <br></br>
         the total is: {total}
         <br></br>
         <br></br>

         <br></br>
         <br></br>
         CART: <Button onClick={payme} variant='outlined'>Pay now</Button>
         <br></br>
         <br></br>

         <br></br>
         <br></br>

      </div >

   )
}

export default Component5 
