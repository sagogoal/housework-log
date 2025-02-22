import { FC, ReactElement } from "react";
import { Navigate } from "react-router-dom";
import { useAtom } from "jotai";
import { authStatusAtom } from "@/atoms/authAtoms";

interface ProtectedRouteProps {
  element: ReactElement;
}

const ProtectedRoute: FC<ProtectedRouteProps> = ({ element }) => {
  const [authStatus] = useAtom(authStatusAtom);

  if (authStatus === "loading") {
    // 認証状態を確認中の場合、ローディング表示などを行う
    return <div>Loading...</div>;
  }

  return authStatus === "ok" ? element : <Navigate to="/" replace />;
};

export default ProtectedRoute;
