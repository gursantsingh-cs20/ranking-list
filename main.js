// RANKING LIST START CODE

// HTML Variables
let outputEl = document.getElementById("output");

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
}

let items = [];

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
    prompt(
      "Where would you like to insert?",
      0,
      prompt("Enter an item to add to the list")
    )
  );
  console.log("Insert at Position");
}

function removePos() {
  items.splice(prompt("Where would you like to remove?", 1));
  console.log("Remove at Position");
}

function move() {
  items[prompt("Where would you like to move from?")] =
    items[prompt("Where would you like to move to?")];
  console.log("Move");
}

function edit() {
  items[prompt("Where would you like to edit?")] = prompt(
    "What would you like to change it to?"
  );
  console.log("Edit");
}
