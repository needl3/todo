import LogoutStyled from "../wrappers/Logout";
import { logoutCall } from "../shared/calls";

export default function Logout({ logout, userData: {accessToken: token, name: userName} }) {
  return (
    <LogoutStyled>
      <div id='logout-container'>
        <p>
          Hello, <span>{userName}</span>
        </p>
        <button
          onClick={async () => {
            logoutCall(token);
            logout();
          }}
        >
          Logout
        </button>
      </div>
    </LogoutStyled>
  );
}
