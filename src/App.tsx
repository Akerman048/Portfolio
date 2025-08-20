import { Outlet, ScrollRestoration } from "react-router-dom";
import VantaFogLight from "./components/VantaFog/VantaFogLight";
import Layout from "./components/Layout/Layout";

export default function App() {
  return (
    <>
      <VantaFogLight />
      <Layout>
        <Outlet />           
        <ScrollRestoration />
      </Layout>
    </>
  );
}
