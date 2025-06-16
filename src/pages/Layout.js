import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Modal from "../components/elements/Modal";
import OutletWrapper from "./OutletWrapper";
import { useLocation } from "react-router-dom";

export default function Layout() {
      const location = useLocation();
  const isTerumotPage = location.pathname === "/terumot";
  return (
    <>
      <Header />
      <OutletWrapper />
      {!isTerumotPage&&<Modal />}
      <Footer />
    </>
  );
}
