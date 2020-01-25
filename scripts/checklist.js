window.onload = function (){
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const list = urlParams.get('list');
  
  if(list=="1"){
    var checklist1 = document.getElementById("checklist1");
    checklist1.style.display = "block";
  } else if(list=="2"){
    var checklist2 = document.getElementById("checklist2");
    checklist2.style.display = "block";
  } else if(list=="3"){
    var checklist3 = document.getElementById("checklist3");
    checklist3.style.display = "block";
  }else if(list=="4"){
    var checklist4 = document.getElementById("checklist4");
    checklist4.style.display = "block";
  }
}
  


