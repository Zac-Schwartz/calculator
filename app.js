// import functions and grab DOM elements
const addInput1 = document.getElementById ("add-input-1");
const addInput2 = document.getElementById ("add-input-2");
const addButton = document.getElementById ("add-button");
const addResult = document.getElementById ("add-result");

const subtractInput1 = document.getElementById ("subtract-input-1");
const subtractInput2 = document.getElementById ("subtract-input-2");
const subtractButton = document.getElementById ("subtract-button");
const subtractResult = document.getElementById ("subtract-result");

const multiplyInput1 = document.getElementById ("multiply-input-1");
const multiplyInput2 = document.getElementById ("multiply-input-2");
const multiplyButton = document.getElementById ("multiply-button");
const multiplyResult = document.getElementById ("multiply-result");

const divideInput1 = document.getElementById ("divide-input-1");
const divideInput2 = document.getElementById ("divide-input-2");
const divideButton = document.getElementById ("divide-button");
const divideResult = document.getElementById ("divide-result");

// initialize state
addButton.addEventListener ('click', () => {
    addResult.textContent = Number(addInput1.value) + Number(addInput2.value)
    addResult.value = '';
})

subtractButton.addEventListener ('click', () => {
    subtractResult.textContent = Number(subtractInput1.value) - Number(subtractInput2.value)
    subtractResult.value = '';
})

multiplyButton.addEventListener ('click', () => {
    multiplyResult.textContent = Number(multiplyInput1.value) * Number(multiplyInput2.value)
    multiplyResult.value = '';
})

divideButton.addEventListener ('click', () => {
    divideResult.textContent = Number(divideInput1.value) / Number(divideInput2.value)
    divideResult.value = '';
})
// set event listeners to update state and DOM