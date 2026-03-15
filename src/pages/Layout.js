import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Modal from "../components/elements/Modal";
import OutletWrapper from "./OutletWrapper";
import { useLocation } from "react-router-dom";
import LoaderAnimation from "../components/elements/LoaderAnimation";

export default function Layout() {
  const location = useLocation();
  const isTerumotPage = location.pathname === "/terumot";
  const isRedirectPage = location.pathname === "/siyomhashasmalot";

  return (
    <>
      {!isRedirectPage && <Header />}
      <OutletWrapper />
      {!isTerumotPage && <Modal />}
      {!isRedirectPage && <Footer />}
    </>
  );
}
