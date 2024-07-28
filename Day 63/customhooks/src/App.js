// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from "./components/Home";
import { useFetchToDos } from "./hooks/useFetchToDos";

function App() {
  const todos = useFetchToDos();

  return (
    <Router>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              {todos.map((todo) => (
                <div key={todo.id}>{todo.title}</div>
              ))}
            </div>
          }
        />
        <Route
          path="/about"
          element={
            <div>
              <Home />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
