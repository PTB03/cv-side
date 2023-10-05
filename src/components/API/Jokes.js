import axios from "axios";
import { useState, useEffect } from "react";
import JokeApi from "./JokeApi";

const Jokes = () => {

  return (
    <div>
      <JokeApi/>
    </div>
  );
};

export default Jokes;
