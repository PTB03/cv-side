import { useState } from "react";
import styles from "./Roulette2.module.css";
const Roulette2 = () => {
  let symbols = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

  let ranSymbols = [];

  const [transY, setTransY] = useState(0);
  

  const handleClick = () => {
    setTransY(Math.round(Math.random() * symbols.length) * 100);

    setTimeout(() => {
        setTransY(0)
    }, 4000);

    console.log(transY);
  };

    symbols.forEach((symbol) => {
        ranSymbols.push(
          <div className={styles.wheelPiece}>
            <h1>{symbol}</h1>
          </div>
        );
      });
    
      const slide = (
        <div
          className={styles.slide}
          style={{ transform: `translateY(-${transY}px)` }}
        >
          {ranSymbols}
        </div>
      );
  

  

  console.log(transY);

  return (
    <div className={styles.roulette}>
      <div className={styles.startButton}>
        <button onClick={handleClick}>Trykk på meg</button>
      </div>
      <div className={styles.wheel}>
        {slide}
        {slide}
        {slide}
        {slide}
        {slide}
        {slide}
      </div>
    </div>
  );
};

export default Roulette2;
