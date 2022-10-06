import Main from "./components/Main";
import "./App.css";
import User from "./components/User";
import { useState } from "react";
export default function App() {
  const [accessToken, setLoginStat] = useState(
    localStorage.getItem("userData") == null
      ? undefined
      : JSON.parse(localStorage.getItem("userData")).accessToken
  );
  return (
    <>
      <User
        setToken={(token) => {
          setLoginStat(token);
        }}
      />
      <Main accessToken={accessToken} />
    </>
  );
}
