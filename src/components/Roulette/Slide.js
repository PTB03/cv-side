

import { useEffect, useState } from "react";

import './Roulette.css';

export const Slide = ({ bgColor, rolling, setRolling }) => {


    const symbols = ["7","#","€"]

    console.log(bgColor)

    useEffect(() => {
        if (rolling) {
            onRoll()
            setRolling(false)
        }
    }, [rolling])
    const [slide, setSlide] = useState([]);

    const [offset, setOffset] = useState("0px");
    const [time, setTime] = useState(0);
    const [speed, setSpeed] = useState("10s");

    const [ranS, setRanS] = useState(0);

    const onRoll = () => {
        for (let i = 1; i < 6; i++) {
            let random = Math.round(Math.random() * 50 + 10)
            let newArray = [...slide];

            for (let i = 0; i < random; i++) {
                    setRanS(Math.round(Math.random()*2))
                    console.log(ranS,"sjekk")
                    newArray.push(symbols[ranS]);
            }


            setSlide(newArray);
            setOffset(`-${random * 110}px`);
            setSpeed("10s")


            setTimeout(() => {
                setRolling(false)
                let finish = newArray.splice(-3)
                console.log(newArray)
                console.log(finish)
                setSlide(finish)
                setSpeed("0s")
                setOffset("0px")
            }, 10100)

        }

    };
    return (

        <div className="wheelPiece" style={{ backgroundColor: bgColor }}>
            <div className="column" style={{ top: offset, transition: `top ease-out ${speed}` }}>{slide.map((item) => {
            
            
            
            return(<div className="item">{item}</div>)
        }
            

)}
            </div>
        </div>);
};

export default Slide
