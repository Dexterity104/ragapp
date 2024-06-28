export function getBaseURL(): string {
  // If we are in development, use the local backend endpoint
  if (process.env.ENVIRONMENT === "dev") {
    return "http://localhost:8001";
  }
  return typeof window !== "undefined" ? window.location.origin : "";
}
