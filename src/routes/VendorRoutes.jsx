import Loader from "../component/spinner/Loader";
import useAuth from "../hook/useAuth";
import useRole from "../hook/useRole";
import ForbiddenPage from "../pages/forbbidenPage/ForbbidenPage";

const VendorRoutes = ({ children }) => {
  const { data: userRole, isLoading } = useRole();
  const { loading } = useAuth();

  if (loading || isLoading) {
    return <Loader />;
  }


  if (userRole.role !== "vendor") {
    return <ForbiddenPage />;
  }
  return children;
};

export default VendorRoutes;
