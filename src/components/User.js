import { React, useState } from "react";
import Login from "./Login";

export default function User(props) {
  const [userData, setUserData] = useState({
    status: "Not Logged In",
    accessToken: undefined,
    isDialogActive: false 
  });
  const handleLogin = (token) => {
    if (token !== undefined){
        setUserData({
            status: "Loggen In",
            accessToken: token,
            isDialogActive: false 
        })
    }
  };
  return (
    <>
      <div id='login-status-container'>
        <button onClick={() => {setUserData({
            ...userData,
            ...{isDialogActive: !userData.isDialogActive}
        })}}>
          {userData.status}
        </button>
      </div>
      {userData.isDialogActive && (
        <div id='dialog'>
          <Login setData={handleLogin} />
        </div>
      )}
    </>
  );
}
