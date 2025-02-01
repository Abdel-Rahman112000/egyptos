import { domain } from "./domain";

export const api = (path?: string) => domain(`api${path ? "/" + path : ""}`);
