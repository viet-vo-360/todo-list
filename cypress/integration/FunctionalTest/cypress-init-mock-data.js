/* eslint-disable no-undef */
const mockData = require("../../fixtures/todos.json");
describe("Add todo task", () => {
  it("it should use mock data", function () {
    cy.server();
    cy.fixture("todos.json").as("mockData");
    cy.route("http://me.todolist.com/todos/list", "@mockData").as("fetchData");
    cy.visit("/", {
      onBeforeLoad(win) {
        delete win.fetch;
      },
    });
    cy.wait("@fetchData");
  });
  it("it should use mock data", function () {
    cy.visit("/");

    cy.window().then((win) => {
      cy.url().should("eq", win.location.href);
    });
    cy.document().then((doc) => {
      doc.body.style.background = "red";
    });
  });
});
