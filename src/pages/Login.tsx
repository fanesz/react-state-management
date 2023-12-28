import LoginPanel from "../components/Login/LoginPanel";
import MainPanel from "../components/Login/MainPanel";

const Login = () => {
  return (
    <div>
      <div className="flex">
        <div className="h-screen w-4/5">
          <MainPanel />
        </div>

        <div className="m-auto h-fit pb-28">
          <LoginPanel />
        </div>
      </div>
    </div>
  );
};

export default Login;
