import { registerApplication, start } from "single-spa";
import * as isActive from "./activity-functions";

registerApplication(
  "@mf-demo/navbar",
  () => System.import("@mf-demo/navbar"),
  isActive.navbar
);

registerApplication(
  "@mf-demo/employees",
  () => System.import("@mf-demo/employees"),
  isActive.employees
);

// registerApplication(
//   "@react-mf/planets",
//   () => System.import("@react-mf/planets"),
//   isActive.planets
// );

start();
