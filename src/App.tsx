import React, { Suspense, lazy } from "react";
import "./App.css";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

const Home = lazy(() => import("./Pages/Home/Home"));

function App() {
  const router = createBrowserRouter([
    {
      path: "/feed",
      element: <Home />,
    },
    {
      path: "*",
      element: <Navigate to="/feed" />,
    },
  ]);

  return (
    <div className="app">
      <Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={router} />
      </Suspense>
    </div>
  );
}

export default App;
