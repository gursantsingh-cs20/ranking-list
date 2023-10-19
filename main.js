// RANKING LIST START CODE

// HTML Variables
let outputEl = document.getElementById("output");

// Global Variables
let items = [];

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Get Menu Selection
  let selection = document.getElementById("menu").value;

  // Implement Menu Selection
  if (selection === "add") {
    addItem();
  } else if (selection === "remove-last") {
    removeLast();
  } else if (selection === "insert") {
    insert();
  } else if (selection === "remove-pos") {
    removePos();
  } else if (selection === "move") {
    move();
  } else if (selection === "edit") {
    edit();
  }

  printList(items);
}

// Menu Option Functions
function addItem() {
  items.push(prompt("Enter an item to add to the list"));
  console.log("Added Item " + items[items.length - 1]);
}

function removeLast() {
  console.log("Removing " + items[items.length - 1]);
  items.pop();
}

function insert() {
  items.splice(
    prompt("Where would you like to insert?") - 1,
    0,
    prompt("Enter an item to add to the list")
  );
  console.log("Insert at Position");
}

function removePos() {
  items.splice(prompt("Where would you like to remove?") - 1, 1);
  console.log("Remove at Position");
}

function move() {
  let temp = prompt("What would you like to move?");
  let temp2 = prompt("Where would you like to move it?");
  items.splice(temp2 - 1, 0, items[temp - 1]);
  items.splice(temp, 1);
  console.log("Move");
}

function edit() {
  items[prompt("Where would you like to edit?") - 1] = prompt(
    "What would you like to change it to?"
  );
  console.log("Edit");
}

function printList(items) {
  let outputEl = document.getElementById("output");
  outputEl.innerHTML = "";

  for (let i = 0; i < items.length; i++) {
    let divEl = document.createElement("div");
    divEl.innerHTML = i + 1 + ": " + items[i];
    outputEl.appendChild(divEl);
  }
}
