import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Details } from "../pages/Details";
import { NotFound } from "../pages/NotFound";
import { Edit } from "../pages/Edit";
import { Create } from "../pages/Create";

export function EditorRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/edit/:id" element={<Edit />} />
      <Route path="/create" element={<Create />} />

      <Route path="*" exact={true} element={<NotFound />} />
    </Routes>
  );
}
