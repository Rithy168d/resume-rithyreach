import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Frontend from "./cards/Frontend";
import Mobile from "./cards/Mobie";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Frontend />,
      },
      {
        path: "app-design",
        element: <Mobile />,
      },
    ],
  },
]);

const Portfolio = () => {
  return (
    <article className="padding-top" id="portfolio">
      <div className="text-center line-s">
        <h2>Portfolio</h2>
        <p>Project finish</p>
      </div>
      <RouterProvider router={routers} />
    </article>
  );
};

export default Portfolio;
