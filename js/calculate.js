const playerArray = [];

function selectedPlayer(addedPlayer) {
    const listItem = document.getElementById('player-list');
    listItem.innerHTML = '';
    for (let i = 0; i < addedPlayer.length; i++) {
        const player = addedPlayer[i].playerName;

        const tr = document.createElement('tr');

        tr.innerHTML = `
        <th>${i + 1}</th>
        <td>${player}</td>
        `;
        listItem.appendChild(tr);
    }
}

function addToList(element, btnId) {
    const playerName = element.parentNode.children[1].innerText;
    const player = {
        playerName: playerName
    }
    playerArray.push(player);
    const item = playerArray.length;
    const playerAdd = document.getElementById('added-player')
    playerAdd.innerText = item;

    // error handel
    if (item <= 5) {
        selectedPlayer(playerArray);
    }
    else {
        alert('you can select only five players');
        playerAdd.innerText = 5;
    }

    // disabled 
    document.getElementById(btnId).disabled = true;
    const selectStyle = document.getElementById(btnId);
    selectStyle.style.backgroundColor = 'gray';

    return item;
}


// buget section

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


// calculating player cost
document.getElementById('btn-calculate').addEventListener('click', function () {
    const perAmount = getInputValueById('per-amount');

    // get the number of player
    const man = document.getElementById('added-player');
    const manString = man.innerText;
    const manNumber = parseInt(manString);

    // calculate the total
    const totalAmount = manNumber * perAmount;
    setElementValueById('player-cost', totalAmount);
})


// calculate total 
document.getElementById('calculate-total').addEventListener('click', function () {
    const perAmount = getInputValueById('per-amount');

    // get the number of player
    const man = document.getElementById('added-player');
    const manString = man.innerText;
    const manNumber = parseInt(manString);

    // calculate the total
    const totalAmount = manNumber * perAmount;
    setElementValueById('player-cost', totalAmount);

    // calculating total
    // manager const
    const managerCost = getInputValueById('manager-cost');
    // coach cost
    const coachCost = getInputValueById('coach-cost');
    // total cost
    const totalCost = totalAmount + managerCost + coachCost;
    // set cost
    setElementValueById('total-cost', totalCost);
})