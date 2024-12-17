import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router";
import { App } from "./App";
import { Layout } from "./Layout";
import { About } from "./pages/About";
import ROUTES from "./constants/routes";
import { CreateNft } from "./pages/CreateNft";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<Layout />}>
        <Route path={ROUTES.HOME} element={<App />} />
        <Route path={ROUTES.ABOUT} element={<About />} />
        <Route path={ROUTES.CREATE_NFT} element={<CreateNft />} />
      </Route>
    </>
  )
);

export default router;
