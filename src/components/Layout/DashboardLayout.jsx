import { Outlet } from "react-router-dom";
import { Navbar, SideBar } from "../Dashboard";
import { Navigate } from "react-router-dom";
import { customToast } from "../../utils/customToast";
import { useUserQuery } from "../../features/user/useUser";

const DashboardLayout = ({setstxIsConnect}) => {
  const { isLoading, isError, data } = useUserQuery();
  let loginState = data?.loginState;
  isError && (loginState = !1);

  if (!isLoading) {
    if (!loginState) {
      customToast(
        "You have been logged out. Please login to continue or sign-up if you don't have an account."
      );
      return <Navigate to="/" replace />;
    }
  }

  return (
    <>
      {!isLoading && (
        <div className="flex items-center h-auto md:h-screen">
          <div className="w-[0%] lg:w-[15%] h-full">
            <SideBar />
          </div>
          <div className="flex flex-col items-center w-full lg:w-[85%] h-full">
            <Navbar setstxIsConnect={setstxIsConnect}/>
            <div className="bg-[#F0F0F0] w-full h-auto">
              <Outlet />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DashboardLayout;
