import { useState } from 'react'
import Rover from './Rover';

function App() {
  //rover 1
  const [x, setx] = useState(0);
  const [y, sety] = useState(0);
  const [orientacion, setorientacion] = useState('N');

  const [x1, setx1] = useState(0);
  const [y1, sety1] = useState(0);
  const [orientacion1, setorientacion1] = useState('N');
  const [instruciones1, setIntrucciones1] = useState('');
  const onSutmit = () => {
    
    const response=moveRover(x,y,orientacion1,instruciones1);
    setx1(response[0]);
    sety1(response[1]);
    setorientacion1(response[2]);
  }
  //rover 2
  const [x2, setx2] = useState(0);
  const [y2, sety2] = useState(0);
  const [orientacion2, setorientacion2] = useState('N');

  const [x3, setx3] = useState(0);
  const [y3, sety3] = useState(0);
  const [orientacion3, setorientacion3] = useState('N');
  const [instruciones2, setIntrucciones2] = useState('');

  const onSutmi2t = () => {
    
    const response=moveRover(x2,y2,orientacion2,instruciones2);
    setx3(response[0]);
    sety3(response[1]);
    setorientacion3(response[2]);
  }
  function moveRover(paramx, paramy, paramorientation, instructions) {
    let x=parseInt(paramx);
    let y=parseInt(paramy);
    let orientation=paramorientation;

    for (let i = 0; i < instructions.length; i++) {
      const instruction = instructions[i];
      switch (instruction) {
        case 'L':
          // Girar a la izquierda
          if (orientation === 'N') orientation = 'W';
          else if (orientation === 'W') orientation = 'S';
          else if (orientation === 'S') orientation = 'E';
          else if (orientation === 'E') orientation = 'N';
          break;
        case 'R':
          // Girar a la derecha
          if (orientation === 'N') orientation = 'E';
          else if (orientation === 'E') orientation = 'S';
          else if (orientation === 'S') orientation = 'W';
          else if (orientation === 'W') orientation = 'N';
          break;
        case 'M':
          // Mover hacia adelante
          if (orientation === 'N') y++;
          else if (orientation === 'E') x++;
          else if (orientation === 'S') y--;
          else if (orientation === 'W') x--;
          break;
      }
    }
    return `${x}${y}${orientation}`;
  }

  const plateauStyle = {
    position: 'relative',
    width: '300px',
    height: '300px', 
    border: '1px solid black',
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'red', minHeight: window.innerHeight - 20, flexDirection: 'column' }}>


      <div style={plateauStyle}>
        <Rover x={x3} y={y3} orientation={orientacion3} color={'yellow'}  />

        <Rover x={x1} y={y1} orientation={orientacion1} color={'green'}  />

      </div>
      {/**rover 1 */}
      <div style={{ width: '400px', backgroundColor: 'gray', minHeight: '100px' }}>
        <label>X: </label>
        <input type="number" value={x} onChange={(e) => setx(e.target.value)} />
        <label>Y: </label>
        <input type="number" value={y} onChange={(e) => sety(e.target.value)} />
        <label>Orientacion: </label>
        <input type="text" value={orientacion} onChange={(e) => setorientacion(e.target.value)} />
        <br />
        <label>Intrucciones rover 1: </label>

        <input type="text" value={instruciones1} onChange={(e) => setIntrucciones1(e.target.value)} />
        <br />
        <button onClick={onSutmit}>Mover Rover 1</button>
        <p>
        Entrada Rover 1<br />
          1 2 N<br />
          LMLMLMLMM<br />
          Salida: {`${x1}${y1}${orientacion1}`}
        </p>

      </div>
      {/**rover 2 */}

      <div style={{ width: '400px', backgroundColor: 'gray', minHeight: '100px' }}>
        <label>X: </label>
        <input type="number" value={x2} onChange={(e) => setx2(e.target.value)} />
        <label>Y: </label>
        <input type="number" value={y2} onChange={(e) => sety2(e.target.value)} />
        <label>Orientacion: </label>
        <input type="text" value={orientacion2} onChange={(e) => setorientacion2(e.target.value)} />
        <br />
        <br />
        <label>Intrucciones rover 1: </label>
        <input type="text" value={instruciones2} onChange={(e) => setIntrucciones2(e.target.value)} />
        <br />
        <button onClick={onSutmi2t}>Mover Rover 2</button>
        <p>Entrada rover 2<br /> 3 3 E<br /> MMRMMRMRRM<br />
        Salida: {`${x3}${y3}${orientacion3}`}
        </p>
      </div>
    </div>
  );
}

export default App;
