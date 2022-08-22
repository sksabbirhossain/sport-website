// select player function
function selectPlayer(name, button) {
  const playerLists = document.getElementById("player-list").children.length;
  if (playerLists < 5) {
    const li = document.createElement("li");
    const playerName = document.getElementById(name).innerText;
    li.innerText = playerName;

    const playerList = document.getElementById("player-list");
    playerList.appendChild(li);
    button.setAttribute("disabled", true);
  } else {
    alert("You can't select more than 5 players.");
  }
}

// global input function for getting input
function input(id) {
  const foodId = document.getElementById(id);
  const inputCostString = foodId.value;
  const inputCost = parseInt(inputCostString);
  return inputCost;
}
