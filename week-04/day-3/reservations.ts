'use strict';

interface Reservationy {
  getDowBooking(): string;
  getCodeBooking(): string;
}

class Reservation implements Reservationy {

  getDowBooking() {
    let dowlist: string[] = ['MON', 'THE', 'WED', 'THR', 'FRI', 'SAT', 'SUN']
    return dowlist[Math.floor(Math.random() * 6)];
  }

  getCodeBooking() {
    let codeElements: string = 'ABCDEFGHIJKLMNOPQRSTUVW1234567890';
    let output: string = '';
    for (let i: number = 0; i < 8; i++) {
      output += codeElements[Math.floor(Math.random() * codeElements.length)]
    }
    return output;
  }

  printBookings(): void {
    for (let i: number = 0; i < 8; i++) {
      console.log(`Booking #${this.getCodeBooking()} for ${this.getDowBooking()}`);
    }
  }
}

let reservSystem: Reservation = new Reservation;

reservSystem.printBookings();