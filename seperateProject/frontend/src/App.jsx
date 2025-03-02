import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from 'axios'
function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
      axios.get("/api/jokes")
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  , []); 
  return (
    <>
      <h1>Chai and fill Stack </h1>
      <h3>Jokes:{jokes.length }</h3>
      {
        jokes.map((joke) => (
          <div key={joke.id}>
            <h2>{joke.title}</h2>
            <p>{joke.content}</p>
          </div>
        ))
      }
    </>
  );
}

export default App;
