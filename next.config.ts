import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  ignoreDuringBuilds: true, // ← ceci désactive le blocage du build à cause des erreurs ESLint
};

export default nextConfig;
