import { FC, memo } from "react";
import { Routes, Route } from "react-router-dom";
import { Login } from "@/components/pages/Login";
import { HomeRoutes } from "./HomeRoutes";
import { Page404 } from "@/components/pages/Page404";
import { HeaderLayout } from "@/components/templates/HeaderLayout";
import ProtectedRoute from "./ProtectedRoute";

export const Router: FC = memo(() => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      {HomeRoutes.map((route) => (
        <Route
          key={route.path}
          path={`/home${route.path}`}
          element={<ProtectedRoute element={<HeaderLayout>{route.element}</HeaderLayout>} />}
        />
      ))}
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
});
