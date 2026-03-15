import { useEffect } from "react";
import LoaderAnimation from "../../components/elements/LoaderAnimation";

export default function RedirectToSiyum() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.replace(
        "https://siyomhashasmalot-757670235882.us-west1.run.app/",
      );
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return <LoaderAnimation isLoading={true} />;
}
