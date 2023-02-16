document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawAmountString = withdrawField.value;
    const withdrawAmount = parseFloat(withdrawAmountString);
    // console.log(withdrawAmount);

    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalString = withdrawTotal.innerText;
    const withdrawTotalAmount = parseFloat(withdrawTotalString);
    withdrawTotal.innerText = withdrawAmount;


    const newWithdrawBalence = withdrawAmount + withdrawTotalAmount;
    withdrawTotal.innerText = newWithdrawBalence;

    const balenceTotalElement = document.getElementById('balance-total');
    const balenceTotalString = balenceTotalElement.innerText;
    const balenceTotalAmountString = parseFloat(balenceTotalString);
    const newBalenceTotal = balenceTotalAmountString - newWithdrawBalence;
    balenceTotalElement.innerText = newBalenceTotal;



    // empty field
    withdrawField.value = '';
})