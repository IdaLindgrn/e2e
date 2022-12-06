
describe("form", () => {
  it("should write input", () => {
    cy.visit("http://localhost:1234");
    cy.get("input").type("Harry Potter").should("have.value", "Harry Potter");
  });
  it("should search movies", () => {
    cy.visit("http://localhost:1234");
    cy.get("input").type("Harry Potter").should("have.value", "Harry Potter");
    cy.get("button#search").click();
    cy.get("div.movie").should("have.length", 10);
  });
  it("should not search movies", () => {
    cy.visit("http://localhost:1234");
    cy.get("input").type(".").clear();
    cy.get("button#search").click();
    cy.get("p").contains("Inga sökresultat att visa");
    cy.get("div.movie").should("have.length", 0);
  })
  it("should give wrong input", () => {
    cy.visit("http://localhost:1234");
    cy.get("input");
    cy.get("button#search").click();
    cy.get("p").contains("Inga sökresultat att visa");
    cy.get("div.movie").should("have.length", 0);
  })
});


describe("MovieApp Form", ()=> {
let movieApi = [
  {
    Title: "Harry Potter 1",
    imdbID:"1",
    Type: "Movie",
    Poster: "Harry Potter 1",
    Year: "2008",
   },
   {
    Title: "Harry Potter 2",
    imdbID:"2",
    Type: "Movie",
    Poster: "Harry Potter 2",
    Year: "2011",
   },];

it("should get api", () => {
  cy.intercept("GET", "http://omdbapi.com/*", movieApi).as("movies"); 
  cy.get("input").type("Harry Potter").should("have.value", "Harry Potter");
  cy.get("button#search").click();
  cy.wait("@movies").its("request.url").should("contain", "s=Harry%20Potter");
  });
});