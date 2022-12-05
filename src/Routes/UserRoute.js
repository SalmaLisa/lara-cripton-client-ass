import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider";
import useUser from "../Hooks/useUser";
import Spinner from "../Shared/Spinner";

const UserRoute = ({ children }) => {
  const { user, isLoading } = useContext(AuthContext)
  const location = useLocation()
  console.log(user?.email)
  const [isUser, isUserLoading] = useUser(user?.email)
  if (isUserLoading || isLoading) {
   return <Spinner></Spinner>
  }
  
  console.log(isUser)
  if (user?.uid && isUser) {
    return children
  }
  return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default UserRoute;