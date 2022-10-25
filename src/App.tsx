import { useState } from 'react'
import Select from './Components/Select'

const options = [
  {label : 'first', value: 1},
  {label : 'second', value: 2},
  {label : 'third', value: 3},
  {label : 'forth', value: 4},

]

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Select options={options}/>
    </>
  )
}

export default App
