var select = document.querySelector('select');
var aparecerTela = document.querySelector('p');

select.addEventListener('change', Horario);

function Horario() {
    var pegou = select.value;

    if (pegou === 'Manhã'){
        aparecerTela.textContent = 'deu certo aqui ooo'
    }
    else if (pegou === 'Tarde'){
        aparecerTela.textContent = 'deu certo aqui';
    }
    else if (pegou === 'Noite'){
        aparecerTela.textContent = 'deu certo';
    }
    else if (pegou === 'Madrugada'){
        aparecerTela.textContent = 'deu';
    }
   
}

