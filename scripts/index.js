window.onload = function() {

  var container1 = document.getElementById("container1");
  var container2 = document.getElementById("container2");
  var footerbutton = document.getElementById("footerbutton");

  document.getElementById("bizQuestion").addEventListener("click", function() {
    LoadHTML('checklist.html?list=1');
  })

  document.getElementById("leisureQuestion").addEventListener("click", function() {
    container1.style.display = "none";
    container2.style.display = "block";
    footerbutton.style.display = "block";
  })

  document.getElementById("cityQuestion").addEventListener("click", function() {
    LoadHTML('checklist.html?list=2');
  })

  document.getElementById("islandQuestion").addEventListener("click", function() {
    LoadHTML('checklist.html?list=3');
  })

  document.getElementById("forestQuestion").addEventListener("click", function() {
    LoadHTML('checklist.html?list=4');
  })

}

function LoadHTML(page) {
  window.location.replace(page);
}
