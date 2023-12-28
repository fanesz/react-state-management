import { useState } from "react";
import { login } from "../api/services";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    const res = await login(username, password);
    if (res.token) {
      document.cookie = `token=${res.token}; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
      navigate("/products");
    } else {
      setError("Invalid username or password");
      setTimeout(() => {
        setError("");
      }, 3000);
    }
  };

  return (
    <div>
      <div className="flex">
        <div className="bg-gradient-to-r from-gray-800 to-gray-900  h-screen w-4/5"></div>

        <div className="m-auto h-fit pb-28">
          <div className="mb-3 font-medium text-xl">LOGIN TO YOUR ACCOUNT</div>

          <div>
            <input
              type="text"
              placeholder="Username"
              className="border border-gray-300 p-2 rounded h-12 w-full focus:outline-none focus:border-2 focus:border-black hover:border-1 hover:border-black mb-3"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              className="border border-gray-300 p-2 rounded h-12 w-full focus:outline-none focus:border-2 focus:border-black hover:border-1 hover:border-black mb-4"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="text-blue-700 underline text-end mb-3">
            Forgot Password
          </div>

          <div>{error && <div className="text-red-500 mb-3">{error}</div>}</div>

          <div>
            <button
              className="primary shadow-sm hover:bg-gray-900 w-full h-9 rounded text-white mb-4"
              onClick={handleLogin}
            >
              Log In
            </button>
          </div>

          <div className="flex justify-center mb-4">
            <div className="w-7 h-px bg-gray-300 my-auto me-2" />
            <div className="font-medium">OR</div>
            <div className="w-7 h-px bg-gray-300 my-auto ms-2" />
          </div>

          <div className="flex mb-8">
            <button className="w-fit border border-gray-200 rounded shadow-md px-5 py-2 mx-auto text-gray-500 hover:text-gray-700">
              Sign in with Google
            </button>
          </div>

          <div className="h-px bg-gray-300 my-auto mb-7" />

          <div className="font-medium text-xl text-center mb-4">
            Don't have account?
          </div>

          <div>
            <button className="primary shadow-sm hover:bg-gray-900 w-full h-9 rounded text-white mb-4">
              REGISTER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
