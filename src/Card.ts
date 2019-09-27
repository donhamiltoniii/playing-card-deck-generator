class Card {
  private suit: string
  private value: string

  public getSuit(): string {
    return this.suit
  }

  public getValue(): string {
    return this.value
  }

  constructor(value: string, suit: string) {
    this.suit = suit
    this.value = value
  }

  public getCardValue(): string[] {
    return [this.value, this.suit]
  }
}

export default Card
