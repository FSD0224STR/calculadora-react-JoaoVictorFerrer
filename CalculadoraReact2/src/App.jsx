import { useState } from "react";
import "./App.css";
import "./index.css";
import Buttons from "./componentes/Buttons";
import donuts from "./componentes/img/donut.png";

function App() {
  let [result, setResult] = useState(["0"]);

  function handleClick(event) {
    const key = event.target.dataset.label;
    const type = event.target.dataset.type;

    if (key == "AC") {
      setResult(["0"]);
      console.log(typeof setResult);
    } else if (key == "DEL" && result !== "0") {
      setResult(result.slice(0, -1));
    } else if (type == "operator" && result == "0") {
      return;
    } else if (key == "=" && result.includes("%")) {
      setResult(eval(result.replace("%", "*(1/100)")));
    } else if (key == "=" && result !== "") {
      try {
        setResult(eval(result));
      } catch (error) {
        setResult(["ERROR!"]);
      }
    } else {
      result = result == "0" ? key : result + key;
      setResult(result);
    }
  }

  return (
    <>
      <div className="conteiner">
        <h1>
          Calculadora React{" "}
          <img src={donuts} className="img" width={40} height={40} />{" "}
        </h1>

        <div className="calc">
          <input type="text" className="display" value={result} />

          <Buttons onClick={handleClick} type="clear" label="AC"></Buttons>
          <Buttons onClick={handleClick} type="delete" label="DEL"></Buttons>
          <Buttons onClick={handleClick} type="operator" label="*"></Buttons>
          <Buttons onClick={handleClick} type="operator" label="/"></Buttons>
          <Buttons onClick={handleClick} type="number" label="1"></Buttons>
          <Buttons onClick={handleClick} type="number" label="2"></Buttons>
          <Buttons onClick={handleClick} type="number" label="3"></Buttons>
          <Buttons onClick={handleClick} type="operator" label="+"></Buttons>
          <Buttons onClick={handleClick} type="number" label="4"></Buttons>
          <Buttons onClick={handleClick} type="number" label="5"></Buttons>
          <Buttons onClick={handleClick} type="number" label="6"></Buttons>
          <Buttons onClick={handleClick} type="operator" label="-"></Buttons>
          <Buttons onClick={handleClick} type="number" label="7"></Buttons>
          <Buttons onClick={handleClick} type="number" label="8"></Buttons>
          <Buttons onClick={handleClick} type="number" label="9"></Buttons>
          <Buttons onClick={handleClick} type="operator" label="%"></Buttons>
          <Buttons onClick={handleClick} type="number" label="0"></Buttons>
          <Buttons onClick={handleClick} type="number" label="00"></Buttons>
          <Buttons onClick={handleClick} type="operator" label="."></Buttons>
          <Buttons onClick={handleClick} type="operator" label="="></Buttons>
        </div>
      </div>
    </>
  );
}

export default App;
