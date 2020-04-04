// tslint:disable-next-line:no-submodule-imports
import { Given, Before, Then } from "cypress-cucumber-preprocessor/steps";

Before(() => {
  cy.visit("https://e2e-boilerplate.github.io/sandbox/");
});

Given("I am on the sandbox page", () => {
  cy.title().then(($title) => {
    assert.strictEqual($title, "Sandbox");
  });
});

Then("The page header should be {string}", (expected) => {
  cy.get("h1").then(($header) => {
    const text = $header.text();
    assert.strictEqual(text, expected);
  });
});
