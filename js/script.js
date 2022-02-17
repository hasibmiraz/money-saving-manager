// Get input fields
const income = document.getElementById("income-amount");
const food = document.getElementById("food-amount");
const rent = document.getElementById("rent-amount");
const cloth = document.getElementById("cloth-amount");

// Input value function
function getValue(field) {
  if (field.value === "") {
    return 0;
  } else {
    return field.value;
  }
}

// Handle Display Modal
function displayModal(text, prop) {
  document.getElementById("warning-text").innerText = text;
  document.getElementById("warning-modal").style.display = prop;
}

// Calculate Button Click Handle
document.getElementById("calculate-btn").addEventListener("click", function () {
  if (
    getValue(income) < 0 ||
    getValue(food) < 0 ||
    getValue(rent) < 0 ||
    getValue(cloth) < 0 ||
    isNaN(getValue(income)) ||
    isNaN(getValue(food)) ||
    isNaN(getValue(rent)) ||
    isNaN(getValue(cloth))
  ) {
    displayModal("Wrong input! Please insert a positive number.", "flex");
    document.getElementById("total-expenses").innerText = 0;
    document.getElementById("total-balance").innerText = 0;
    return;
  }
  const totalIncome = parseInt(getValue(income));

  const totalExpense =
    parseInt(getValue(food)) +
    parseInt(getValue(rent)) +
    parseInt(getValue(cloth));

  const totalBalance = totalIncome - totalExpense;

  if (totalIncome < totalExpense) {
    displayModal(
      "You don't have enough money to spend. Please earn more to spend more!",
      "flex"
    );

    food.value = "";
    rent.value = "";
    cloth.value = "";
    document.getElementById("total-expenses").innerText = 0;
    document.getElementById("total-balance").innerText = income.value;
  } else {
    document.getElementById("total-expenses").innerText = totalExpense;
    document.getElementById("total-balance").innerText = totalBalance;
  }
});

// Calculate savings click handle
document.getElementById("savings-btn").addEventListener("click", function () {
  if (
    getValue(document.getElementById("saving-percent")) < 0 ||
    isNaN(getValue(document.getElementById("saving-percent")))
  ) {
    displayModal("Wrong input! Please insert a positive number.", "flex");
    document.getElementById("saving-percent").value = "";
    document.getElementById("saving-amount").innerText = 0;
    document.getElementById("remaining-amount").innerText = 0;
  } else {
    const percentValue =
      parseInt(document.getElementById("saving-percent").value) / 100;
    const savingAmount = parseInt(getValue(income)) * percentValue;

    const totalBalance = document.getElementById("total-balance").innerText;

    const remainingAmount = totalBalance - savingAmount;

    if (totalBalance < savingAmount) {
      displayModal("You don't have enough money to save.", "flex");
      document.getElementById("saving-amount").innerText = 0;
      document.getElementById("remaining-amount").innerText = totalBalance;
    } else {
      document.getElementById("saving-amount").innerText = savingAmount;
      document.getElementById("remaining-amount").innerText = remainingAmount;
    }
  }
});

// Handle Hide Modal
document
  .getElementById("hide-modal-btn")
  .addEventListener("click", function () {
    displayModal("", "none");
  });
