import { useRef, useState } from "react";
import Header from "./Header";
import { validate } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";

import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMssg, setErrorMssg] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const dispatch = useDispatch();

  const handleSignInToggle = () => {
    setIsSignIn(!isSignIn);
  };

  const handleSubmit = () => {
    const validateMessage = validate(
      email.current.value,
      password.current.value
    );
    setErrorMssg(validateMessage);

    if (validateMessage) return;

    //   signup and signin here
    if (!isSignIn) {
      // signup

      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
            })
            .catch((error) => {
              setErrorMssg(error.message);
            });
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMssg(errorCode + ":" + errorMessage);
        });
    } else {
      //signin
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMssg(errorCode + ":" + errorMessage);
        });
    }
  };

  return (
    <div>
      {" "}
      <Header />
      <div className="absolute">
        <img
          className="w-screen h-screen"
          alt="bg-img"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/14a8fe85-b6f4-4c06-8eaf-eccf3276d557/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        />
      </div>
      <div className=" bg-black/90  backdrop-blur-[1px] w-[350px] h-auto rounded-lg relative m-auto text-white top-[150px] p-5 from-black">
        <h1 className="text-3xl text-white font-bold">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="flex flex-col "
        >
          {!isSignIn && (
            <input
              ref={name}
              type="text"
              className="border-black m-4 rounded h-10 p-2 bg-slate-600 "
              placeholder="Full Name"
            ></input>
          )}
          <input
            ref={email}
            type="email"
            className="border-black m-4 rounded h-10 p-2 bg-slate-600 "
            placeholder="Email Address"
          ></input>
          <input
            ref={password}
            type="password"
            className="border-black m-4 rounded h-10 p-2 bg-slate-600 "
            placeholder="Password"
          ></input>

          <p className="text-red-500 text-xs italic mx-4">{errorMssg}</p>

          <button
            className="bg-red-700  text-white m-4 p-2  rounded-lg"
            onClick={handleSubmit}
          >
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
