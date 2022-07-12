import { useHistory } from "react-router-dom";
import { UserAuth } from "../../contexts/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user } = UserAuth();

  const history = useHistory();

  if (!user) {
    return history.push("/");
  }

  return children;
};

export default ProtectedRoute;
