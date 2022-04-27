import React, { useEffect } from "react";
import auth from "../../../firebase.init";
import github from "../../../logos/github.png";
import {
  useSignInWithGoogle,
  useSignInWithGithub,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";

const Social = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);

  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();

  useEffect(() => {
    if (user || user1) {
      navigate(from);
    }
  }, [user, user1]);
  if (loading || loading1) {
    return <Loading />;
  }
  let errorMessage;
  if (error || error1) {
    errorMessage = <p className="error my-2">Error: {error.message}</p>;
  }

  return (
    <>
      {errorMessage}
      <div>
        <div className="toggle-link flex items-center justify-center">
          <div className="border w-full"></div>
          <div className="m-3 text-base">Or</div>
          <div className="border w-full"></div>
        </div>
        {/* {errorElement} */}
        <button
          onClick={() => signInWithGoogle()}
          className="group relative font-sans w-full flex justify-center items-center py-2 px-4 shadow-md border text-sm font-normal
                  bg-white text-black rounded-full hover:shadow-inner focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 mb-3"
        >
          <img
            className="w-1/12 mr-2"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoAbZUfVUgAB3F7PrFvnrseBXmYJ2goO2-jGeIBH5sqD8nD_ZyCC8MAI1jzQo3ZnnCQrE&usqp=CAU"
            alt=""
          />
          Continue With Google
        </button>
        <button
          onClick={() => signInWithGithub()}
          className="group relative font-sans w-full flex justify-center items-center py-2 px-4 shadow-md border text-sm font-normal
                  bg-white text-black rounded-full hover:shadow-inner focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 mb-3"
        >
          <img src={github} className="w-1/12 mr-2" alt="" />
          Continue With Github
        </button>
      </div>
    </>
  );
};

export default Social;
