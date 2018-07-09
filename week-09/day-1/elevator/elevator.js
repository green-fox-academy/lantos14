'use strict';

class ElevatorModel {


  constructor(floor, people) {
    this.maxFloor = floor,
      this.maxPeople = people,
      this.position = 9,
      this.direction = 'up',
      this.occupancy = 0
  }

  add() {
    this.occupancy++
  }

  remove() {
    this.occupancy--
  }

  move(direction) {
    switch (direction) {
      case 'up':
        this.position--;
        break;

      case 'down':
        this.position++;
        break;
    }
  }
  checkOverUse() {
    if (this.occupancy >= this.maxPeople || this.position >= this.maxFloor) {
      return true;
    } else {
      return false;
    }
  }

}

class ElevatorView {

  renderAll(pos, num) {
    this.renderElevator(pos);
    this.renderPeople(num);
  }

  renderElevator(pos) {
    let floorTrList = document.querySelectorAll('tr');
    floorTrList.forEach(tr => {
      tr.children[0].className = '';
    });

    floorTrList[pos].children[0].className = 'active';

  }

  renderPeople(num) {
    const activeFloor = document.querySelector('.active');
    let floorTrList = document.querySelectorAll('tr');
    floorTrList.forEach(tr => {
      tr.children[0].innerText = '';
    });
    activeFloor.innerText = num;
  }
}

class ElevatorController {

  constructor(floor, people) {
    this.view = new ElevatorView,
      this.model = new ElevatorModel(floor, people)
  }
}

const myFirstElevator = new ElevatorController(10, 6);
console.log(myFirstElevator);

myFirstElevator.view.renderAll(myFirstElevator.model.position, myFirstElevator.model.occupancy)
const btnUp = document.querySelector('#btn-up');
const btnDown = document.querySelector('#btn-down');
const btnAdd = document.querySelector('#btn-add');
const btnRemove = document.querySelector('#btn-remove');

btnUp.addEventListener('click', () => {
  if (!myFirstElevator.model.checkOverUse()) {
    myFirstElevator.model.move('up');
    myFirstElevator.view.renderAll(myFirstElevator.model.position, myFirstElevator.model.occupancy)
  } else {
    myFirstElevator.view.renderAll(myFirstElevator.model.position, myFirstElevator.model.occupancy)
  }
});

btnDown.addEventListener('click', () => {
  if (!myFirstElevator.model.checkOverUse()) {
    myFirstElevator.model.move('down');
    myFirstElevator.view.renderAll(myFirstElevator.model.position, myFirstElevator.model.occupancy)
  } else {
    myFirstElevator.view.renderAll(myFirstElevator.model.position, myFirstElevator.model.occupancy)
  }
});

btnAdd.addEventListener('click', () => {
  if (!myFirstElevator.model.checkOverUse()) {
    myFirstElevator.model.add();
    myFirstElevator.view.renderAll(myFirstElevator.model.position, myFirstElevator.model.occupancy)
  } else {
    myFirstElevator.view.renderAll(myFirstElevator.model.position, myFirstElevator.model.occupancy)
  }
});

btnRemove.addEventListener('click', () => {
  if (!myFirstElevator.model.checkOverUse()) {
    myFirstElevator.model.remove();
    myFirstElevator.view.renderAll(myFirstElevator.model.position, myFirstElevator.model.occupancy)
  } else {
    myFirstElevator.view.renderAll(myFirstElevator.model.position, myFirstElevator.model.occupancy)
  }
});

