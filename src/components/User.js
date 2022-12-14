import { React, useState } from "react";
import Login from "./Login";
import Logout from "./Logout";
import Register from "./Register";
import UserStyled from "../wrappers/User";
import { modes } from "../shared/constants";
import { userCall } from "../shared/calls";
export default function User({ setToken }) {
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("userData")) || {
      status: "Not Logged In",
      accessToken: undefined,
      dialogMode: modes.DORMANT,
      name: undefined,
    }
  );
  const handleLogin = async (token) => {
    if (token !== undefined) {
      const user = await (await userCall(token)).json();
      const newData = {
        status: "Logged In",
        accessToken: token,
        dialogMode: modes.DORMANT,
        name: user.data.name,
      }
      setUserData(newData);
      setToken(token);
      localStorage.setItem("userData", JSON.stringify(newData));
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
                    ? userData.status === "Logged In"
                      ? modes.LOGOUT
                      : modes.LOGIN
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
            <Register toggleAuth={(v) => toggleAuth(v)} />
          </div>
        )}
        {userData.dialogMode === modes.LOGOUT && (
          <div id='dialog'>
            <Logout
              logout={() => {
                setToken(undefined);
                setUserData({
                  status: "Not Logged In",
                  accessToken: undefined,
                  dialogMode: modes.DORMANT,
                  name: undefined,
                });
                localStorage.removeItem("todos")
                localStorage.removeItem("userData")
              }}
              userData={userData}
            />
          </div>
        )}
      </div>
    </UserStyled>
  );
}
