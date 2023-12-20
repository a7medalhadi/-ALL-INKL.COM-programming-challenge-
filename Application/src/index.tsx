import "reflect-metadata";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import "./index.css";
import App from "./App";
import { container, Injector } from "./ioc";


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 30000,
      refetchOnWindowFocus: false,
    },
  },
});
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Injector container={container}>
      <BrowserRouter basename="/">
        <App />
        </BrowserRouter>
      </Injector>
    </QueryClientProvider>
  </React.StrictMode>
);
