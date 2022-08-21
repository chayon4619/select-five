// function desiabled(nameId, buttonId) {
//     const name = document.getElementById(nameId);
//     const nameText = name.innerText;
//     const lists = document.getElementsByClassName('list-item');
//     for (const list of lists) {
//         const text = list.innerText;
//         list.innerText = text + nameText;
//     }
//     const select = document.getElementById(buttonId).disabled = true;
//     const selectStyle = document.getElementById(buttonId);
//     selectStyle.style.backgroundColor = 'gray';
// }
// document.getElementById('btn-messi').addEventListener('click', function () {
//     desiabled('messi-name', 'btn-messi')
// });
// document.getElementById('btn-neymar').addEventListener('click', function () {
//     desiabled('neymar-name', 'btn-neymar')
// });





// // list added function
// function creatLi(name) {
//     const list = document.createElement("li");
//     const listText = document.createTextNode(name);
//     list.appendChild(listText);
//     document.getElementById("player-list").appendChild(list);
// }


// document.getElementById('btn-messi').addEventListener('click', function () {
//     // const list = document.createElement("li");
//     // const listText = document.createTextNode("Messi");
//     // list.appendChild(listText);
//     // document.getElementById("player-list").appendChild(list);
//     const playerName = document.getElementById('messi-name');
//     const player = playerName.innerText;
//     creatLi(player);

//     document.getElementById('btn-messi').disabled = true;
//     const selectStyle = document.getElementById('btn-messi');
//     selectStyle.style.backgroundColor = 'gray';
// })

// document.getElementById('btn-neymar').addEventListener('click', function () {
//     // const list = document.createElement("li");
//     // const listText = document.createTextNode("Neymar");
//     // list.appendChild(listText);
//     // document.getElementById("player-list").appendChild(list);
//     const playerName = document.getElementById('neymar-name');
//     const player = playerName.innerText;
//     creatLi(player);

//     document.getElementById('btn-neymar').disabled = true;
//     const selectStyle = document.getElementById('btn-neymar');
//     selectStyle.style.backgroundColor = 'gray';
// })



// document.getElementById('btn-mbappe').addEventListener('click', function () {
//     // const list = document.createElement("li");
//     // const listText = document.createTextNode("mabbpe");
//     // list.appendChild(listText);
//     // document.getElementById("player-list").appendChild(list);
//     const playerName = document.getElementById('mbappe-name');
//     const player = playerName.innerText;
//     creatLi(player)

//     document.getElementById('btn-mbappe').disabled = true;
//     const selectStyle = document.getElementById('btn-mbappe');
//     selectStyle.style.backgroundColor = 'gray';
// })




const playerArray = [];


function selectedPlayer(addedPlayer) {
    // console.log(addedPlayer);
    const listItem = document.getElementById('player-list');
    listItem.innerHTML = '';
    for (let i = 0; i < addedPlayer.length; i++) {
        // console.log(addedPlayer[i].playerName);
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
    // console.log(element.parentNode.children[1].innerText);

    const playerName = element.parentNode.children[1].innerText;
    // console.log(playerName);

    const player = {
        playerName: playerName
    }
    playerArray.push(player);
    // console.log(playerArray);
    // console.log(playerArray.length);
    const item = playerArray.length;
    document.getElementById('added-player').innerText = item;
    // console.log(item);
    selectedPlayer(playerArray);

    // disabled 
    document.getElementById(btnId).disabled = true;
    const selectStyle = document.getElementById(btnId);
    selectStyle.style.backgroundColor = 'gray';


    return item;
}













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

document.getElementById('btn-calculate').addEventListener('click', function () {
    const perAmount = getInputValueById('per-amount');

    const man = document.getElementById('added-player');
    const manString = man.innerText;
    const manNumber = parseInt(manString);


    const totalAmount = manNumber * perAmount;
    setElementValueById('player-cost', totalAmount);
})

// calculate total 
document.getElementById('calculate-total').addEventListener('click', function () {
    const perAmount = getInputValueById('per-amount');

    const man = document.getElementById('added-player');
    const manString = man.innerText;
    const manNumber = parseInt(manString);

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