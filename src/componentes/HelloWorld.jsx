import Button from 'react-bootstrap/Button';

import { useState } from "react";
const HelloWorld = (props) => {
  const [mensaje, setMensaje] = useState("");
  return (
    <section>
      <h1 className="tituloHelloWorld">HELLO {props.saludo}</h1>
      <Button variant="info" className="mx-2"></Button>
    </section>
  );
};

export default HelloWorld;
