import ReactDOM from "react-dom/client";
import "./i18n";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomeContextProvider } from "pages/HomeContext";
import { ReactRouter6Adapter } from "use-query-params/adapters/react-router-6";
import { QueryParamProvider } from "use-query-params";
import NotVaild from "Components/NotValidRout";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <QueryParamProvider adapter={ReactRouter6Adapter}>
      <HomeContextProvider>
        <Routes>
          <Route path=":local/*" element={<App />} />
          <Route path="*" element={<NotVaild />} />
        </Routes>
      </HomeContextProvider>
    </QueryParamProvider>
  </BrowserRouter>
);
