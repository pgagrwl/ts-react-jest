import ReactDOM from "react-dom/client";
// import App2 from './App2';
import LoginComponent from "./LoginComponent";
import LoginService from "./services/LoginService";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const loginService = new LoginService();

const setToken = (token: string) => {
  console.log(`received the token ${token}`);
};

root.render(
  // <App2 />
  <LoginComponent loginService={loginService} setToken={setToken} />
);
