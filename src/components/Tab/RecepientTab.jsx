import React, {useState} from "react";
import googleIcon from "../../assets/google-icon.png";
import ReCAPTCHA from "react-google-recaptcha";

const Recepient = ({ activeTabIndex, closeModal, openLoginModalFunc }) => {
  const [captchaRef, setCaptchaRef] = useState(true);
  const onCaptchaChange = () => setCaptchaRef(false);

  return (
    <div className={activeTabIndex === 1 ? "block mt-2" : "hidden"}>
      <div className="flex flex-col justify-between px-auto w-full mb-7 items-center">
        <div className="flex justify-between px-auto w-full mb-7">
          <div>Sign up with</div>
          <div>
            Already a member? 
            <span className="text-red-600 cursor-pointer"
             onClick={() => {
              closeModal();
              setTimeout(() => {
                openLoginModalFunc();
              }, 200);
            }}
            >
              Login now</span>{" "}
          </div>
        </div>

        <div className="flex justify-between px-auto w-full mb-7 items-center">
          <div>
            <button className="text-white sm:px-12 px-7 text-sm sm:text-md  bg-black hover:bg-gray-600 focus:ring-4 focus:outline-none  focus:ring-gray-300 font-medium rounded-md    py-5 text-center">
              <div className="flex items-center space-between">
                <img
                  className="mr-2 -ml-1 w-4 h-4"
                  aria-hidden="true"
                  src={googleIcon}
                  alt="google"
                />
                <span className="pl-2">Google</span>
              </div>
            </button>
          </div>
          <div>
            <button
              type="submit"
              className="text-white sm:px-12 px-7 text-sm sm:text-md bg-blue-700 hover:bg-lue-900 focus:ring-4 focus:outline-none  focus:ring-blue-300 font-medium rounded-md    py-5 text-center"
            >
              <div className="flex items-center space-between">
                <svg
                  className="mr-2 -ml-1 w-4 h-4"
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
            <button className="text-white sm:px-12 px-7 text-sm sm:text-md bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none  focus:ring-blue-300 font-medium rounded-md    py-5 text-center">
              <div className="flex items-center space-between">
                <svg
                  className="mr-2 -ml-1 w-4 h-4"
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
        </div>
        <div className="relative my-3 mx-auto w-full">
          <div className="absolute  inset-0 flex items-center">
            <div className="w-full border-b border-gray-300"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-white px-4 text-sm text-black">
              Or sign up with your email
            </span>
          </div>
        </div>

        <form className="w-full">
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="text"
              name="recepient_name"
              id="recepient_name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="recepient_name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Full Name
            </label>
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="text"
              name="institute_Name"
              id="institute_Name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="institute_Name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Name of hospital, center or blood bank
            </label>
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="email"
              name="recipient_email"
              id="recipient_email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="recipient_email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email Address
            </label>
          </div>

          <div className="relative z-0 mb-6 w-full group">
            <input
              type="number"
              name="rc_number"
              id="rc_number"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="rc_number"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              RC Number (Optional)
            </label>
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="password"
              name="recepient_password"
              id="recepient_password"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_password"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Password
            </label>
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="password"
              name="repeatPassword"
              id="recepient_repeat_Password"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="repeatPassword"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Repeat Password
            </label>
          </div>
          <div className="flex items-center justify-between my-10">
            <div className="flex items-center ">
              <input
                id="recepient"
                type="checkbox"
                value=""
                className="w-4 h-4 text-red-600 accent-red-500 bg-gray-100 rounded border-gray-300 focus:ring-black-500"
                required
              />
              <label
                htmlFor="recepient"
                className="ml-2 text-sm font-medium text-black dark:text-black-300"
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
            <ReCAPTCHA
              sitekey={process.env.REACT_APP_SITE_KEY}
              onChange={onCaptchaChange}
            />
          </div>
          <button
            type="submit"
            disabled={captchaRef}
            className="text-white px-7 transform uppercase text-lg bg-[#F00530] disabled:bg-red-700 focus:ring-4 focus:outline-none leading-loose focus:ring-red-300 font-medium rounded-[4px]  w-full  py-4 text-center"
          >
            Create Your Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Recepient;
