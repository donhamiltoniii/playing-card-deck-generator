export default class DeckGenerator {
  generate(suits: String[], values: String[]): String[] {
    let deck: String[] = []

    suits.forEach(suit => {
      values.forEach(value => {
        deck.push(`${value}${suit}`)
      })
    })

    return deck
  }
}
