var acc = document.getElementsByClassName("accordion"); //Array with all accordion-style opening questions
var i;

for (i = 0; i < acc.length; i++) {  //Loops through every question to add event listener
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active"); //Adds styling when clicked by toggling active class
    var panel = this.nextElementSibling;
  if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}