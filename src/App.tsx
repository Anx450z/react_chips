import { useState } from "react";
import Select, { SelectOption } from "./Components/Select";

const options = [
  { label: "first", value: 1 },
  { label: "second", value: 2 },
  { label: "third", value: 3 },
  { label: "forth", value: 4 },
];

function App() {
  const [value1, setValue1] = useState<SelectOption[]>([options[0]]);
  const [value2, setValue2] = useState<SelectOption | undefined>(options[0]);

  return (
    <>
      <Select
        multiple
        options={options}
        value={value1}
        onChange={(o) => setValue1(o)}
      />
      <br />
      <Select options={options} value={value2} onChange={(o) => setValue2(o)} />
    </>
  );
}

export default App;
