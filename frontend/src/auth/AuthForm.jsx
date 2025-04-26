import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";


function AuthForm({
  isSignUp,
  formData,
  onInputChange,
  onToggleForm,
}) {
  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/home");
    }
  }, []);
  const navigate = useNavigate();
  const signup = async () => {
    if (isSignUp) {
      const res = await fetch("http://localhost:3000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.fname,
          lastname: formData.lname,
          userName: formData.name,
          email: formData.email,
          password: formData.password,
        }),
      });
      const data = await res.json();
      if(data.message === "User created successfully"){
        localStorage.setItem("token", data.token);
        navigate("/home");
      }
      else if(data.message === "User already exists"){
        alert("User already exists");
      }
      else{
        alert("Something went wrong");
      }
    }
    else {
      const res = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });
      const data = await res.json();
      if(data.message === "Login successful"){
        localStorage.setItem("token", data.token);
        navigate("/home");
      }
      else if(data.message === "Invalid credentials"){
        alert("Invalid credentials");
      }
      else{
        alert("Something went wrong");
      }
    }
  };

  {
    return (
      <div className="p-8 w-full rounded-xl border border-solid bg-white/6 border-white/20  max-w-[400px]">
        <header className="mb-8 text-center">
          <h1 className="mb-2 text-2xl font-semibold">
            {isSignUp ? "Create your account" : "Sign in to Trade Tickets"}
          </h1>
          <p className="text-sm text-zinc-400">
            {isSignUp
              ? "Join our community of ticket traders"
              : "Welcome back to Trade Tickets"}
          </p>
        </header>

        <form onSubmit={(e) => e.preventDefault()}>
          {isSignUp && (
            <div className="mb-4">
              <label className="block mb-2 text-sm text-zinc-400">First Name</label>
              <input
                className="px-3 py-2 w-full text-sm rounded-md border border-solid bg-white bg-opacity-10 border-white border-opacity-10 text-black"
                type="text"
                value={formData.fname}
                required
                onChange={(e) => onInputChange("name", e.target.value)}
              />
            </div>
          )}
          {isSignUp && (
            <div className="mb-4">
              <label className="block mb-2 text-sm text-zinc-400">Last Name</label>
              <input
                className="px-3 py-2 w-full text-sm rounded-md border border-solid bg-white bg-opacity-10 border-white border-opacity-10 text-black"
                type="text"
                value={formData.lname}
                required
                onChange={(e) => onInputChange("name", e.target.value)}
              />
            </div>
          )}

          <div className="mb-4">
            <label className="block mb-2 text-sm text-zinc-400">
              Email address
            </label>
            <input
              className="px-3 py-2 w-full text-sm rounded-md border border-solid bg-white bg-opacity-10 border-white border-opacity-10 text-black"
              type="email"
              value={formData.email}
              required
              onChange={(e) => onInputChange("email", e.target.value)}
            />
          </div>

          <div style={{ marginBottom: isSignUp ? "16px" : "24px" }}>
            <label className="block mb-2 text-sm text-zinc-400">Password</label>
            <input
              className="px-3 py-2 w-full text-sm rounded-md border border-solid bg-white bg-opacity-10 border-white border-opacity-10 text-black"
              type="password"
              value={formData.password}
              required
              onChange={(e) => onInputChange("password", e.target.value)}
            />
          </div>

          {isSignUp && (
            <div className="mb-6">
              <label className="block mb-2 text-sm text-zinc-400">
                Confirm password
              </label>
              <input
                className="px-3 py-2 w-full text-sm rounded-md border border-solid bg-white bg-opacity-10 border-white border-opacity-10 text-black"
                type="password"
                value={formData.confirmPassword}
                required
                onChange={(e) => onInputChange("confirmPassword", e.target.value)}
              />
            </div>
          )}

          <button
            className="p-3 w-full text-sm font-semibold bg-green-700 rounded-md cursor-pointer border-none "
            type="submit"
            onClick={() => signup()}
          >
            {isSignUp ? "Create account" : "Sign in"}
          </button>
        </form>

        <div className="mt-6 text-sm text-center text-zinc-400">
          <span>
            {isSignUp ? "Already have an account? " : "New to Trade Tickets? "}
          </span>
          <button
            className="p-0 text-sky-300 cursor-pointer border-none bg-transparent"
            onClick={onToggleForm}
            type="button"
          >
            {isSignUp ? "Sign in" : "Create an account"}
          </button>
        </div>
      </div>
    );
  }
}
export default AuthForm;
