function verificar (){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.lenght == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] verifique os dados')

    } else {
        var fsex = document.getElementByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        

        if (fsex[0].checked){
            gênero = 'homem'

            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'foto-bebe-m.png')

            } else if (idade < 21){
                img.setAttribute('src', 'foto-jovem-m.png')

            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'foto-adulto-m.png')
            } else {
                img.setAttribute('src', 'foto-idoso-m.png')
            }

        } else if (fsex[1].checked){
            gênero = 'mulher'
            if (idade >= 0 && idade < 10) {


            } else if (idade < 21){


            } else if (idade < 50){
                //adulto

            } else {

            }
        }
        res.style.textAlign = 'center'.
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }

}