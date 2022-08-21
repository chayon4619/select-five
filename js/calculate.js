function desiabled(nameId, buttonId) {
    const name = document.getElementById(nameId);
    const nameText = name.innerText;
    const lists = document.getElementsByClassName('list-item');
    for (const list of lists) {
        const text = list.innerText;
        list.innerText = text + nameText;
    }
    const select = document.getElementById(buttonId).disabled = true;
    const selectStyle = document.getElementById(buttonId);
    selectStyle.style.backgroundColor = 'gray';
}
document.getElementById('btn-messi').addEventListener('click', function () {
    desiabled('messi-name', 'btn-messi')
});
document.getElementById('btn-neymar').addEventListener('click', function () {
    desiabled('neymar-name', 'btn-neymar')
});


// buget section added


// get input feild value by function
function getInputValueById(elementId) {
    const inputValueFeild = document.getElementById(elementId);
    const inputValueString = inputValueFeild.value;
    const inputValue = parseFloat(inputValueString);

    // error handel
    if (inputValue < 0) {
        alert('please,input a posetive number');
        setElement.innerText = 00;
    }
    else if (isNaN(inputValue)) {
        alert('please,input a valid number');
        setElement.innerText = 00;
    }
    return inputValue;
}

// set element function
function setElementValueById(elementId, value) {
    const setElement = document.getElementById(elementId);
    setElement.innerText = value;
}