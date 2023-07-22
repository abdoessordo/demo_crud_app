import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Catalogue from "./Pages/Catalogue/Catalogue";
import Footer from "./Components/Footer/Footer";
import Admin from "./Pages/Admin/Admin";
import AddProductPage from "./Pages/AddProduct/AddProductPage";
import LoadingAnimation from "./Components/LoadingAnimation/LoadingAnimation";
import ModifyProductPage from "./Pages/ModifyProductPage/ModifyProductPage";
import ProductPage from "./Pages/ProductPage/ProductPage";

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
        { path: "/", element: <Catalogue /> },
        { path: "/product/:id", element: <ProductPage /> },

        { path: "/admin", element: <Admin /> },
        { path: "/admin/add", element: <AddProductPage /> },
        {
          path: "/admin/edit/:id",
          element: <ModifyProductPage />,
        },

        { path: "*", element: <LoadingAnimation /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
