import { React, useState } from "react";
import Login from "./Login";
import Register from "./Register";
import UserStyled from "../wrappers/User";
import { modes } from "../shared/constants";

export default function User(props) {
  const [userData, setUserData] = useState({
    status: "Not Logged In",
    accessToken: undefined,
    dialogMode: modes.DORMANT,
  });
  const handleLogin = (token) => {
    if (token !== undefined) {
      setUserData({
        status: "Logged In",
        accessToken: token,
        dialogMode: modes.DORMANT,
      });
    }
  };
  const toggleAuth = (newMode) => {
    setUserData({ ...userData, ...{ dialogMode: newMode } });
  };
  return (
    <UserStyled>
      <div id='login-status-container'>
        <button
          className={
            userData.status === "Logged In" ? "logged-in" : "not-logged-in"
          }
          onClick={() => {
            setUserData({
              ...userData,
              ...{
                dialogMode:
                  userData.dialogMode === modes.DORMANT
                    ? modes.LOGIN
                    : modes.DORMANT,
              },
            });
          }}
        >
          {userData.status}
        </button>
        {userData.dialogMode === modes.LOGIN && (
          <div id='dialog'>
            <Login setData={handleLogin} toggleAuth={(v) => toggleAuth(v)} />
          </div>
        )}
        {userData.dialogMode === modes.REGISTER && (
          <div id='dialog'>
            <Register toggleAuth={(v) => toggleAuth(v)}/>
          </div>
        )}
      </div>
    </UserStyled>
  );
}
