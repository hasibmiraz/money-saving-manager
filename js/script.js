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

document.getElementById("calculate-btn").addEventListener("click", function () {
  const totalIncome = parseInt(getValue(income));

  const totalExpense =
    parseInt(getValue(food)) +
    parseInt(getValue(rent)) +
    parseInt(getValue(cloth));

  const totalBalance = totalIncome - totalExpense;

  document.getElementById("total-expenses").innerText = totalExpense;
  document.getElementById("total-balance").innerText = totalBalance;
});
