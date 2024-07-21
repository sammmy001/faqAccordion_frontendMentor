function myFunction1(){
    var x = document.getElementById("demo1");
    var xa = document.getElementById("demo2");
    var xb = document.getElementById("demo3");
    var xc = document.getElementById("demo4");
    if(x.innerHTML === ""){
       x.innerHTML = "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for  all levels and ideal for portfolio building.";
       xa.innerHTML= "";
       xb.innerHTML= "";
       xc.innerHTML= "";
       document.getElementById("img1").src = "images/icon-minus.svg"
       //    turns all other icon to plus i.e unclicked
       document.getElementById("img2").src = "images/icon-plus.svg"
       document.getElementById("img3").src = "images/icon-plus.svg"
       document.getElementById("img4").src = "images/icon-plus.svg"
    }
    else{
      x.innerHTML = "";
      document.getElementById("img1").src = "images/icon-plus.svg"
    }
    
  }  ;
           
  function myFunction2(){
    var x = document.getElementById("demo2");
    var xa = document.getElementById("demo1");
    var xb = document.getElementById("demo3");
    var xc = document.getElementById("demo4");
    if(x.innerHTML === ""){
       x.innerHTML = "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.";
       xa.innerHTML= "";
       xb.innerHTML= "";
       xc.innerHTML= "";
       document.getElementById("img2").src = "images/icon-minus.svg"
       //    turns all other icon to plus i.e unclicked
       document.getElementById("img1").src = "images/icon-plus.svg"
       document.getElementById("img3").src = "images/icon-plus.svg"
       document.getElementById("img4").src = "images/icon-plus.svg"
    }
    else{
      x.innerHTML = "";
      document.getElementById("img2").src = "images/icon-plus.svg"
    }
    
  }  ;
  
  function myFunction3(){
    var x = document.getElementById("demo3");
    var xa = document.getElementById("demo1");
    var xb = document.getElementById("demo2");
    var xc = document.getElementById("demo4");
    if(x.innerHTML === ""){
       x.innerHTML = "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!";
       xa.innerHTML= "";
       xb.innerHTML= "";
       xc.innerHTML= "";
       document.getElementById("img3").src = "images/icon-minus.svg"
    //    turns all other icon to plus i.e unclicked
       document.getElementById("img1").src = "images/icon-plus.svg"
       document.getElementById("img2").src = "images/icon-plus.svg"
       document.getElementById("img4").src = "images/icon-plus.svg"
    }
    else{
      x.innerHTML = "";
      document.getElementById("img3").src = "images/icon-plus.svg"
    }
    
  }  ;

  function myFunction4(){
    var x = document.getElementById("demo4");
    var xa = document.getElementById("demo1");
    var xb = document.getElementById("demo2");
    var xc = document.getElementById("demo3");
    if(x.innerHTML === ""){
       x.innerHTML = "The best place to get help is inside Frontend Mentor's Discord community. There's a help  channel where you can ask questions and seek support from other community members.";
       xa.innerHTML= "";
       xb.innerHTML= "";
       xc.innerHTML= "";
       document.getElementById("img4").src = "images/icon-minus.svg"
       //    turns all other icon to plus i.e unclicked
       document.getElementById("img1").src = "images/icon-plus.svg"
       document.getElementById("img2").src = "images/icon-plus.svg"
       document.getElementById("img3").src = "images/icon-plus.svg"
    }
    
    else{
      x.innerHTML = "";
      document.getElementById("img4").src = "images/icon-plus.svg"
    }
  }  ;
 