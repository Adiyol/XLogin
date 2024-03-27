import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0)
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showInvalidMessage, setShowInvalidMessage] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  function handleOnSubmit(e) {
    e.preventDefault();
    if (username !== "user" || password !== "password") {
      setShowInvalidMessage(true);
    
    } else {
      setShowInvalidMessage(false);
      setIsLoggedIn(true)
    }
  }
  return (
    <>
      <h1>Login Page</h1>
      {!isLoggedIn ? (
        <>
          {showInvalidMessage && <p>Invalid username or password</p>}
          <form onSubmit={handleOnSubmit}>
            <label htmlFor="Username">Username:</label>
            <input
              type="text"
              name="Username"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <br />
            <label htmlFor="Password">Password:</label>
            <input
              // type="text"
              type="password"
              name="Password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <br />
            <button type="submit">Submit</button>
          </form>
        </>
      ) : (
        <p>Welcome, user!</p>
      )}
    </>
  );
}

export default App;
