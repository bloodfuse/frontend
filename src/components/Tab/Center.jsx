import { useState } from "react";
import { GoogleIcon } from "../../assets/images";
import ReCAPTCHA from "react-google-recaptcha";
import { toast } from "react-hot-toast";
import { APP_MODE, SITE_KEY } from "../../config";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../features/user/RegisterUser";
import { getUserDetailsQuery } from "../../features/user/useUser";
import { useMutation, useQuery } from "@tanstack/react-query";

const Recepient = ({ activeTabIndex, closeModal, openLoginModalFunc }) => {
  const [captchaRef, setCaptchaRef] = useState(!0);
  const onCaptchaChange = () => setCaptchaRef(!1);
  const [self, setSelf] = useState(!1);
  const navigate = useNavigate();
  const [regInfo, setRegInfo] = useState({
    email: "",
    account_type: "donation_center",
    rc_number: "",
    center_name: "",
    phone: "",
    password1: "",
    password2: "",
    location: "",
  });

  const handleChange = (event) => {
    setRegInfo({ ...regInfo, [event.target.name]: event.target.value });
  };

  let loadingToast;
  const { mutate, isSuccess, isLoading } = useMutation({
    mutationKey: "register",
    mutationFn: registerUser,
    onMutate: () => {
      loadingToast = toast.loading("Creating account...", { id: loadingToast });
    },
    onSuccess: async (res) => {
      localStorage.setItem(
        "cfb90493-c364-4ade-820d-b6848bc65f44",
        res.access_token
      );
      // localStorage.setItem(
      //   "e2d0b95b-cf43-481f-8c7a-65dd35203800",
      //   res.refresh_token
      // );
    },
    onError: (err) => {
      if (err.status === 400) {
        toast.remove(loadingToast);
        for (const key in err.message) {
          setTimeout(() => {
            toast.error(err.message[key][0], { duration: 6000, id: key });
          }, 1000);
        }
      } else {
        toast.remove();
        toast.error(
          <p>
            BloodFuse is unable to process your request,{" "}
            <b>Try Again, Shortly</b>
          </p>,
          { duration: 6000, id: "serverError" }
        );
      }
    },
  });

  const { isLoading: Loading } = useQuery({
    queryKey: ["user"],
    queryFn: getUserDetailsQuery,
    enabled: isSuccess,
    onSuccess: () => {
      if (self) toast.dismiss(loadingToast);
      self &&
        toast.success(
          <span>Your account has been successfully created. </span>,
          {
            id: loadingToast,
            duration: 5000,
          }
        );
      if(self) setTimeout(() => navigate("/dashboard/main"), 1500);
    },
    onError: () => {
      self &&
        toast.error(<b>Unable to Log you in, Try again. DT</b>, {
          id: loadingToast,
          duration: 5000,
        });
    },
  });

  if(Loading && self) toast.loading("Logging you in...", { id: loadingToast });

  const handleSignUp = async (e) => {
    e.preventDefault();
    //perform check on regInfo
    const {
      email,
      account_type,
      rc_number,
      center_name,
      phone,
      location,
      password1,
      password2,
    } = regInfo;
    if (
      !email ||
      !account_type ||
      !rc_number ||
      !center_name ||
      !location ||
      !phone ||
      !password1 ||
      !password2
    ) {
      toast.error("All fields are required to register");
      return;
    }
    const checkBox = document.getElementById("agreeTerms");

    if (password1 !== password2) {
      toast.error("Both passwords don't match");
      return;
    }

    if (!checkBox.checked) {
      toast.error(
        <p>
          You have to agree to the <b>Terms and Conditions</b> to process.
        </p>
      );
      return;
    }
    if (isLoading) return;
    setSelf(!0);
    await mutate(regInfo);
  };
  // if (loginState) return <Navigate to="/dashboard/main" />;

  return (
    <div className={activeTabIndex === 1 ? "block mt-2" : "hidden"}>
      <div className="flex flex-col justify-between px-auto w-full mb-7 items-center">
        <div className="flex justify-center px-auto w-full">
          {/* <div>Sign up with</div> */}
          <div className="hidden sm:flex gap-1">
            Already a member? {"  "}
            <span
              className="text-red-600 cursor-pointer"
              onClick={() => {
                closeModal();
                setTimeout(() => {
                  openLoginModalFunc();
                }, 500);
              }}
            >
              {"  "}Login now
            </span>
          </div>
        </div>

        {/* <div className="flex justify-center gap-2 px-auto w-full mb-7 items-center">
          <div>
            <button className="text-white px-12 text-sm   bg-black hover:bg-gray-600 focus:ring-4 focus:outline-none  focus:ring-gray-300 font-medium rounded-md    py-5 text-center">
              <div className="flex items-center space-between">
                <img
                  className="mr-2 -ml-1 w-5 h-5"
                  aria-hidden="true"
                  src={GoogleIcon}
                  alt="google"
                />
                <span className="pl-2">Google</span>
              </div>
            </button>
          </div>
          <div>
            <button
              type="submit"
              className="text-white px-12 text-sm  bg-blue-700 hover:bg-blue-900 focus:ring-4 focus:outline-none  focus:ring-red-300 font-medium rounded-md    py-5 text-center"
            >
              <div className="flex items-center space-between">
                <svg
                  className="mr-2 -ml-1 w-5 h-5"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="facebook-f"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path
                    fill="currentColor"
                    d="M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z"
                  ></path>
                </svg>{" "}
                <span className="pl-2">Facebook</span>
              </div>
            </button>
          </div>
          <div>
            <button className="text-white px-12 text-sm  bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none  focus:ring-red-300 font-medium rounded-md    py-5 text-center">
              <div className="flex items-center space-between">
                <svg
                  className="mr-2 -ml-1 w-5 h-5"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="twitter"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M459.4 151.7c.325 4.548 .325 9.097 .325 13.65 0 138.7-105.6 298.6-298.6 298.6-59.45 0-114.7-17.22-161.1-47.11 8.447 .974 16.57 1.299 25.34 1.299 49.06 0 94.21-16.57 130.3-44.83-46.13-.975-84.79-31.19-98.11-72.77 6.498 .974 12.99 1.624 19.82 1.624 9.421 0 18.84-1.3 27.61-3.573-48.08-9.747-84.14-51.98-84.14-102.1v-1.299c13.97 7.797 30.21 12.67 47.43 13.32-28.26-18.84-46.78-51.01-46.78-87.39 0-19.49 5.197-37.36 14.29-52.95 51.65 63.67 129.3 105.3 216.4 109.8-1.624-7.797-2.599-15.92-2.599-24.04 0-57.83 46.78-104.9 104.9-104.9 30.21 0 57.5 12.67 76.67 33.14 23.72-4.548 46.46-13.32 66.6-25.34-7.798 24.37-24.37 44.83-46.13 57.83 21.12-2.273 41.58-8.122 60.43-16.24-14.29 20.79-32.16 39.31-52.63 54.25z"
                  ></path>
                </svg>{" "}
                <span className="pl-2">Twitter</span>
              </div>
            </button>
          </div>
        </div> */}
        <div className="sm:hidden pb-4 flex items-center">
          Already a member?{"  "}
          <span
            className="text-red-600 cursor-pointer px-2"
            onClick={() => {
              closeModal();
              setTimeout(() => {
                openLoginModalFunc();
              }, 500);
            }}
          >
            Login now
          </span>
        </div>
        <div className="relative my-3 mx-auto w-full">
          <div className="absolute  inset-0 flex items-center">
            <div className="w-full border-b border-gray-300"></div>
          </div>
          {/* <div className="relative flex justify-center">
            <span className="bg-white px-4 text-sm text-black">
              Or sign up with your email
            </span>
          </div> */}
        </div>

        <form className="w-full" onSubmit={handleSignUp}>
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="text"
              name="center_name"
              id="center_name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-red-600 peer"
              placeholder=" "
              value={regInfo.center_name}
              onChange={handleChange}
            />
            <label
              htmlFor="center_name"
              className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Name of hospital, center or blood bank
            </label>
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="email"
              name="email"
              id="center_email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none       focus:outline-none focus:ring-0 focus:border-red-600 peer"
              placeholder=" "
              value={regInfo.email}
              onChange={handleChange}
            />
            <label
              htmlFor="center_email"
              className="peer-focus:font-medium absolute text-sm text-gray-500   duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-600    peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email Address
            </label>
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="number"
              name="phone"
              id="center_phone"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-red-600 peer"
              placeholder=" "
              value={regInfo.phone}
              onChange={handleChange}
              pattern="^(?:(?:(?:\+?234(?:\h1)?|01)\h*)?(?:\(\d{3}\)|\d{3})|\d{4})(?:\W*\d{3})?\W*\d{4}$"
              minLength="11"
              maxLength="13"
            />
            <label
              htmlFor="phone"
              className="peer-focus:font-medium absolute text-sm text-gray-500   duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-600    peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Phone Number
            </label>
          </div>

          <div className="relative z-0 mb-6 w-full group">
            <input
              type="number"
              name="rc_number"
              id="rc_number"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none       focus:outline-none focus:ring-0 focus:border-red-600 peer"
              placeholder=" "
              value={regInfo.rc_number}
              onChange={handleChange}
            />
            <label
              htmlFor="rc_number"
              className="peer-focus:font-medium absolute text-sm text-gray-500   duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-600    peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              RC Number
            </label>
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="text"
              name="location"
              id="center_location"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none       focus:outline-none focus:ring-0 focus:border-red-600 peer"
              placeholder=" "
              value={regInfo.location}
              onChange={handleChange}
            />
            <label
              htmlFor="center_location"
              className="peer-focus:font-medium absolute text-sm text-gray-500   duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-600    peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Center Address
            </label>
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="password"
              name="password1"
              id="center_password"
              className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none       focus:outline-none focus:ring-0 focus:border-red-600 peer"
              placeholder=" "
              value={regInfo.password1}
              onChange={handleChange}
            />
            <label
              htmlFor="center_password"
              className="peer-focus:font-medium absolute text-sm text-gray-500   duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-600    peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Password
            </label>
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="password"
              name="password2"
              id="password2"
              className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none       focus:outline-none focus:ring-0 focus:border-red-600 peer"
              placeholder=" "
              value={regInfo.password2}
              onChange={handleChange}
            />
            <label
              htmlFor="password2"
              className="peer-focus:font-medium absolute text-sm text-gray-500   duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-600    peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Confirm Password
            </label>
          </div>
          <div className="flex items-center justify-between my-10">
            <div className="flex items-center ">
              <input
                id="agreeTerms"
                type="checkbox"
                value=""
                className="w-4 h-4 text-red-600 accent-red-500 bg-gray-100 rounded border-gray-300 focus:ring-black-500"
              />
              <label
                htmlFor="agreeTerms"
                className="ml-2 text-sm font-medium text-black"
              >
                <span className=" text-bold">
                  I have read and accepted the{" "}
                  <span className="text-red-500 underline">
                    Terms and Conditions
                  </span>{" "}
                  and
                  <span className="text-red-500 underline">
                    {" "}
                    Privacy Policy
                  </span>
                </span>
              </label>
            </div>
          </div>
          <div className="my-8">
            <ReCAPTCHA sitekey={SITE_KEY} onChange={onCaptchaChange} />
          </div>
          <button
            disabled={APP_MODE !== "local" && (captchaRef || isLoading)}
            type="submit"
            className="text-white px-7 transform sm:uppercase text-lg bg-[#F00530] disabled:bg-red-800 disabled:cursor-not-allowed focus:ring-4 focus:outline-none leading-loose focus:ring-red-300 font-medium rounded-[4px]  w-full py-2 lg:py-4 text-center"
          >
            {isLoading ? (
              <>
                <div
                  role="status"
                  className="flex justify-center gap-2 items-center"
                >
                  <svg
                    aria-hidden="true"
                    className=" w-8 h-6 text-gray-200 animate-spin  fill-white"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>{" "}
                  CREATING YOUR
                  <span className="sr-only">Logging in...</span>
                </div>
              </>
            ) : (
              `CREATE YOUR ACCOUNT`
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Recepient;
