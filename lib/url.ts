import { isDev } from "@/lib/env";

interface Profile {
  network: string;
  url: string;
}
/** Get the correct profile URL based on environment and network type */
export const getProfileUrl = (profile: Profile) =>
  isDev && profile.network.toLowerCase() === "portfolio" ? "/" : profile.url;
