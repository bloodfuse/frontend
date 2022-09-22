import { axiosPrivate } from "../api/axios";
import useAuth from "./useAuth";
import Enc from "crypto-js/enc-utf8";
import AES from "crypto-js/aes";
const useRefreshToken = () => {
  const { setAuth } = useAuth();

  const REFRESH_URL = "auth/token/refresh/";

  const token = sessionStorage.getItem("refreshToken");
  const refresh = async () => {
    const response = await axiosPrivate.post(
      REFRESH_URL,
      JSON.stringify({
        refresh: AES.decrypt(token, process.env.REACT_APP_SALT_KEY).toString(
          Enc
        ),
      })
    );

    setAuth((prev) => {
      console.log(JSON.stringify(prev));
      console.log(response.data.access);
      return { ...prev, accessToken: response.data.access };
    });
    return response.data.access_Token;
  };
  return refresh;
};

export default useRefreshToken;
