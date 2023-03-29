function showDiploma() {
    var image = document.getElementById("myDiploma");
    image.style.display = "block";
    document.getElementById("hide").style.display = "inline";
    document.getElementById("show").style.display = "none";
  }
  
function hideDiploma() {
    var image = document.getElementById("myDiploma");
    image.style.display = "none";
    document.getElementById("hide").style.display = "none";
    document.getElementById("show").style.display = "inline";
}

const showhide = document.getElementById("showhide");
const myDiplomaIng = document.getElementById("myDiplomaIng");
myDiplomaIng.style.display = "none"

showhide.addEventListener("click", function() {
  if (myDiplomaIng.style.display === "none") {
    myDiplomaIng.style.display = "block";
    showhide.textContent = "Ocultar Diploma";
  } else {
    myDiplomaIng.style.display = "none";
    showhide.textContent = "Ver Diploma";
  }
});
