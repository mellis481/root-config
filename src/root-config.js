import { registerApplication, start } from "single-spa";

const microfrontends = ["@mf-demo/navbar", "@mf-demo/employees"]

const contentRootElement = document.getElementById('mf-content');
microfrontends.forEach(name => {
  const microFrontendElement = document.createElement('div');
  microFrontendElement.setAttribute('id', `single-spa-application:${name}`);
  contentRootElement.appendChild(microFrontendElement);

  registerApplication({
    name,
    app: () => System.import(name),
    activeWhen: (location) => true
  });
})

start();
