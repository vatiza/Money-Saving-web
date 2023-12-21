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



})