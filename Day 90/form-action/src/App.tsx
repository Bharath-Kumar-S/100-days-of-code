import { useState } from "react";
import "./App.css";
import { Input } from "./components/Input";

function App() {
  const [formData, setFormData] = useState<{ [key: string]: string }>({
    myInput: "", // Initial value for the input with id 'myInput'
  });

  const handleInputChange = (id: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  return (
    <div>
      <Input
        id="myInput"
        type="text"
        label="My Input"
        value={formData.myInput}
        onChange={handleInputChange}
      />
      {/* Other inputs can be added similarly */}
      <p>Current value: {formData.myInput}</p>

      <Input
        id="anotherInput"
        type="text"
        label="Another Input"
        value={formData.anotherInput}
        onChange={handleInputChange}
      />
      {/* Other inputs can be added similarly */}
      <p>Current value: {formData.anotherInput}</p>
    </div>
  );
}

export default App;
