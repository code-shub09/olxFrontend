


import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout";
import SalesProvider from "./store/ContextApi";
import SaleForm from "./components/SaleForm";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./App.css";
import Success from "./components/successComp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,   // Layout contains <Outlet />
    children: [
      {
        index: true,        // 👈 shorthand for path: "/"
        element: <SaleForm />,
      },
      {
        path:'/congratulations',
        element:<Success></Success>
      }
    ],
  },
]);

function App() {
  return (
    <SalesProvider>
      <RouterProvider router={router} />
    </SalesProvider>
  );
}

export default App;

