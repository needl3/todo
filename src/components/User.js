import { React, useState } from "react";
import Login from "./Login";
import UserStyled from "../wrappers/User"

export default function User(props) {
  const [userData, setUserData] = useState({
    status: "Not Logged In",
    accessToken: undefined,
    isDialogActive: false 
  });
  const handleLogin = (token) => {
    if (token !== undefined){
        setUserData({
            status: "Logged In",
            accessToken: token,
            isDialogActive: false 
        })
    }
  };
  return (
    <UserStyled>
      <div id='login-status-container'>
        <button className={userData.status === "Logged In" ? "logged-in" : "not-logged-in"} onClick={() => {setUserData({
            ...userData,
            ...{isDialogActive: !userData.isDialogActive}
        })}}>
          {userData.status}
        </button>
      {userData.isDialogActive && (
        <div id='dialog'>
          <Login setData={handleLogin} />
        </div>
      )}
      </div>
    </UserStyled>
  );
}
