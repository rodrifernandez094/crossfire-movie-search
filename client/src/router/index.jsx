import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Homepage from "../pages/Homepage";
import Movie from "../pages/Movie";
import SearchResults from "../pages/SearchResults";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "/movies/:query",
        element: <SearchResults />,
        errorElement: <NotFound />,
      },
      {
        path: "/movie/:id",
        element: <Movie />,
        errorElement: <NotFound />,
      },
    ],
  },
]);
