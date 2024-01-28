import '../helloWorld.css'
const HelloWorld = (props) => {
    return (
     <h1 className='tituloHelloWorld'>HELLO {props.saludo}</h1>
    );
};

export default HelloWorld;