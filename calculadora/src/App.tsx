// src/App.tsx
import { useState } from 'react'
import './App.css'

type Operation = 'suma' | 'resta' | 'multiplicacion' | 'division'

function App() {
  const [num1, setNum1] = useState<number>(0)
  const [num2, setNum2] = useState<number>(0)
  const [resultado, setResultado] = useState<number | string>(0)
  const [operacion, setOperacion] = useState<Operation>('suma')

  const calcular = () => {
    switch (operacion) {
      case 'suma':
        setResultado(num1 + num2)
        break
      case 'resta':
        setResultado(num1 - num2)
        break
      case 'multiplicacion':
        setResultado(num1 * num2)
        break
      case 'division':
        if (num2 === 0) {
          setResultado('Non se pode dividir por cero')
        } else {
          setResultado(num1 / num2)
        }
        break
      default:
        setResultado(0)
    }
  }

  return (
    <div className="app-container">
      <div className="calculadora">
        <h1>Calculadora</h1>
        
        <div className="entradas">
          <input
            type="number"
            value={num1}
            onChange={(e) => setNum1(Number(e.target.value))}
            placeholder="Primeiro número"
            className="input-number"
          />
          
          <select
            value={operacion}
            onChange={(e) => setOperacion(e.target.value as Operation)}
            className="select-operation"
          >
            <option value="suma">+</option>
            <option value="resta">-</option>
            <option value="multiplicacion">*</option>
            <option value="division">/</option>
          </select>
          
          <input
            type="number"
            value={num2}
            onChange={(e) => setNum2(Number(e.target.value))}
            placeholder="Segundo número"
            className="input-number"
          />
        </div>
        
        <button onClick={calcular} className="calcular-btn">Calcular</button>
        
        <div className="resultado">
          <h2>Resultado:</h2>
          <p>{resultado}</p>
        </div>
      </div>
    </div>
  )
}

export default App