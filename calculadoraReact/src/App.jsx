import { useState } from "react";
import "./App.css";
import "./index.css";
import Buttons from "./componentes/Buttons";
import donuts from "./componentes/img/donut.png";

function App() {
  const [result, setResult] = useState("0");
  let [currentResult, setCurrentResult] = useState("0");

  function handleClick(event) {
    const key = event.target.dataset.label;
    const type = event.target.dataset.type;

    function appenNumber() {
      if (key == "." && currentResult.includes(".")) {
        return;
      } else {
        currentResult = currentResult == "0" ? key : currentResult + key;

        setCurrentResult(currentResult);
      }
    }

    function calc() {
      if ((key == "=" && result == "0") || currentResult == "0") {
        return;
      } else if (key == "=" && result !== "0" && currentResult !== "0") {
        setResult(eval(result + currentResult));
        setCurrentResult("0");
      } else if (
        result !== "" &&
        result.toString().includes("+", "-", "*", "/")
      ) {
        setResult(eval(result + currentResult) + key);
        setCurrentResult("0");
        // console.log( typeof result)
      } else if (currentResult == "" || currentResult == "0") {
        return;
      } else {
        setResult(currentResult + key);
        // console.log(setResult);
        setCurrentResult("0");
      }
    }

    function porcentage() {
      if (currentResult == "0") {
        return;
      }
      setCurrentResult(eval(currentResult + "*0.01"));
    }

    switch (type) {
      case "number":
        appenNumber();

        break;

      case "operator":
        calc();

        break;

      case "clear":
        setCurrentResult("0");
        setResult("0");

        break;

      case "delete":
        setCurrentResult(currentResult.slice(0, -1));
        break;

      case "equals":
        try {
          calc();
        } catch (error) {
          return setResult(["ERROR!"]);
        }

        break;

      case "percentage":
        porcentage();

        break;
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

          <input type="text" className="display2" value={currentResult} id="" />

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
          <Buttons onClick={handleClick} type="number" label="."></Buttons>
          <Buttons onClick={handleClick} type="number" label="0"></Buttons>
          <Buttons onClick={handleClick} type="number" label="00"></Buttons>
          <Buttons onClick={handleClick} type="percentage" label="%"></Buttons>
          <Buttons onClick={handleClick} type="equals" label="="></Buttons>
        </div>
      </div>
    </>
  );
}

export default App;
