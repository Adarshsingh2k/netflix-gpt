import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const handleSignInToggle = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div>
      {" "}
      <Header />
      <div className="absolute">
        <img
          className=""
          src="https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/14a8fe85-b6f4-4c06-8eaf-eccf3276d557/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        />
      </div>
      <div className=" bg-black/90  backdrop-blur-[1px] w-[350px] h-auto rounded-lg relative m-auto text-white top-[150px] p-5 from-black">
        <h1 className="text-3xl text-white font-bold">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        <form className="flex flex-col ">
          {!isSignIn && (
            <input
              type="text"
              className="border-black m-4 rounded h-10 p-2 bg-slate-600 "
              placeholder="Full Name"
            ></input>
          )}
          <input
            type="email"
            className="border-black m-4 rounded h-10 p-2 bg-slate-600 "
            placeholder="Email Address"
          ></input>
          <input
            type="password"
            className="border-black m-4 rounded h-10 p-2 bg-slate-600 "
            placeholder="Password"
          ></input>
          <button className="bg-red-700  text-white m-4 p-2  rounded-lg">
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>

          <p className="m-4 cursor-pointer" onClick={handleSignInToggle}>
            {isSignIn
              ? "New to Netflix? Sign Up Now"
              : "Already Registered. Sign In"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
