let cois = 0;
let click = 1;

let coisinhos = document.querySelector("#coisinhos").innerHTML;
let clickValue = document.querySelector("#click").innerHTML;

function mostrarValores(){
    coisinhos = document.querySelector("#coisinhos").innerHTML = `Você tem ${cois} coisinhos`;
    clickValue = document.querySelector("#click").innerHTML = `+${click}`;

    return [coisinhos, clickValue];
}

//adiciona coisinhos
const add = () => {
    cois += click;
    mostrarValores()
}

//adiciona o valor do click
const addClickB10 = () => {
    if (cois >= 10){
        click += 1;
        cois -= 10;
    } else {
        alert('Você não possui coisinhos o suficiente');
    }

    mostrarValores()
}

const addClickB20 = () => {
    if (cois >= 20){
        click += 3;
        cois -= 20;
    } else {
        alert('Você não possui coisinhos o suficiente');
    }

    mostrarValores()
}

const addClickB50 = () => {
    if (cois >= 50){
        click += 5;
        cois -= 50;
    } else {
        alert('Você não possui coisinhos o suficiente');
    }

    mostrarValores()
}

const addClickB100 = () => {
    if (cois >= 100){
        click += 20;
        cois -= 100;
    } else {
        alert('Você não possui coisinhos o suficiente');
    }

    mostrarValores()
}
