import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Modal from "../components/elements/Modal";
import OutletWrapper from "./OutletWrapper";

export default function Layout() {
  return (
    <>
      <Header />
      <OutletWrapper />
      <Modal />
      <Footer />
    </>
  );
}
