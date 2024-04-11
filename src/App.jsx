import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Detail from "./pages/Detail.jsx";
import Layout from "./components/Header/Layout.jsx";
import Home from "./pages/Home";
import CartProvider from "./providers/CartProvider";
import Cart from "./pages/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Detail/:id",
        element: <Detail />,
      },
      {
        path: "/cart",
        element: <Cart/>,
      },
    ],
  },
]);

function App() {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}

export default App;
