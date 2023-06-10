import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {
  RootLayout,
  HomePage,
  MenuPage,
  ChefPage,
  ReservationPage,
  ErrorPage,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "chef", element: <ChefPage /> },
      { path: "menu", element: <MenuPage /> },
      { path: "reservation", element: <ReservationPage /> },
    ],
  },
]);

const App = () => <RouterProvider router={router}></RouterProvider>;
export default App;
