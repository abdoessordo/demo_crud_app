import { constants } from "./constatns";

// combine all allowed hosts and ports
export const allowedOrigins = constants.WHITE_LISTED_HOSTS.map((host) => {
  return constants.WHITE_LISTED_PORTS.map((port) => {
    return `http://${host}:${port}`;
  });
}).flat();


