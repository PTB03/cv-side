import { useEffect, useState } from "react";
import Bildekarusell from "../components/Bildekarusell/Bildekarusell";
import RouletteWheel from "../components/Roulette/Roulette";
import CaseSimulator from "../components/Roulette/CSGO";


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
            {/*<CaseSimulator/>*/}
        </div>
    );
}
 
export default Home;