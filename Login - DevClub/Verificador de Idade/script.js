function ok() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('#nbrano')
    var res = document.querySelector('div#res')
    var min = 1900;

    if(Number(fano.value) < min || Number(fano.value) > ano){
        window.alert('Não foi possível te logar de acordo com as informações descritas.\nPor favor, verifique os dados e tente novamente!')
    }
    else{
        var fsex = document.getElementsByName('radsex')
        var genero = 'fsex'
        var idade = ano - Number(fano.value)
        var img = document.createElement('img')
        img.setAttribute('id', 'imagem')

        if(fsex[0].checked){
            genero = 'um Homem'

            if(idade >= 0 && idade <= 2){
                //Bebê
                img.setAttribute('src', 'media/menino-bebe.png')
            }
            else if(idade >= 3 && idade <= 10){
                //Criança
                img.setAttribute('src', 'media/menino-criança.png')
            }
            else if(idade >= 11 && idade <= 13){
                //Pré-adolescente
                img.setAttribute('src', 'media/menino-pre_adolescente.png')
            }
            else if(idade >= 14 && idade <= 17){
                //Adolescente
                img.setAttribute('src', 'media/menino-adolescente.png')
            }
            else if(idade >= 18 && idade <= 25){
                //Jovem
                img.setAttribute('src', 'media/homem-jovem.png')
            }
            else if(idade >= 26 && idade <= 49){
                //Adulto
                img.setAttribute('src', 'media/homem-adulto.png')
            }
            else if(idade >= 50){
                //Idoso
                img.setAttribute('src', 'media/homem-idoso.png')
            }
        }
        else if(fsex[1].checked){
            genero = 'uma Mulher'

            if(idade >= 0 && idade <= 2){
                //Bebê
                img.setAttribute('src', 'media/menina-bebe.png')
            }
            else if(idade >= 3 && idade <= 10){
                //Criança
                img.setAttribute('src', 'media/menina-criança.png')
            }
            else if(idade >= 11 && idade <= 13){
                //Pré-adolescente
                img.setAttribute('src', 'media/menina-pre_adolescente.png')
            }
            else if(idade >= 14 && idade <= 17){
                //Adolescente
                img.setAttribute('src', 'media/menina-adolescente.png')
            }
            else if(idade >= 18 && idade <= 25){
                //Jovem
                img.setAttribute('src', 'media/mulher-jovem.png')
            }
            else if(idade >= 26 && idade <= 49){
                //Adulto
                img.setAttribute('src', 'media/mulher-adulta.png')
            }
            else if(idade >= 50){
                //Idoso
                img.setAttribute('src', 'media/mulher-idosa.png')
            }
        }
        
        res.innerHTML = `Detectamos ${genero} de ${idade} anos.`
        res.appendChild(img)
    }
        res.style.textAlign = 'center'
}

//Bebê: 0 aos 2 anos de idade; Criança: 3 aos 10 anos; Pré-adolescente: 11 aos 13 anos; Adolescente: 14 aos 17 anos; Jovem: 18 aos 25 anos; Adulto: 26 aos 49; Idosos: 50+//