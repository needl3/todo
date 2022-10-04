import Main from "./components/Main";
import "./App.css";
import User from "./components/User";
import { useState } from "react";

export default function App() {
  const [accessToken, setLoginStat] = useState(undefined);
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
