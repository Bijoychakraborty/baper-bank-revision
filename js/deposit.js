document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositField = document.getElementById('deposit-field');
    const depositAmountString = depositField.value;
    const depositAmount = parseFloat(depositAmountString);

    // if (depositAmount < 0) {
    //     alert('please give a valid info');

    // } else {
    //     console.log('you can');
    // }






    const depositTotal = document.getElementById('deposit-total');
    const DepositTotalAmountString = depositTotal.innerText;
    const depositTotalAmount = parseFloat(DepositTotalAmountString);
    const currentDeposit = depositTotalAmount + depositAmount;
    depositTotal.innerText = currentDeposit;


    const balenceTotalElement = document.getElementById('balance-total');
    const balenceTotalString = balenceTotalElement.innerText;
    const balenceTotalAmountString = parseFloat(balenceTotalString);
    const newBalenceTotal = balenceTotalAmountString + currentDeposit;
    balenceTotalElement.innerText = newBalenceTotal;



    // emty field ...
    depositField.value = ''

})