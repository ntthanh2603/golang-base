import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const Root = () => {
  if (process.env.NODE_ENV === "development") {
    return <App />;
  } else {
    return (
      <StrictMode>
        <App />
      </StrictMode>
    );
  }
};

createRoot(document.getElementById("root")!).render(<Root />);
