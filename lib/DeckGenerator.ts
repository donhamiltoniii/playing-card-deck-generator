export default class DeckGenerator {
  public generate(suits: string[], values: string[]): string[] {
    const deck: string[] = [];

    suits.forEach((suit) => {
      values.forEach((value) => {
        deck.push(`${value}${suit}`);
      });
    });

    return deck;
  }
}
