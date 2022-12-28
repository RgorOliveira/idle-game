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

const addClickB50 = () => {
    if (cois >= 50){
        click += 5;
        cois -= 50;
    } else {
        alert('Você não possui coisinhos o suficiente');
    }

    mostrarValores()
}

const addClickB250 = () => {
    if (cois >= 250){
        click += 20;
        cois -= 250;
    } else {
        alert('Você não possui coisinhos o suficiente');
    }

    mostrarValores()
}

const addClickB1000 = () => {
    if (cois >= 1000){
        click += 100;
        cois -= 1000;
    } else {
        alert('Você não possui coisinhos o suficiente');
    }

    mostrarValores()
}
