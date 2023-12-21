


document.getElementById("calculate-btn").addEventListener("click", function () {
    const netIncome = document.getElementById("income").value;
const incomeStringToFloat = parseFloat(netIncome);
    const getFoodField = document.getElementById("food-field").value;
    const footStringToFloat = parseFloat(getFoodField);

    const getRentField = document.getElementById("rent-field").value;
    const rentStringToFloat = parseFloat(getRentField);

    const getClothesField = document.getElementById("clothes-field").value;
    const clothesToFloat = parseFloat(getClothesField);

    const totalsExpensesSum = footStringToFloat + rentStringToFloat + clothesToFloat;
    console.log(totalsExpensesSum);

    const setTotalExpenses = document.getElementById("expenses-show");
    setTotalExpenses.innerText = totalsExpensesSum;

    const calculateRemingBalance = incomeStringToFloat - totalsExpensesSum;
    const setremaingBalance = document.getElementById("balance");
    setremaingBalance.innerText = calculateRemingBalance;

})


document.getElementById("percentancebtn").addEventListener("click", function () {
    const netIncome = document.getElementById("income").value;
    const incomeStringToFloat = parseFloat(netIncome);

    const getpercentanceValue = document.getElementById("numberofpercentance").value;
    const percentanceValueFloat = parseFloat(getpercentanceValue);

    const percentanceCalculation = ((incomeStringToFloat * percentanceValueFloat) / 100);

    const setSavingAmount = document.getElementById("savingAmount");
    setSavingAmount.innerText = percentanceCalculation;

 const getBalance=document.getElementById("balance").innerText;
 const balanceToFloat=parseFloat(getBalance);
 console.log(balanceToFloat)
 const calculatationRemainingBalance=balanceToFloat-percentanceCalculation;
 const setReminingBalance=document.getElementById("afterbalance");
 setReminingBalance.innerText=calculatationRemainingBalance;


})