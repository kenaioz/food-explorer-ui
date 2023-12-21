import { BrowserRouter } from "react-router-dom";

// import { useAuth } from "../hooks/auth";

// import { AppRoutes } from "./app.routes";
// import { AuthRoutes } from "./auth.routes";

import { Home } from "../pages/Home";
import { Details } from "../pages/Details";
import { NotFound } from "../pages/NotFound";
import { Suppliers } from "../pages/Suppliers";
import { SalesReport } from "../pages/SalesReport";

export function Routes() {
  // const { user } = useAuth();

  return (
    <BrowserRouter>
      {/* {user ? <AppRoutes /> : <AuthRoutes />} */}
      <Details />
    </BrowserRouter>
  );
}
