import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";

import MainLayout from "./layout/MainLayout";
import Error404 from "./pages/Error404";
import RouteLoader from "./components/RouteLoader";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Experience = lazy(() => import("./pages/Experience"));
const Projects = lazy(() => import("./pages/Projects"));
const Contact = lazy(() => import("./pages/Contact"));
const CV = lazy(() => import("./pages/CV"));

const withSuspense = (Component) => (
  <Suspense fallback={<RouteLoader />}>
    <Component />
  </Suspense>
);

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: withSuspense(Home),
      },
      {
        path: "about",
        element: withSuspense(About),
      },
      {
        path: "experience",
        element: withSuspense(Experience),
      },
      {
        path: "projects",
        element: withSuspense(Projects),
      },
      {
        path: "contact",
        element: withSuspense(Contact),
      },
      {
        path: "cv",
        element: withSuspense(CV),
      },
    ],
  },
  {
    path: "*",
    element: <Error404 />,
  },
]);
