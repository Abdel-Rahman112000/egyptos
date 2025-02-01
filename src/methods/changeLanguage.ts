import { useNavigate } from "react-router-dom";

function useUrlLanguage() {
  const navigate = useNavigate();
  return (lang: string) => {
    const paths = window.location.pathname.split("/").slice(1);
    const newPath = "/" + [lang, ...paths.slice(1)].join("/");
    navigate(newPath);
  };
}

export default useUrlLanguage;
