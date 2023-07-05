let expenseName = []
let expenseAmount = []
// use reduce() method to find the sum
//let sum = expenseAmount.reduce((accumulator, currentValue) => {
 // return accumulator + currentValue
//},0)
//console.log(sum)
let sum = ""
let sumEl = document.getElementById("sum-el")
let text = document.getElementById("expense-input")
let amount = document.getElementById("amount-input")
let boxEl = document.getElementById("expense-el")
let amountEl = document.getElementById("amount-el")
let addBtn = document.getElementById("add-btn")

addBtn.addEventListener("click", function(){
  expenseName.push(text.value) 
  //text.value = ""
  expenseAmount.push(amount.value)
  //amount.value = ""
  renderBothArray()
  sumEl.textContent = "$ "
})
function renderName(expenseName){
  let listName = ""
  for (let i = 0; i < expenseName.length; i++){
     listName += " <li>" + expenseName[i] + "</li>"
  }
  boxEl.innerHTML = listName
}

function renderAmount(expenseAmount){
  let listPrice = ""
  for (let i = 0; i < expenseAmount.length; i++){
     listPrice +=  " <li>" + expenseAmount[i] + "</li>"
  }
  amountEl.innerHTML = listPrice
}

function renderBothArray(){
  renderName(expenseName);
  renderAmount(expenseAmount);
}

https://github.com/Adeyemoade/expense-tracker.git