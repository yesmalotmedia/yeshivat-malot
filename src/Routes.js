import { createBrowserRouter } from "react-router-dom";

//Layout
import Layout from "./pages/Layout";

//pages
import Home from "./pages/home/Home";
import BeitHamidrash from "./pages/beitHamidrash/BeitHamidrash";
import TalmudHaMemuzag from "./pages/talmudHaMemuzag/TalmudHaMemuzag";
import Contact from "./pages/contact/Contact";
import WhatsNew from "./pages/whatsnew/WhatsNew";
import About from "./pages/about/About";
import Publishing from "./pages/publishing/Publishing";
import ErrorPage from "./pages/ErrorPage";
import PostDetails from "./pages/whatsnew/PostDetails";
import Terumot from "./pages/terumot/Terumot";
import TextEditor from "./pages/admin/TextEditor";
import LessonSection from "./pages/beitHamidrash/lessons/LessonSection";
import Bogrim from "./pages/bogrim/Bogrim";
import Shvushim from "./pages/shvushim/Shvushim";
import ShvushimForm from "./pages/shvushim/ShvushimForm";
const routers = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "BeitHamidrash",
        element: <BeitHamidrash />,
      },
      {
        path: "BeitHamidrash/:videoId",
        element: <BeitHamidrash />,
      },
      {
        path: "BeitHamidrash/:category",
        element: <BeitHamidrash />,
      },
      {
        path: "BeitHamidrash/:lessonsType",
        element: <BeitHamidrash />,
      },
      {
        path: "TalmudHaMemuzag",
        element: <TalmudHaMemuzag />,
      },
      {
        path: "TalmudHaMemuzag/:articleId",
        element: <TalmudHaMemuzag />,
      },
      {
        path: "Contact",
        element: <Contact />,
      },
      {
        path: "WhatsNew",
        element: <WhatsNew />,
      },

      {
        path: "WhatsNew/:postId",
        element: <PostDetails />,
      },
      {
        path: "About",
        element: <About />,
      },
      {
        path: "Terumot",
        element: <Terumot />,
      },
      {
        path: "Shvushim",
        element: <Shvushim />,
      },
      {
        path: "ShvushimForm",
        element: <ShvushimForm />,
      },
      {
        path: "Bogrim",
        element: <Bogrim />,
      },
      {
        path: "Publishing",
        element: <Publishing />,
      },
      {
        path: "Admin",
        element: <TextEditor />,
      },
    ],
  },
]);
export default routers;
