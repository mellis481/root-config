import { registerApplication, start } from "single-spa";
import * as isActive from "./activity-functions";

registerApplication({
  name: "@mf-demo/navbar",
  app: () => System.import("@mf-demo/navbar"),
  activeWhen: isActive.navbar,
});

start();
