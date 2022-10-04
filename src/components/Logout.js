import { useEffect, useState } from "react";
import urls from "../shared/urls";
import LogoutStyled from "../wrappers/Logout";

export default function Logout(props) {
  const [userName, setName] = useState(undefined);
  useEffect(() => {
    fetch(urls.base + urls.user, {
      method: "GET",
      headers: {
        authorization: `bearer ${props.token}`,
      },
    })
      .then(async (e) => {
        if (e.status === 200) {
          e = await e.json();
          setName(e.data.name);
        } else throw e;
      })
      .catch((e) => {
        console.log("Cant logout", e);
      });
  }, []);
  return (
    <LogoutStyled>
      <div id='logout-container'>
        <p>
          Hello, <span>{userName}</span>
        </p>
        <button onClick={props.logout}>Logout</button>
      </div>
    </LogoutStyled>
  );
}
