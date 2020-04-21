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

registerApplication(
  "@mf-demo/employee-details",
  () => System.import("@mf-demo/employee-details"),
  isActive.employeeDetails
);

start();
