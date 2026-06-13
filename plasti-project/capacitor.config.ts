import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "app.lovable.plasti",
  appName: "بلاصتي",
  webDir: "dist/client",
  server: {
    url: "https://plasti.lovable.app",
    cleartext: false,
  },
  android: {
    buildOptions: {
      releaseType: "AAB",
    },
  },
};

export default config;