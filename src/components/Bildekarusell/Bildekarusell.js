import { useEffect, useState } from "react";
import './Bildekarusell.css';



const Bildekarusell  = () => {
    const [bilde, setBilde] = useState(0) 

    const handleClick = () => {
        if (bilde<(bilder.length-1)) {
            setBilde(bilde+1)
        }
        else {
            setBilde(0)
        }
                
    }

    const bilder = ["./bilder/darth_vader.jpg","./bilder/stormtrooper.jpeg","./bilder/Jabba-The-Hutt.jpeg"];

    return (  
        <div className="konteiner">
            <div>
            <h2>Dette er meg!</h2>
            <img className="karusellBilder" src={bilder[bilde]}></img>
            </div>
            <button onClick={handleClick}>Trykk på meg!</button>
        </div>
    );
}
 
export default Bildekarusell ;