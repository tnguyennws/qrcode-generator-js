//Fonction servant à générer le QRcode
function getQRCode()
{
    var url = document.getElementById("input1"); //Variable contenant l'URL
    var color = document.getElementById("input2"); //Variable contenant la couleur du QRcode
    var bgcolor = document.getElementById("input3"); //Variable contenant la couleur du background du QRcode

    //Récupération de l'API
    fetch("https://api.qrserver.com/v1/create-qr-code/?data=" + url.value + "&amp;size=100x100&format=png&color=" + color.value + "&bgcolor=" + bgcolor.value)
    .then(response=>{
        document.getElementById('qrcode').src=response.url;
    })
}

//Fonction similaire à getQRCode() mais modifie l'URL pour récupérer un format .png
function downloadPNG()
{
    var url = document.getElementById("input1");
    var color = document.getElementById("input2");
    var bgcolor = document.getElementById("input3");
    fetch("https://api.qrserver.com/v1/create-qr-code/?data=" + url.value + "&amp;size=100x100&format=png&color=" + color.value + "&bgcolor=" + bgcolor.value)
    .then(response=>{
        document.getElementById('qrcode').src=response.url;
    })
}

//Fonction similaire à getQRCode() mais modifie l'URL pour récupérer un format .svg
function downloadSVG()
{
    var url = document.getElementById("input1");
    var color = document.getElementById("input2");
    var bgcolor = document.getElementById("input3");
    fetch("https://api.qrserver.com/v1/create-qr-code/?data=" + url.value + "&amp;size=100x100&format=svg&color=" + color.value + "&bgcolor=" + bgcolor.value)
    .then(response=>{
        document.getElementById('qrcode').src=response.url;
    })
}
