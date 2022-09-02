function getPin() {
    const pin = generatePin();
    const pinString = pin + '';
    if (pinString.length === 4) {
        return pin;
    }
    else {
        return getPin();
    }
}
function generatePin() {
    const random = Math.round(Math.random() * 10000);
    return random;
};
document.getElementById('generate-pin').addEventListener('click', function () {
    const pin = getPin();
    const inputPin = document.getElementById("input-pin");
    inputPin.value = pin;
})
document.getElementById('calculator').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const typeNumberField = document.getElementById("type-number");
    const previousTypeNumber = typeNumberField.value;
    if (isNaN(number)) {
        if (number === 'C') {
            typeNumberField.value = '';
        }
        else if (number==='<'){
            const digits = previousTypeNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typeNumberField.value = remainingDigits;
       }
    }
    else {
        const newTypeNumber = previousTypeNumber + number;
        typeNumberField.value = newTypeNumber;
    }
})
document.getElementById('verify-pin').addEventListener('click', function () {
    const displayPinField = document.getElementById('input-pin');
    const currentPin = displayPinField.value;
    const typeNumberField = document.getElementById('type-number');
    const typeNumber = typeNumberField.value;
    const pinSuccess = document.getElementById('pin-success');
    const pinFalse = document.getElementById('pin-false');
    if (typeNumber === currentPin) {
        
        pinSuccess.style.display = 'block';
        pinFalse.style.display = 'none';
        
    }
    else {
        
        pinFalse.style.display = 'block';
        pinSuccess.style.display = 'none';
    }
})