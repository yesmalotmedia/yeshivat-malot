import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const styles = {
  fontFamily: "'Rubik', sans-serif;",
};
const queryClinet = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <QueryClientProvider client={queryClinet}>
    <App />
  </QueryClientProvider>
);
