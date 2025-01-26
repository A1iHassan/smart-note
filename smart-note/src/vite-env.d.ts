/// <reference types="vite/client" />

import "i18next";

declare module "i18next" {
  interface CustomTypeOptions {
    // Provide the shape of your resources
    resources: {
      translation: {
        greeting: {
          spiel: string;
        };
      };
    };
  }
}
