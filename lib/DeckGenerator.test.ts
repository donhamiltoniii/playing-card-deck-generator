import DeckGenerator from "./DeckGenerator";

describe("DeckGenerator", () => {

  test("given spades as a suit and 2 and 3 as values, should generate a deck of 2 cards", () => {
    const underTest = new DeckGenerator();

    const deck = underTest.generate(["♤"], ["2", "3"]);

    expect(deck).toContain("2♤");
    expect(deck).toContain("3♤");
  });

  test("given 🔴 as a suit and 2 and 3 as values, should generate a deck of 2 cards", () => {
    const underTest = new DeckGenerator();

    const deck = underTest.generate(["🔴"], ["2", "3"]);

    expect(deck).toContain("2🔴");
    expect(deck).toContain("3🔴");
  });
});
