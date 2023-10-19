import { useEffect, useState } from "react";
import styles from "./Roulette2.module.css";
const Roulette2 = () => {
  const symbols = ["#", "¤", "%", "&", "@", "£", "$"];

  const [ranSymbols, setRanSymbols] = useState(null);
  const [winningNumbers, setWinningNumbers] = useState([]);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  useEffect(() => {
    setRanSymbols([
      ["#", "#", "#"],
      ["¤", "¤", "¤"],
      ["%", "%", "%"],
      ["&", "&", "&"],
      ["@", "@", "@"],
      ["£", "£", "£"],
    ]);
  }, []);

  useEffect(() => {
    console.log(ranSymbols);
  }, [ranSymbols]);


  const handleClick = () => {

    if (isButtonDisabled) return;

    setIsButtonDisabled(true);


    const newSlides = [...ranSymbols];

    newSlides.forEach((row) => {
      for (let i = 0; i < Math.floor(Math.random() * 15 + 6); i++) {
        row.push(symbols[Math.floor(Math.random() * symbols.length)]);
      }

      
    });

    setRanSymbols(newSlides);

    const winningNumbersArray = [];

    for (let i = 0; i < 6; i++) {
      winningNumbersArray.push(ranSymbols[i][ranSymbols[i].length - 2]);
    }

    setTimeout(() => {
    setWinningNumbers(winningNumbersArray);
    setIsButtonDisabled(false);

    
    
    }, 6100);
  };

  return (
    <div className={styles.roulette}>
      <div className={styles.startButton}>
        <button onClick={handleClick} disabled ={isButtonDisabled}>Trykk på meg</button>
        <div className={styles.winningText}>
          <h5>Dette er de vinnene symbolene: </h5>
          {winningNumbers.map((winningNumber) => {
            return <h5>{winningNumber}</h5>;
          })}
        </div>
      </div>

      <div className={styles.wheel}>
        {ranSymbols ? (
          ranSymbols.map((row) => {
            return (
              <div
                className={styles.slide}
                style={{
                  transform: `translateY(-${row.length * 100 - 300}px)`,
                }}
              >
                {row.map((symbol) => {
                  return (
                    <div className={styles.wheelPiece}>
                      <h1>{symbol}</h1>
                    </div>
                  );
                })}
              </div>
            );
          })
        ) : (
          <div>nosym</div>
        )}
      </div>
    </div>
  );
};

export default Roulette2;
