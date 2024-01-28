import 'bootstrap/dist/css/bootstrap.min.css';
import "./helloWorld.css";
import React from 'react';
import HelloWorld from './componentes/helloWorld';

import { useState } from "react";
const App = () => {
    const [mensaje, setMensaje] = useState("");
    const cambiarMensaje = ()=>{
        mensaje = '(from changed state)'
        setMensaje(mensaje);
      }
    return (
       <HelloWorld saludo = 'my friend!' cambiarMensaje={cambiarMensaje}></HelloWorld>
    );
};

export default App;