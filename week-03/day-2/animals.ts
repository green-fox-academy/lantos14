export class Animal {
  hunger: number = 50;
  thirst: number = 50;
  
  eat(): void {
    this.hunger--;
  }

  drink(): void {
    this.thirst--;
  }

  play(): void {
    this.hunger++;
    this.thirst++;
  }
}