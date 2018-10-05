function sleptiViska()
{
    var sheetai = document.getElementsByClassName('sheet');

    for (var i = 0; sheetai.length > i; i++){
        var elementas = sheetai[i];
        elementas.style.display = 'none';
    }
}

function rodyti(id)
{
    var elementas = document.getElementById(id);
    elementas.style.display = 'block';
}

function gautiId(element)
{
    var atributai = element.attributes;
    for (var i = 0; atributai.length > i; i++) {
        var atributas = atributai[i];
        if (atributas.name === 'href') {
            return atributas.value.substr(1);
        }
    }

    return null;
}

document.getElementsByClassName('csharp')[0].addEventListener('click', function () {
    sleptiViska();
    rodyti('csharp');
});

document.getElementsByClassName('java')[0].addEventListener('click', function () {
    sleptiViska();
    rodyti('java');
});

document.getElementsByClassName('web')[0].addEventListener('click', function () {
    sleptiViska();
    rodyti('web');
});

document.getElementsByClassName('other')[0].addEventListener('click', function () {
    sleptiViska();
    rodyti('other');
});
