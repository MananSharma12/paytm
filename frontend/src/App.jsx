import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { SignUp } from "./pages/SignUp.jsx";
import { SignIn } from "./pages/SignIn.jsx";
import { Dashboard } from "./pages/Dashboard.jsx";
import { SendMoney } from "./pages/SendMoney.jsx";

const router = createBrowserRouter([
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/send",
    element: <SendMoney />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
