import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../firebase/AuthContext";
import { Link, useLocation, useNavigate } from "react-router";

import banner from "../../assets/banner.jpg";
// import { useNavigate, Link, useLocation } from 'react-router-dom';

export default function Login() {
  const { loginWithEmail, loginWithGoogle } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state?.email) setEmail(location.state.email);
  }, [location.state]);

  async function handle(e) {
    e.preventDefault();
    try {
      await loginWithEmail(email, password);
      navigate("/");
    } catch (err) {
      alert("Login failed: " + err.message);
    }
  }

  async function handleGoogle() {
    try {
      await loginWithGoogle();
      navigate("/");
    } catch (err) {
      alert("Google login failed", err.message);
    }
  }

  return (
    <div className="flex justify-center items-center gap-10 mt-5">
      <div>
        <img className="w-[500px] rounded-2xl" src={banner} alt="" />
      </div>
      <div className="card max-w-[350px] bg-white p-5">
        <h2 className="text-3xl font-bold mb-3">Login</h2>
        <form onSubmit={handle}>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            required
            className="w-full mb-3 px-3 py-2 rounded-md bg-white  text-gray-700 border-1 border-gray-400 "
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            required
            className="w-full mb-3 px-3 py-2 rounded-md  bg-white  text-gray-700 border-1 border-gray-400 "
          />
          <button className="btn btn-accent w-full text-white text-[18px]">
            Login
          </button>
        </form>

        <div className="mt-3">
          <button
            onClick={handleGoogle}
            className="btn bg-white text-black border-[#e5e5e5] w-full"
          >
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>
        </div>

        <p className="mt-3 text-slate-400">
          <Link to="/forgot-password" state={{ email }}>
            Forgot password?
          </Link>
        </p>

        <p className="mt-2 text-slate-400">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-500 underline ">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
