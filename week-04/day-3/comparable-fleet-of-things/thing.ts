import { Comparable } from "../comparable"

class Thing implements Comparable {
  private name: string;
  private completed: boolean = false;

  constructor(name: string) {
    this.name = name;
  }
  public complete(): void {
    this.completed = true;
  }

  public getName(): string {
    return this.name;
  }

  public getCompleted(): boolean {
    return this.completed;
  }

  compareTo(other: Thing): number {
    // checking completed
    if (this.completed && !other.completed) {
      return -1;
    } else if (!this.completed && other.completed) {
      return 1;
    } else {
      // sort the description
      if (this.name < other.name) {
        return -1
      } else if (this.name > other.name) {
        return 1;
      }
      return 0;
    }
  }
}

export { Thing };