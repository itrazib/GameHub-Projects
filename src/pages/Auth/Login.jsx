import React, { useState, useEffect, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import Swal from "sweetalert2";
import banner from "../../assets/banner.jpg";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../context/AuthContext";

export default function Login() {
  const { loginWithEmail, loginWithGoogle } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state?.email) setEmail(location.state.email);
  }, [location.state]);

  async function handle(e) {
    e.preventDefault();
    try {
      await loginWithEmail(email, password);
      Swal.fire("Welcome!", "Login Successful 🎉", "success");
      navigate("/");
    } catch (error) {
      Swal.fire("Error", error.message, "error");
    }
  }

  async function handleGoogle() {
    try {
      await loginWithGoogle();
      Swal.fire("Welcome!", "Login Successful 🎉", "success");
      navigate("/");
    } catch (error) {
      Swal.fire("Error", error.message, "error");
    }
  }

  return (
    <div className=" flex flex-col md:flex-row items-center justify-center gap-10  p-6">
      <title>Login</title>

      {/* Banner Image */}
      <div className="flex-shrink-0">
        <img
          src={banner}
          alt="Banner"
          className="w-full max-w-md rounded-2xl shadow-lg object-cover"
        />
      </div>

      {/* Login Card */}
      <div className="w-full max-w-md bg-gradient text-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold  mb-6 text-center">Login</h2>

        <form onSubmit={handle} className="flex flex-col gap-4">
          {/* Email */}
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
          />

          {/* Password */}
          <div className="relative">
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg  focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-gray-500 cursor-pointer"
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </span>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-3  bg-yellow-500 text-gray-900 font-semibold  rounded-lg hover:bg-yellow-400 transition-colors"
          >
            Login
          </button>
        </form>

        {/* Google Login */}
        <button
          onClick={handleGoogle}
          className="mt-4 w-full flex items-center justify-center gap-2 py-3 border border-gray-300 rounded-lg hover:bg-yellow-400 hover:text-black transition"
        >
          <svg
            aria-label="Google logo"
            width="20"
            height="20"
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

        {/* Links */}
        <div className="mt-4 flex flex-col gap-2 text-center ">
          <Link to="/forgot-password" state={{ email }} className="hover:underline">
            Forgot password?
          </Link>
          <p>
            Don't have an account?{" "}
            <Link to="/register" className="text-yellow-500 hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
