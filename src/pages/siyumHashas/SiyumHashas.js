import { useEffect } from "react";

const TARGET_URL = "https://siyomhashasmalot-757670235882.us-west1.run.app/";

export default function RedirectToSiyum() {
  useEffect(() => {
    window.location.replace(TARGET_URL);
  }, []);

  return null;
}
