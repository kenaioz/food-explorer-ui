import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Details } from "../pages/Details";
import { Orders } from "../pages/Orders";
import { NotFound } from "../pages/NotFound";

export function CustomerRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/orders/" element={<Orders />} />

      <Route path="*" exact={true} element={<NotFound />} />
    </Routes>
  );
}
