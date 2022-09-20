if (typeof window !== 'undefined') {
    console.log('You are on the browser')
  } else {
    console.log('You are on the server')
}

let squares = document.querySelectorAll('.square');
let elem = 'X';
let sq1 = 'A', sq2 = 'B', sq3 = 'C', sq4 = 'D', sq5 = 'E', sq6 = 'F', sq7 = 'G', sq8 = 'H', sq9 = 'J';
let i = 0;
jogadas = 0;

for(i = 0; i  < 9; i++) {  
    squares[i].addEventListener('click', function(event) {
        const el = event.target;
        const id = el.id;
        colocaElem(id, elem);
        el.style.pointerEvents = 'none';
        if(elem == 'X') elem = 'O';
        else elem = 'X';
    });
}


function colocaElem(id, elem) {
    let ganhador = 0;
    console.log(jogadas);
    if(jogadas == 8) {
        alert("Deu velha!");
        location.reload();
    }


    atribuiElemento(id, elem);
    
    let local = document.getElementById(id);
    local.innerText = `${elem}`;
    
    ganhador = checaGanhou();
    if(ganhador != 0) {
        alert("Parabéns " + ganhador);
        location.reload();
    }    
    jogadas++;

}

function checaGanhou() {
    let ganhou;
    if(sq1 == sq2 && sq1 == sq3 && sq2 == sq3) {
        ganhou = sq1;
        document.getElementById('1').style.backgroundColor = 'green';
        document.getElementById('2').style.backgroundColor = 'green';
        document.getElementById('3').style.backgroundColor = 'green';
    }

    else if(sq4 = sq5 && sq4 == sq6 && sq5 == sq6) {
        ganhou = sq4;
        document.getElementById('4').style.backgroundColor = 'green';
        document.getElementById('5').style.backgroundColor = 'green';
        document.getElementById('6').style.backgroundColor = 'green';
    }

    else if(sq7 == sq8 && sq7 == sq9 && sq8 == sq9) {
        ganhou = sq7;
        document.getElementById('7').style.backgroundColor = 'green';
        document.getElementById('8').style.backgroundColor = 'green';
        document.getElementById('9').style.backgroundColor = 'green';
    }

    else if(sq1 == sq4 && sq1 == sq7 && sq4 == sq7) {
        ganhou = sq1;
        document.getElementById('1').style.backgroundColor = 'green';
        document.getElementById('4').style.backgroundColor = 'green';
        document.getElementById('7').style.backgroundColor = 'green';
    }

    else if(sq2 == sq5 && sq2 == sq8 && sq5 == sq8) {
        ganhou = sq2;
        document.getElementById('2').style.backgroundColor = 'green';
        document.getElementById('5').style.backgroundColor = 'green';
        document.getElementById('8').style.backgroundColor = 'green';
    }

    else if(sq3 == sq6 && sq3 == sq9 && sq6 == sq9) {
        ganhou = sq3;
        document.getElementById('3').style.backgroundColor = 'green';
        document.getElementById('6').style.backgroundColor = 'green';
        document.getElementById('9').style.backgroundColor = 'green';
    }
    else if(sq1 == sq5 && sq1 == sq9 && sq5 == sq9) {
        ganhou = sq1;
        document.getElementById('1').style.backgroundColor = 'green';
        document.getElementById('5').style.backgroundColor = 'green';
        document.getElementById('9').style.backgroundColor = 'green';
    }
    else if(sq3 == sq5 && sq3 == sq7 && sq5 == sq7) {
        ganhou = sq3;
        document.getElementById('3').style.backgroundColor = 'green';
        document.getElementById('5').style.backgroundColor = 'green';
        document.getElementById('7').style.backgroundColor = 'green';
    }
    else ganhou = 0;
    return ganhou;
}

function atribuiElemento(id, elem) {
    switch (id) {
        case '1':
            sq1 = elem;
            break;
        case '2':
            sq2 = elem;
            break;
        case '3':
            sq3 = elem;
            break;
        case '4':
            sq4 = elem;
            break;
        case '5':
            sq5 = elem;
            break;
        case '6':
            sq6 = elem;
            break;
        case '7':
            sq7 = elem;
            break;
        case '8':
            sq8 = elem;
            break;
        case '9':
            sq9 = elem;
            break;
    }
}



