import { inject } from "@vercel/speed-insights";

export default defineNuxtPlugin(() => {
  if (import.meta.client) {
    inject();
  }
});
