function carregar(){
    let msg = document.querySelector('.msg');
    let photo = document.querySelector('.photo');
    let data = new Date ();
    let hora = data.getHours();
    let minutos = data.getMinutes(); 
    let minutosFormatados = minutos.toString().padStart(2, '0');
    let fundo = document.querySelector('body')

    if (hora >= 0 && hora < 12){
        photo.src = 'imagens/manha.png';
        fundo.style.background = '#';
        msg.innerHTML = `Agora são ${hora}:${minutosFormatados}, Bom dia!`;
    }else if (hora >= 12 && hora < 18){
        fundo.style.background = '#';
        msg.innerHTML = `Agora são ${hora}:${minutosFormatados}, Boa tarde!`;
        photo.src = 'imagens/tarde.png';
    }else{ 
        fundo.style.background = '';
        msg.innerHTML = `Agora são ${hora}:${minutosFormatados}, Boa Noite!`;
        photo.src = 'imagens/noite.png';
    }}

