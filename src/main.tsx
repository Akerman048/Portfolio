import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./reset.css";
import "./index.css";
import App from "./App.tsx";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { ThemeProvider } from "./context/ThemeContext.tsx";
import { createHashRouter, RouterProvider } from "react-router-dom";
import HomePage from "./routes/HomePage/HomePage.tsx";
import Project from "./routes/Project/Project.tsx";
const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "projects/:id", element: <Project /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router}/>
    </ThemeProvider>
  </StrictMode>
);
