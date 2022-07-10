
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';

const Component7 = () => {



  const [nb, setNb] = useState(0)
  const [nb1, setNb1] = useState(0)

  const [pa, setPa] = useState(0)
  const [pa1, setPa1] = useState(0)
  const [pa2, setPa2] = useState(0)

  //if rand gen is 0 pa = ans
  // useeffect listens to a change
 
  
  useEffect(() => {
    //the effect
    var num = Math.floor(Math.random() * 3)
     //var num is a variable random number thats generated

    if (num === 0) {
      setPa(nb + nb1)
      setPa1(Math.floor(Math.random() * 41))
      setPa2(Math.floor(Math.random() * 41))}
      // if num 0 the answer is assigned to Pa
    if (num === 1) {
      setPa1(nb + nb1)
      setPa(Math.floor(Math.random() * 41))
      setPa2(Math.floor(Math.random() * 41))}
      // if num 1 the answer is assigned to pa1
    if (num === 2) {
      setPa2(nb + nb1)
      setPa1(Math.floor(Math.random() * 41))
      setPa(Math.floor(Math.random() * 41))}
       // if num 2 the answer is assigned to pa2
  }, [nb, nb1]) //use effect triggered by changes in nb and nb1
 

  //// setans when nb&nb1 change


  function geneq() {
    // generates and sets the value of nb and nb1 (state)
    setNb(Math.floor(Math.random() * 21))
    // generates a number between 0-20
    setNb1(Math.floor(Math.random() * 21))
  }
//

  return (
    // calls the function "geneq"

    // displays the equation

    // displays possible answers inside the button

    // 

    <div>
      <Button onClick={geneq} variant='outlined'>GEN</Button>
      
      {nb} + {nb1} = {nb + nb1} <br></br>


      <br></br>
      <br></br>
      <Button variant="contained">{pa}</Button>
      <Button variant="contained">{pa1}</Button>
      <Button variant="contained">{pa2}</Button>
    </div>

  );
}

export default Component7