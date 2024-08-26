import { useContext } from "react";
import "./App.css";
import { UserContext } from "./context/UserContext";
function App() {
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <p>User: {user}</p>
      <button onClick={() => setUser("John Doe")}>Set User</button>
    </div>
  );
}

export default App;
