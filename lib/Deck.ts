import Card from './Card'

class Deck {
  private cards: Card[]
  private suits: string[]
  private values: string[]

  public getCards(): Card[] {
    return this.cards
  }

  constructor(suits: string[] = [], values: string[] = []) {
    this.cards = []
    this.suits = suits
    this.values = values
    this.suits.forEach(suit => {
      this.values.forEach(value => {
        this.addCard(new Card(value, suit))
      })
    })
  }

  private addCard(card: Card) {
    this.cards.push(card)
  }

  public dealTopCard(): Card {
    const topCard: Card | undefined = this.cards.shift()
    if (topCard === undefined) throw new Error('No cards left in the Deck')
    return topCard
  }

  public getCardValues(): string[] {
    let cardValues: string[] = []
    this.getCards().forEach(card => {
      cardValues.push(card.getValue())
    })
    return cardValues
  }

  public shuffle(): void {
    const shuffledDeck: Card[] = []

    for (let i = this.cards.length - 1; i >= 0; i--) {
      const randomCard: Card = this.cards[Math.floor(Math.random() * i)]
      shuffledDeck.push(randomCard)
    }

    this.cards = shuffledDeck
  }
}

export default Deck
