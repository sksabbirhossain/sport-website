// player 1
const selectBtn1 = document.getElementById("select-btn1");
selectBtn1.addEventListener("click", function () {
  selectPlayer("title1", selectBtn1);
});

// player 2
const selectBtn2 = document.getElementById("select-btn2");
selectBtn2.addEventListener("click", function () {
  selectPlayer("title2", selectBtn2);
});

// player 3
const selectBtn3 = document.getElementById("select-btn3");
selectBtn3.addEventListener("click", function () {
  selectPlayer("title3", selectBtn3);
});

// player 4
const selectBtn4 = document.getElementById("select-btn4");
selectBtn4.addEventListener("click", function () {
  selectPlayer("title4", selectBtn4);
});

// player 5
const selectBtn5 = document.getElementById("select-btn5");
selectBtn5.addEventListener("click", function () {
  selectPlayer("title5", selectBtn5);
});

const selectBtn6 = document.getElementById("select-btn6");
selectBtn6.addEventListener("click", function () {
  selectPlayer("title6", selectBtn6);
});

// all player cost
const calculateBtn = document.getElementById("calculate-btn");
calculateBtn.addEventListener("click", function () {
  const playerCost = input("player-cost");
  if (!isNaN(playerCost)) {
    const playerLists = document.getElementById("player-list").children.length;
    const playerExpense = playerCost * playerLists;
    console.log(playerExpense);
    const playerExpenseField = document.getElementById("player-expense-field");
    playerExpenseField.innerText = playerExpense;
  } else {
    alert("Please give valid input.");
  }
});

//  total cost calculation
const totalCost = document.getElementById("total-cost");
totalCost.addEventListener("click", function () {
  const playerExpenseCoststring = document.getElementById(
    "player-expense-field"
  ).innerText;
  const playerExpensecost = parseInt(playerExpenseCoststring);
  const manager = input("manager-field");
  const coach = input("coach-field");
  if (!isNaN(manager) && !isNaN(coach)) {
    const total = playerExpensecost + manager + coach;
    const totalField = document.getElementById("total-field");
    totalField.innerText = total;
  } else {
    alert("Please give valid input.");
  }
});
