import Deck from './Deck'

export default class DeckGenerator {
  private deck: Deck

  public getDeck(): string[] {
    return this.deck.getCardValues()
  }

  constructor(suits: string[], values: string[]) {
    this.deck = new Deck(suits, values)
  }
}
