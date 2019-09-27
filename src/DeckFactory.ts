import Deck from './Deck'

export default class DeckFactory {
  static build(suits: string[], values: string[]): Deck {
    return new Deck(suits, values)
  }
}
