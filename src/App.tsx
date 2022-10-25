import { useState } from 'react'
import Select from './Components/Select'

const options = [
  {label : 'first', value: 1},
  {label : 'second', value: 2},
  {label : 'third', value: 3},
  {label : 'forth', value: 4},

]

function App() {
  const [value, setValue] = useState<typeof options[0] | undefined>(options[0])

  return (
    <>
    <Select options={options} value={value} onChange={o => setValue(o)}/>
    </>
  )
}

export default App
