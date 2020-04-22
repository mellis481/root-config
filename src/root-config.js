import { registerApplication, start } from "single-spa";
import * as isActive from "./activity-functions";

// Simple usage
registerApplication(
  "@mf-demo/navbar",
  () => System.import("@mf-demo/navbar"),
  isActive.navbar
);

//Config with more expressive API
registerApplication({
  name: "@mf-demo/employees",
  app: () => System.import("@mf-demo/employees"),
  activeWhen: (location) => location.pathname === "/employees"
});

registerApplication({
  name: "@mf-demo/employee-details",
  app: () => System.import("@mf-demo/employee-details"),
  activeWhen: isActive.employeeDetails
});

start();
