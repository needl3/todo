import { useState } from "react";
import urls from "../shared/urls";

export default function Login(props) {
  const [loginData, setData] = useState({
    email: undefined,
    password: undefined,
    loginTries: {
      message: [
        "The End Try",
        "Last Try for sure",
        "Last Try",
        "Try Again",
        "Login",
      ],
      triesRemaining: 4,
    },
  });

  const handleSubmit = async () => {
    await fetch(urls.base, {
      mode: "POST",
      body: JSON.stringify({
        loginData,
      }),
    })
      .then((r) => {
        props.setData(true, r);
      })
      .catch((r) => {
        console.log("Invalid credentials");
      });
    setData({
      ...loginData,
      ...{
        loginTries: {
          ...loginData.loginTries,
          ...{ triesRemaining: loginData.loginTries.triesRemaining - 1 },
        },
      },
    });
  };

  const handleChange = (v, field) => {
    let newData = loginData;
    field === "email"
      ? (newData.email = v.target.value)
      : (newData.password = v.target.value);
    setData(newData);
  };

  return (
    <div id='login-dialog'>
      <div id='email'>
        <label for='email'>Email: </label>
        <input
          type='text'
          name='email'
          placeholder='email'
          onChange={(v) => handleChange(v, "email")}
        ></input>
      </div>
      <div id='pass'>
        <label for='pass'>Password: </label>
        <input
          type='password'
          name='pass'
          placeholder='password'
          onChange={(v) => handleChange(v, "pass")}
        ></input>
      </div>
      <button
        onClick={handleSubmit}
        style={{
          backgroundColor: `rgb(
            ${100 + 20* 1 / (loginData.loginTries.triesRemaining + 1)},
            ${100 - 20 * (1 - 1 / (loginData.loginTries.triesRemaining + 1))},
            100
          )`,
        }}
      >
        {loginData.loginTries.message.at(loginData.loginTries.triesRemaining)}
      </button>
    </div>
  );
}
