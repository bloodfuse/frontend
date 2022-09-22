import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import useRefreshToken from "../hooks/useRefreshToken";
import useAuth from "../hooks/useAuth";
import axios from "../api/axios";
const USER_URL = "https://bloodfuse.pythonanywhere.com/api/auth/user/";

const PersistLogin = () => {
  const [isLoading, setIsLoading] = useState(true);
  const refresh = useRefreshToken();
  const { auth, setAuth } = useAuth();

  useEffect(() => {
    let isMounted = true;
    console.log(`isLoading: ${isLoading}`);

    const verifyRefreshToken = async () => {
      try {
        await refresh();
      } catch (err) {
        console.error(err);
      } finally {
        isMounted && setIsLoading(false);
      }
    };

    const userData = async () => {
      try {
        const response = await fetch(USER_URL, {
          method: "GET",
          credentials: true,
        });
        // const response = await axios.get(USER_URL, {
        //   withCredentials: "same-origin",
        // });
        console.log(JSON.stringify(response));

        const mail = response?.data?.email;
        const fullname =
          response?.data?.user?.first_name +
          " " +
          response?.data?.user?.last_name;

        setAuth((prev) => {
          return { ...prev, name: fullname, email: mail };
        });
      } catch (err) {
        console.error(err);
      } finally {
        isMounted && setIsLoading(false);
      }
    };

    // Avoids unwanted call to verifyRefreshToken
    !auth?.accessToken
      ? verifyRefreshToken() && userData()
      : setIsLoading(false);
    // verifyRefreshToken();
    return () => (isMounted = false);
  }, []);

  useEffect(() => {
    console.log(`isLoading: ${isLoading}`);
    console.log(`aT: ${JSON.stringify(auth?.accessToken)}`);
  }, [isLoading]);

  return <>{isLoading ? <p>Loading...</p> : <Outlet />}</>;
};

export default PersistLogin;
