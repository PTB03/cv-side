import { useEffect, useState } from "react";
import Bildekarusell from "../components/Bildekarusell/Bildekarusell";


const Home = () => {

    const [bullshit, setBull] = useState(0)

    const [conter, setCounter] = useState(0) 

    const handleClick = () => {
        setCounter(conter+1)
    }


    return (
        <div>
            <Bildekarusell/>
            
        </div>
    );
}
 
export default Home;