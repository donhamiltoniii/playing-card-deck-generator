class Card {
  public getValue(): string {
    return `${this.suit}${this.value}`
  }

  constructor(private suit: string, private value: string) {}
}

export default Card
