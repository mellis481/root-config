import { registerApplication, start } from "single-spa";

const microfrontends = ["@mf-demo/navbar", "@mf-demo/employees", "@mf-demo/employee-details"]

const contentRootElement = document.getElementById('mf-content');
microfrontends.forEach(name => {
  const microFrontendElement = document.createElement('div');
  // microFrontendElement.attachShadow({ mode: 'open' });
  microFrontendElement.setAttribute('id', `single-spa-application:${name}`);
  contentRootElement.appendChild(microFrontendElement);
})

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
