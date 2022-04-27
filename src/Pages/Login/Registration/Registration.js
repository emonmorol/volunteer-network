import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Social from "../Social/Social";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import { useUpdateProfile } from "react-firebase-hooks/auth";

const Registration = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile] = useUpdateProfile(auth);

  // const [errors, setErrors] = useState({
  //   wrongPassword: "",
  //   wrongEmail: "",
  //   passwordMatch: "",
  // });

  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate(from);
    }
  }, [user]);

  let errorMessage;
  if (error) {
    errorMessage = <p className="error">Error: {error.message}</p>;
  }
  if (loading) {
    return <Loading />;
  }

  const handleUserSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
    // if (
    //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/.test(password) === false
    // ) {
    //   setErrors({
    //     ...errors,
    //     wrongPassword: "Password Must Contains one letter and one number",
    //   });
    // }
    // if (password !== confirmPassword) {
    //   setErrors({ ...errors, passwordMatch: "Password Didn't Match" });
    // }
    // if (/\S+@\S+\.\S+/.test(email) === false) {
    //   setErrors({ ...errors, wrongEmail: "Invalid Email" });
    // } else {
    //   setErrors({ wrongPassword: "", wrongEmail: "", passwordMatch: "" });
    // }
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName });
  };

  return (
    <>
      <div className="lg:flex">
        <div className="lg:w-1/2 xl:max-w-screen-sm">
          <div className="mt-8 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
            <h2
              className="text-center text-4xl text-indigo-900 font-display font-extrabold lg:text-left xl:text-5xl
                    xl:text-bold"
            >
              Registration
            </h2>
            <div className="mt-8">
              <form onSubmit={handleUserSubmit}>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="floatingInput"
                    placeholder="Your Name"
                  />
                  <label htmlFor="floatingInput">Your full name</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="Your Email"
                  />
                  <label htmlFor="floatingInput">Email address</label>
                </div>
                {/* {errors?.wrongEmail && (
                  <p className="error">{errors.wrongEmail}</p>
                )} */}
                <div className="form-floating mb-3">
                  <input
                    type="password"
                    name="password"
                    className="form-control "
                    id="floatingPassword"
                    placeholder="Password"
                    required
                  />
                  <label htmlFor="floatingPassword">Your Password</label>
                </div>
                {/* {errors?.wrongPassword && (
                  <p className="error">{errors.wrongPassword}</p>
                )} */}
                <div className="form-floating">
                  <input
                    type="password"
                    name="confirmPassword"
                    className="form-control "
                    id="floatingConfirmPassword"
                    placeholder="Confirm Password"
                  />
                  <label htmlFor="floatingConfirmPassword">
                    Confirm Password
                  </label>
                </div>
                {/* {errors?.passwordMatch && (
                  <p className="error">{errors.passwordMatch}</p>
                )} */}
                {errorMessage}
                <div className="mt-8">
                  <button className="bg-indigo-500 text-gray-100 px-4 py-2.5 w-full rounded-full tracking-wide font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600 shadow-lg">
                    Register
                  </button>
                </div>
              </form>
              <div className="mt-8 text-sm font-display font-semibold text-gray-700 text-center">
                Already Have An Account ?{" "}
                <Link
                  to="/login"
                  className="cursor-pointer text-indigo-600 hover:text-indigo-800"
                >
                  Login
                </Link>
              </div>
            </div>
            <div>
              <Social />
            </div>
          </div>
        </div>
        <div className="hidden lg:flex items-center justify-center bg-indigo-100 flex-1 h-[90vh]">
          <div className="max-w-lg transform duration-200 hover:scale-110 cursor-pointer ">
            <img
              src="https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
