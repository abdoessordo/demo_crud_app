import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer/Footer";
import Admin from "./Pages/Admin/Admin";
import AddProductPage from "./Pages/AddProduct/AddProductPage";
import LoadingAnimation from "./Components/LoadingAnimation/LoadingAnimation";

function App() {
  const Layout = () => {
    return (
      <div className="min-h-screen flex flex-col justify-between">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/product/:id", element: <div>Product</div> },

        { path: "/admin", element: <Admin /> },
        { path: "/admin/product/:id", element: <div>Admin Product</div> },
        { path: "/admin/add", element: <AddProductPage /> },

        { path: "*", element: <LoadingAnimation /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
