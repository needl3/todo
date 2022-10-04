import { useState } from "react";
import urls from "../shared/urls";
import { modes } from "../shared/constants";
import LoginStyled from "../wrappers/Login";

export default function Login(props) {
  const [loginData, setData] = useState({
    email: undefined,
    password: undefined,
    loginTries: {
      message: [
        "Locked",
        "The End Try",
        "Last Try for sure",
        "Last Try",
        "Try Again",
        "Login",
      ],
      triesRemaining: 5,
    },
  });

  const handleSubmit = () => {
    fetch(urls.base + urls.login, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: loginData.email,
        password: loginData.password
      }),
    })
      .then(async (r) => {
        if (r.status !== 200) throw await r.json();
        const response = await r.json();
        props.setData(response.accessToken);
      })
      .catch((r) => {
        console.log(r);
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
          {loginData.loginTries.triesRemaining < 5 ? "Wrong Credentials" : ""}
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
        <button
          onClick={
            loginData.loginTries.triesRemaining ? handleSubmit : () => {}
          }
        >
          {loginData.loginTries.message.at(loginData.loginTries.triesRemaining)}
        </button>
        <div id='toggler'>
          <button onClick={() => props.toggleAuth(modes.REGISTER)}>
            Register
          </button>
        </div>
      </div>
    </LoginStyled>
  );
}
