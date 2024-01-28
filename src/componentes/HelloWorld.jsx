import Button from 'react-bootstrap/Button';

const HelloWorld = (props,cambiarMensaje) => {
 
  return (
    <section>
      <h1 className="tituloHelloWorld">HELLO {props.saludo}</h1>
      <Button variant="info" className="mx-2" onClick={()=>cambiarMensaje()}>Click me</Button>
    </section>
  );
};

export default HelloWorld;
