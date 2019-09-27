import Deck from './Deck'

export default class DeckGenerator {
  static build(suits: string[], values: string[]): Deck {
    return new Deck(suits, values)
  }
}
