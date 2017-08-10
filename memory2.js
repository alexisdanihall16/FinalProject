var firstButtonID;
var innerText;
var numFlipped= 0;
function memory(id){
  document.getElementById(id).classList.remove("image");
  document.getElementById(id+"Div").removeAttribute("hidden");
  if (numFlipped==0){
    firstButtonID=id;
    innerText=document.getElementById(id+"Div").innerHTML;
  }
  numFlipped++;
  if (numFlipped==2){
    if (innerText!=document.getElementById(id+"Div").innerHTML){
      setTimeout(hideDiv, 4000, id);

    } else {
      setTimeout(hideButton, 4000, id);
    }
    numFlipped=0;
}
}
function hideDiv(id) {
  document.getElementById(id+"Div").setAttribute("hidden", true);
  document.getElementById(firstButtonID+"Div").setAttribute("hidden", true);
  document.getElementById(id).classList.add("image");
  document.getElementById(firstButtonID).classList.add("image");
}

function hideButton(id) {
  document.getElementById(id).setAttribute("hidden", true);
  document.getElementById(firstButtonID).setAttribute("hidden", true);
}
