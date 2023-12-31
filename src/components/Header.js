import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { NETFLIX_LOGO } from "../utils/constant";
import { toggleGptSearchView } from "../utils/gptSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const gptClick = useSelector((store) => store.gpt?.toggleGptSearch);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));

        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleGptSearch = () => {
    dispatch(toggleGptSearchView());
    console.log("hitt");
  };

  return (
    <div className="absolute p-5 bg-gradient-to-b from-black w-full z-10 flex flex-col md:flex-row  justify-between">
      <img
        className="w-[100px] md:w-[170px] mx-auto md:mx-0 mb-5 md:mb-0"
        alt="header-img"
        src={NETFLIX_LOGO}
      />
      {user && (
        <div className="mx-auto md:mx-0">
          <button
            className="rounded bg-green-600 text-white text-semibold mr-5 p-2 cursor-pointer"
            onClick={handleGptSearch}
          >
            {gptClick ? "Homepage" : "GPT Search"}
          </button>
          <span className="mr-5 text-white border p-2">
            {user?.displayName?.split(" ")[0]}
          </span>
          <button
            className="bg-red-600 p-2 rounded-lg text-bold text-white"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
