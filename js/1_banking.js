/*
 function doubleIt(num) {
    const result = num * 2;
    return result;
}
const first = doubleIt(5);
const second = doubleIt(7);
 */


/* function doubleIt(num) {
    const result = num * 2;
    return result;
}
const fiveDouble = doubleIt(5);
const sevenDouble = doubleIt(7);
 */



function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);

    // clear input field
    inputField.value = '';

    return amountValue;
}



// Deposit handler
document.getElementById('deposit-button').addEventListener('click', function () {   // button deposit
    /* const depositInput = document.getElementById('deposit-input');  // input
    const depositAmountText = depositInput.value;                   // input text
    const depositAmount = parseFloat(depositAmountText);            // input number */
    const depositAmount = getInputValue('deposit-input');

    // get current deposit
    const depositTotal = document.getElementById('deposit-total');  // h4 _deposit
    const depositTotalText = depositTotal.innerText;                // h4 text
    const previousDepositTotal = parseFloat(depositTotalText);      // h4 number
    depositTotal.innerText = previousDepositTotal + depositAmount;  // h4 text = h4 text + input value
    // console.log(depositTotalText);

    // update balance
    const balanceTotal = document.getElementById('balance-total');  // h4 _balance
    const balanceTotalText = balanceTotal.innerText;                // h4 text
    const previousBalanceTotal = parseFloat(balanceTotalText);      // h4 number

    balanceTotal.innerText = previousBalanceTotal + depositAmount;  // h4 number + input number



});


// Withdraw handler
document.getElementById('withdraw-button').addEventListener('click', function () {    // button _Withdraw
    // const withdrawInput = document.getElementById('withdraw-input');    // input
    // const withdrawInputText = withdrawInput.value;                      // input text
    // const withdrawAmount = parseFloat(withdrawInputText);               // input number
    const withdrawAmount = getInputValue('withdraw-input');

    // update withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');    // h4 _Withdraw
    const withdrawTotalText = withdrawTotal.innerText;                  // h4 text
    const previousWithdrawTotal = parseFloat(withdrawTotalText);        // h4 number

    withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount;   // h4 number + input number

    // update balance after withdraw
    const balanceTotal = document.getElementById('balance-total');      // h4 _balance
    const balanceTotalText = balanceTotal.innerText;                    // h4 text
    const previousBalanceTotal = parseFloat(balanceTotalText);          // h4 number

    balanceTotal.innerText = previousBalanceTotal - withdrawAmount;     // h4 number - input number

 
});