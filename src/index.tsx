import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ProductListGrid } from "./screens/ProductListGrid/ProductListGrid";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <ProductListGrid />
  </StrictMode>,
);
