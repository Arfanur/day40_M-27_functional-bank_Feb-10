// Deposit handler
document.getElementById('deposit-button').addEventListener('click', function () {   // button deposit
    // console.log('deposit button clicked')
    const depositInput = document.getElementById('deposit-input');  // input
    const depositAmountText = depositInput.value;                   // input text
    const depositAmount = parseFloat(depositAmountText);            // input number
    // console.log(depositAmount);

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

    // clear input field
    depositInput.value = '';                                        // clear input field

});


// Withdraw handler
document.getElementById('withdraw-button').addEventListener('click', function () {    // button _Withdraw
    // console.log('withdraw clicked')
    const withdrawInput = document.getElementById('withdraw-input');    // input
    const withdrawInputText = withdrawInput.value;                      // input text
    const withdrawAmount = parseFloat(withdrawInputText);               // input number
    // console.log(withdrawAmount);

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

    // clear withdraw input field
    withdrawInput.value = '';
});