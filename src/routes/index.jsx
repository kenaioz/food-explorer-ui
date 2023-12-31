import { BrowserRouter } from "react-router-dom";

import { AdminRoutes } from "./admin.routes";
import { EditorRoutes } from "./editor.routes";
import { CustomerRoutes } from "./customer.routes";
import { AuthRoutes } from "./auth.routes";

import { useAuth } from "../hooks/auth";
import { USER_PROFILE } from "../utils/roles";

export function Routes() {
  const { user } = useAuth();
  // prettier-ignore

  function AppRoutes() {
    switch (user.role) {
      case USER_PROFILE.ADMIN:
        return <AdminRoutes />;
      case USER_PROFILE.CUSTOMER:
        return <CustomerRoutes />;
      case USER_PROFILE.SALES:
        return <EditorRoutes />;

      default:
        return <AuthRoutes />;
    }
  }

  return <BrowserRouter>{user ? <AppRoutes /> : <AuthRoutes />}</BrowserRouter>;
}
