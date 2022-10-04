import { useState } from "react";
import urls from "../shared/urls";
import RegisterStyled from "../wrappers/Register";
import { status } from "../shared/constants";
import { modes } from "../shared/constants";

export default function Register(props) {
  const [registerData, setRegisterData] = useState({
    name: undefined,
    email: undefined,
    password: undefined,
    registeredStatus: status.NO_ATTEMPT,
  });
  const handleChange = (value, type) => {
    const newData = registerData;
    if (type === "name") newData.name = value.target.value;
    else if (type === "email") newData.email = value.target.value;
    else newData.password = value.target.value;
    setRegisterData(newData);
  };
  const handleSubmit = () => {
    fetch(urls.base + urls.register, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(registerData),
    })
      .then((res) => {
        if (res.status === 200)
          setRegisterData({
            ...registerData,
            registeredStatus: status.REGISTERED,
          });
        else throw res;
      })
      .catch((res) => {
        setRegisterData({
          ...registerData,
          registeredStatus: status.NOT_REGISTERED,
        });
      });
  };
  return (
    <RegisterStyled>
      <div id='register-styled'>
        <div id='register-status' className={registerData.registeredStatus}>
          {registerData.registeredStatus === "registered" ? "Email sent" : ""}
        </div>
        <div id='name'>
          <input
            type='text'
            name='name'
            placeholder='name'
            onChange={(v) => handleChange(v, "name")}
          ></input>
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
        <button onClick={handleSubmit}>Register</button>
        <div id='toggler'>
          <button onClick={() => props.toggleAuth(modes.LOGIN)}>Login</button>
        </div>
      </div>
    </RegisterStyled>
  );
}
