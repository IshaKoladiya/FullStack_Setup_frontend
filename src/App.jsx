import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState({ name: "", email: "", password: "" });

  const handleChenge = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:4000/register";

      const body = {
        name: data.name,
        email: data.email,
        password: data.password,
      };
      const user = await axios.post(url, body);

      console.log(user.data.token);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={data.name}
          onChange={handleChenge}
        />
        <input
          type="email"
          name="email"
          value={data.email}
          onChange={handleChenge}
          id=""
        />
        <input
          type="password"
          name="password"
          value={data.password}
          onChange={handleChenge}
          id=""
        />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

export default App;
