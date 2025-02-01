import { api } from "methods/api";
import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { Root, SiteContent } from "types/Root";
import { useTranslation } from "react-i18next";

export function useHomeData(
  array: SiteContent[] = []
): (search: string) => SiteContent | undefined {
  return function (search) {
    return array.find((item) => item.position == search);
  };
}

export const homeContext = createContext<HomeDataType>({});

export function HomeContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [homeData, setHomeData] = useState<Root | undefined>(undefined);
  const [status, setStatus] = useState<"none" | "loading" | "done">("none");
  const [t, i18n] = useTranslation();
  const { language } = i18n;

  function getHomeData() {
    setStatus("loading");
    axios
      .get<{ data: Root }>(api())
      .then(({ data }) => {
        setHomeData(data.data);
        setStatus("done");
      })
      .catch((error) => {
        setStatus("none");
      });
  }
  useEffect(() => {
    getHomeData();
  }, [language]);
  return (
    <homeContext.Provider value={{ homeData, status }}>
      {children}
    </homeContext.Provider>
  );
}
type HomeDataType = {
  homeData?: Root;
  //   setContracts: () => void;
  status?: "none" | "loading" | "done";
};
