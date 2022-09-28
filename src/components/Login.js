import { useState } from "react";
import urls from "../shared/urls";
import LoginStyled from "../wrappers/Login";

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
    await fetch(urls.base + urls.login, {
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify({
        loginData,
      }),
    })
      .then((r) => {
        if (r.ok) props.setData(true, r.body.token);
      })
      .catch((r) => {
        setData({
          ...loginData,
          ...{
            loginTries: {
              ...loginData.loginTries,
              ...{ triesRemaining: loginData.loginTries.triesRemaining - 1 },
            },
          },
        });
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
    <LoginStyled>
      <div id='login-dialog'>
        <div id='wrong-status'>
          {loginData.loginTries.triesRemaining < 4 ? "Wrong Credentials" : ""}
        </div>
        <div id='email'>
          <input
            type='text'
            name='email'
            placeholder='email'
            onChange={(v) => handleChange(v, "email")}
          ></input>
        </div>
        <div id='pass'>
          <input
            type='password'
            name='pass'
            placeholder='password'
            onChange={(v) => handleChange(v, "pass")}
          ></input>
        </div>
        <button onClick={handleSubmit}>
          {loginData.loginTries.message.at(loginData.loginTries.triesRemaining)}
        </button>
      </div>
    </LoginStyled>
  );
}
