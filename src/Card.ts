class Card {
  private suit: string
  private value: string

  public getValue(): string {
    return `${this.value}${this.suit}`
  }

  constructor(value: string, suit: string) {
    this.suit = suit
    this.value = value
  }
}

export default Card
