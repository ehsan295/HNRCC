import Signup from "./pages/auth/Signup";
import Signin from "./pages/auth/Signin";
import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import TopNav from "./components/crm-components/crm/top-nav";
import { Sidebar } from "./components/crm-components/crm/sidebar";
import CRMPage from "./components/crm-components/page";
import ProductPage from "./pages/products/ProductPage";
import Cards from "./components/crm-components/crm/cards";

function Layout() {
  return (
    <div>
      <TopNav />
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col mt-6 mx-4 w-full">
          <Cards />
          <Outlet />
        </div>
      </div>
    </div>
  );
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <CRMPage />,
      },
      {
        path: "/products",
        element: <ProductPage />,
      },
    ],
  },

  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);
function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
