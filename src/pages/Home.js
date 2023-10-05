import { useEffect, useState } from "react";
import Bildekarusell from "../components/Bildekarusell/Bildekarusell";
import RouletteWheel from "../components/Roulette/Roulette";
import CaseSimulator from "../components/Roulette/CSGO";
import Roulette2 from "../components/Roulette2.0/Roulette2";


const Home = () => {

    const [bullshit, setBull] = useState(0)

    const [conter, setCounter] = useState(0) 

    const handleClick = () => {
        setCounter(conter+1)
    }


    return (
        <div>
            <Bildekarusell/>
            <RouletteWheel/>
            <Roulette2/>
            {/*<CaseSimulator/>*/}
        </div>
    );
}
 
export default Home;