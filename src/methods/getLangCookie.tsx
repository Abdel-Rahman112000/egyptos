import { getCookie } from "./cookies";

function getLangCookie(): string {
  return getCookie("i18next") || "en";
}

export { getLangCookie };
