let cois = 0;
let click = 1;

const add = () => {
    cois += click;
    let coisinhos = document.querySelector("#coisinhos").innerHTML = `Você tem ${cois} coisinhos`;
}

