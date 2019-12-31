var modal = document.getElementById("myModal");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");
var modal4 = document.getElementById("myModal4");
var modal5 = document.getElementById("myModal5");
var modal6 = document.getElementById("myModal6");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var img2 = document.getElementById("myImg2");
var img3 = document.getElementById("myImg3");
var img4 = document.getElementById("myImg4");
var img5 = document.getElementById("myImg5");
var img6 = document.getElementById("myImg6");

var modalImg = document.getElementById("img01");
var modalImg2 = document.getElementById("img02");
var modalImg3 = document.getElementById("img03");
var modalImg4 = document.getElementById("img04");
var modalImg5 = document.getElementById("img05");
var modalImg6 = document.getElementById("img06");

img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}

img2.onclick = function(){
  modal2.style.display = "block";
  modalImg2.src = this.src;
}

img3.onclick = function(){
  modal3.style.display = "block";
  modalImg3.src = this.src;
}

img4.onclick = function(){
  modal4.style.display = "block";
  modalImg4.src = this.src;
}

img5.onclick = function(){
  modal5.style.display = "block";
  modalImg5.src = this.src;
}

img6.onclick = function(){
  modal6.style.display = "block";
  modalImg6.src = this.src;
}


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close");

// When the user clicks on <span> (x), close the modal
span[0].onclick = function() {
  modal.style.display = "none"; 
}
span[1].onclick = function() {
  modal2.style.display = "none"; 
}
span[2].onclick = function() {
  modal3.style.display = "none"; 
}
span[3].onclick = function() {
  modal4.style.display = "none"; 
}
span[4].onclick = function() {
  modal5.style.display = "none"; 
}
span[5].onclick = function() {
  modal6.style.display = "none"; 
}