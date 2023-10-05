import { useState, useEffect } from "react";
import axios from "axios";

const JokeApi = () => {
  const [joke, setJoke] = useState("");

  useEffect(() => {
    axios
      .get("https://official-joke-api.appspot.com/random_joke")
      .then((response) => {
        setJoke(response.data.setup);
        console.log(joke);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  useEffect(() => {
    // This will run whenever `joke` changes
    if (joke) {
      console.log(joke);
    }
  }, [joke]);
  return joke;
};

export default JokeApi;
