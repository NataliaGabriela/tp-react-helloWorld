import "bootstrap/dist/css/bootstrap.min.css";
import "./helloWorld.css";
import React from "react";
import HelloWorld from "./componentes/HelloWorld";


const App = () => {
  return <HelloWorld saludo="my friend"></HelloWorld>;
};

export default App;
