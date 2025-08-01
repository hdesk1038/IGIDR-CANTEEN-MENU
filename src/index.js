import React from "react";
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./App";
import ErrorPage from "./components/ErrorPage";

const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <App />,
            errorElement: <ErrorPage />,
        },
        {
            path: "/day/:days",
            element: <App />,
            errorElement: <ErrorPage />,
        }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
