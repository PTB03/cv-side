import { useLayoutEffect } from "react";
import { useEffect, useState } from "react";
import styles from "./Roulette.module.css"
import Slide from "./Slide";

const RouletteWheel = () => {

    const [rolling, setRolling] = useState(false)

   





    return ( <></>
 /*
        <div className="container">
            <button onClick={() => {setRolling(true)}}></button>
            <div className="wheel">


                <Slide bgColor = "red" rolling = {rolling} setRolling={setRolling} />
                <Slide bgColor = "purple" rolling ={rolling} setRolling={setRolling} />
                <Slide bgColor = "yellow" rolling = {rolling} setRolling={setRolling} />
                <Slide bgColor = "green" rolling = {rolling} setRolling={setRolling} />
                <Slide bgColor = "blue" rolling = {rolling} setRolling={setRolling} />



            </div>

        </div>
*/


    );
}

export default RouletteWheel;