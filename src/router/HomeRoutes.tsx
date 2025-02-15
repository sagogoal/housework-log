import { Home } from "@/components/pages/Home";
import { UserManagement } from "@/components/pages/UserManagement";
import { Setting } from "@/components/pages/Setting";

export const HomeRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/user_management", // /home/user_management
    element: <UserManagement />,
  },
  {
    path: "/setting", // /home/setting
    element: <Setting />,
  },
];
