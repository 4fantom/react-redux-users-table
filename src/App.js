import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import RoutePaths from "./helpers/RoutePaths";

const HomePage = lazy(() => import("./modules/home/Home"));
const UsersPage = lazy(() => import("./modules/users/Users"));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<></>}>
        <Routes>
          <Route exact path={RoutePaths.root} element={<HomePage />} />
          <Route exact path={RoutePaths.users} element={<UsersPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
