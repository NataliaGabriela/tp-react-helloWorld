import Button from "react-bootstrap/Button";
import { useState } from "react";
const HelloWorld = (props) => {
  const [mensaje, setMensaje] = useState("");

  return (
    <section>
      <h1 className="tituloHelloWorld">
        HELLO {props.saludo} {mensaje}!
      </h1>
      <Button
        variant="info"
        className="mx-2"
        onClick={() => setMensaje("(from changed state)")}
      >
        Click me
      </Button>
    </section>
  );
};

export default HelloWorld;
