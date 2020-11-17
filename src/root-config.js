import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@mf-demo/navbar",
  app: () => System.import("@mf-demo/navbar"),
  activeWhen: (location) => true
});

registerApplication({
  name: "@mf-demo/employees",
  app: () => System.import("@mf-demo/employees"),
  activeWhen: (location) => true
});

start();
