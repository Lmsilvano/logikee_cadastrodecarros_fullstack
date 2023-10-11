import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { privateRoutes } from "./routes";

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {privateRoutes.map(({ path, element }, idx) => (
          <Route path={path} element={element} key={idx} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;