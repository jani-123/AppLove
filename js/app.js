var images = ["assets/images/img-1.jpg","assets/images/img-2.jpg",
              "assets/images/img-3.jpg","assets/images/img-4.jpg",
              "assets/images/img-5.jpg","assets/images/img-6.jpg",
              "assets/images/img-7.jpg","assets/images/img-8.jpg",
              "assets/images/img-9.jpg",];

for(var i in images)
{ 
   var secuencia = document.getElementById('seccion');
   var divPicture = document.createElement('div'); 
       divPicture.setAttribute('class','col-4 seccionImg');
   var picture = document.createElement('img');
       picture.setAttribute('class','images');
       picture.setAttribute('src', images[i]);
   var texto = document.createElement('p');
   var textoS = document.createTextNode("Nombre del Proyecto");
       texto.appendChild(textoS);
   divPicture.appendChild(picture);
   divPicture.appendChild(texto);
   secuencia.appendChild(divPicture);

}

secuencia.addEventListener('click',mostrar);
var modal = document.getElementById('myModal');
var img;
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

function mostrar(event)
{
  img = event.target;
  modal.style.display = "block";
  modalImg.src = img.src;
  captionText.innerHTML = img.alt;
}

var span = document.getElementsByClassName("close")[0];
span.onclick = function(){ 
  modal.style.display = "none";
}