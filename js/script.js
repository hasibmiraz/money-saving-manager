// Get input fields
const income = document.getElementById('income-amount');
const food = document.getElementById('food-amount');
const rent = document.getElementById('rent-amount');
const cloth = document.getElementById('cloth-amount');
const savingPercent = document.getElementById('saving-percent');
const expenses = document.getElementById('total-expenses');
const balance = document.getElementById('total-balance');
const savingMoney = document.getElementById('saving-amount');
const remainingMoney = document.getElementById('remaining-amount');

// Input value function
function getValue(field) {
  if (field.value === '') {
    return 0;
  } else {
    return field.value;
  }
}

// Handle Display Modal
function displayModal(text, prop) {
  document.getElementById('warning-text').innerText = text;
  document.getElementById('warning-modal').style.display = prop;
}

// Calculate Button Click Handle
document.getElementById('calculate-btn').addEventListener('click', function () {
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
    displayModal('Wrong input! Please insert a positive number.', 'flex');
    expenses.innerText = 0;
    balance.innerText = 0;
  } else {
    const totalIncome = parseInt(getValue(income));

    const totalExpense =
      parseInt(getValue(food)) +
      parseInt(getValue(rent)) +
      parseInt(getValue(cloth));

    const totalBalance = totalIncome - totalExpense;

    if (totalIncome < totalExpense) {
      displayModal(
        "You don't have enough money to spend. Please earn more to spend more!",
        'flex'
      );

      food.value = '';
      rent.value = '';
      cloth.value = '';
      expenses.innerText = 0;
      balance.innerText = income.value;
    } else {
      expenses.innerText = totalExpense;
      balance.innerText = totalBalance;
    }
  }
});

// Calculate savings click handle
document.getElementById('savings-btn').addEventListener('click', function () {
  if (
    getValue(savingPercent) < 0 ||
    isNaN(getValue(savingPercent)) ||
    getValue(savingPercent) == ''
  ) {
    displayModal('Wrong input! Please insert a positive number.', 'flex');
    savingPercent.value = '';
    savingMoney.innerText = 0;
    remainingMoney.innerText = 0;
  } else {
    const percentValue = parseInt(savingPercent.value) / 100;
    const savingAmount = parseInt(parseInt(getValue(income)) * percentValue);

    const totalBalance = balance.innerText;

    const remainingAmount = totalBalance - savingAmount;

    if (totalBalance < savingAmount) {
      displayModal("You don't have enough money to save.", 'flex');
      savingMoney.innerText = 0;
      remainingMoney.innerText = totalBalance;
    } else {
      savingMoney.innerText = savingAmount;
      remainingMoney.innerText = remainingAmount;
    }
  }
});

// Handle Hide Modal
document
  .getElementById('hide-modal-btn')
  .addEventListener('click', function () {
    displayModal('', 'none');
  });
