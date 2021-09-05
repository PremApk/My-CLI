#!/usr/bin/env node

const showBanner = require("node-banner");
const importJsx = require("import-jsx");
const { render } = require("ink");
const React = require("react");
const meow = require("meow");

const ui = importJsx("./ui");

meow(`
	Usage
	  $ premapk
`);

(async () => {
  await showBanner(
    "Prem APK",
    "CS Undergrad and Software Engineer @ 2Fork!",
    "red",
    "green"
  );

  render(React.createElement(ui));
})();
