// src/components/CaseSimulator.jsx
/*
import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { Button, Card, CardContent, Typography } from '@material-ui/core';
import './CaseSimulator.css';


const CaseSimulator = () => {
  const [opened, setOpened] = useState(false);
  const [result, setResult] = useState(null);

  const animation = useSpring({
    opacity: opened ? 1 : 0,
    marginTop: opened ? 0 : -100,
    from: { opacity: 0, marginTop: -100 },
  });

  const handleOpenCase = () => {
    // Implement the logic for opening a case here
    // You can simulate random item selection or implement a more complex algorithm

    // For this example, let's just simulate a random result
    const results = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
    const randomIndex = Math.floor(Math.random() * results.length);

    setResult(results[randomIndex]);
    setOpened(true);
  };

  return (
    <div className="case-simulator">
      <Card>
        <CardContent>
          <Typography variant="h5" component="div">
            CS:GO Case Simulator
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={handleOpenCase}
            disabled={opened}
          >
            Open Case
          </Button>
          <animated.div
            className="result"
            style={animation}
          >
            {result}
          </animated.div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CaseSimulator;

*/