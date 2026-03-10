import './App.css'
// import { RouterProvider } from "react-router-dom";
import { routes } from "./router/router.tsx";
import { useRoutes } from "react-router-dom";

export default function App() {
  const element = useRoutes(routes);
  return <>{element}</>;
}