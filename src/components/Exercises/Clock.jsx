import { useState } from "react";
import { useEffect } from "react";

export default function Clock(props) {
  useEffect(() => {

    const timerID = setInterval(
      () =>
        setState((state) => {
          let edad = state.edad++;
          return {
            ...state,
            fecha: new Date(),
            edad,
          };
        }),
      1000
    );

    //return clearInterval(timerID); solo se ejecuta 1 vez
  },[]);

  const [state, setState] = useState({
    fecha: new Date(),
    edad: 0,
    nombre: "Martin",
    apellidos: "San Jose",
  });

  return (
    <div>
      <h2>
        Hora Actual:
        {state.fecha.toLocaleTimeString()}
      </h2>
      <h3>
        {state.nombre} {state.apellidos}
      </h3>
      <h1>Edad: {state.edad}</h1>
    </div>
  );
}
