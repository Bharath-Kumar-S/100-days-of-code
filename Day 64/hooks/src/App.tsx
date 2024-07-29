import { FormEvent, useState } from "react";
import "./App.css";
import { UserContextProvider, useUser } from "./context/userContext";

function App() {
  return (
    <UserContextProvider>
      <Next />
      <Dashboard />
    </UserContextProvider>
  );
}

export default App;

const Next = () => {
  const { setUser } = useUser();
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (values.password !== values.confirmPassword) {
      alert("Passwords do not match");
      return;
    } else {
      setUser(values);
    }
  };

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        textAlign: "left",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          onChange={(e) => setValues({ ...values, name: e.target.value })}
        />
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          onChange={(e) => setValues({ ...values, email: e.target.value })}
        />
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          onChange={(e) => setValues({ ...values, password: e.target.value })}
        />
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          onChange={(e) =>
            setValues({ ...values, confirmPassword: e.target.value })
          }
        />
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
};

const Dashboard = () => {
  const { user } = useUser();
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};
