let i;
let j;
let n;

var cnt1;
var cnt2;

// window.onload = function(){
//     positionX = 0;
//     positionY = 0;

// };
function mis2boat(){
    if(document.boat1.src.indexOf("space.png")>=0){
        document.boat1.src= "missionary.png"
        return true;
    }
    else if(document.boat2.src.indexOf("space.png")>=0){
        document.boat2.src="missionary.png";
        return true;
    }
    else
    return false;
}

function can2boat(){
    if(document.boat1.src.indexOf("space.png")>=0){
        document.boat1.src= "Cannibal.png";
        return true;
    }
    else if(document.boat2.src.indexOf("space.png")>=0){
        document.boat2.src="Cannibal.png";
        return true;
    }
    else
    return false;
}


function swapLeftMis(n){
    
if(document.leftspace.width != 10){
    alert("Boat is on the other side");
    return;
}
if( n == 1 && document.leftmis1.src.indexOf("missionary.png")>=0)
{
    if(mis2boat()){
    document.getElementById('mis1').src= "../space.png";
    }
}
else if( n == 2 && document.leftmis2.src.indexOf("missionary.png")>=0)
{
    if(mis2boat()){
    document.getElementById('mis2').src= "../space.png";
}
}
else if( n == 3 && document.leftmis3.src.indexOf("missionary.png")>=0)
{
    if(mis2boat()){
    document.getElementById('mis3').src= "../space.png";
    }
  }
}


 function swapLeftCan(n){
    
if(document.leftspace.width != 10){
    alert("Boat is on the other side");
    return;
}
if( n == 1 && document.leftcan1.src.indexOf("Cannibal.png")>=0)
{
    if(can2boat()){
    document.getElementById('demon1').src= "../space.png";
    }
}
else if( n == 2 && document.leftcan2.src.indexOf("Cannibal.png")>=0)
{
    if(can2boat()){
    document.getElementById('demon2').src= "../space.png";
}
}
else if( n == 3 && document.leftcan3.src.indexOf("Cannibal.png")>=0)
{
    if(can2boat()){
    document.getElementById('demon3').src= "../space.png";
    }
  }
}
function swapRightMis(n){
    
if(document.rightspace.width != 10){
    alert("Boat is on the other side");
    return;
}
if( n == 1 && document.rightmis1.src.indexOf("missionary.png")>=0)
{
    if(mis2boat()){
    document.getElementById('mis4').src= "../space.png";
    }
}
else if( n == 2 && document.rightmis2.src.indexOf("missionary.png")>=0)
{
    if(mis2boat()){
    document.getElementById('mis5').src= "../space.png";
}
}
else if( n == 3 && document.rightmis3.src.indexOf("missionary.png")>=0)
{
    if(mis2boat()){
    document.getElementById('mis6').src= "../space.png";
    }
  }
}
function swapRightCan(n){
    
if(document.rightspace.width != 10){
    alert("Boat is on the other side");
    return;
}
if( n == 1 && document.rightcan1.src.indexOf("Cannibal.png")>=0)
{
    if(can2boat()){
    document.getElementById('demon4').src= "../space.png";
    }
}
else if( n == 2 && document.rightcan2.src.indexOf("Cannibal.png")>=0)
{
    if(can2boat()){
    document.getElementById('demon5').src= "../space.png";
}
}
else if( n == 3 && document.rightcan3.src.indexOf("Cannibal.png")>=0)
{
    if(can2boat()){
    document.getElementById('demon6').src= "../space.png";
    }
  }
}

function swapBoat(n){
    //for right
    if(document.rightspace.width == 10){
        // debugger;
        if ( n == 1 && document.boat1.src.indexOf("missionary.png") >= 0 ) {
      if ( document.rightmis1.src.indexOf("space.png") >= 0 ) {
        document.rightmis1.src = "../missionary.png";
        document.rightmis1.style.transitionDelay = "2s"
      } else if ( document.rightmis2.src.indexOf("space.png") >= 0 ) {
        document.rightmis2.src = "../missionary.png";
      } else if ( document.rightmis3.src.indexOf("space.png") >= 0 ) {
        document.rightmis3.src = "../missionary.png";
      }
      document.boat1.src = "space.png"
    }
        else if ( n == 1 && document.boat1.src.indexOf("Cannibal.png") >= 0 ) {
      if ( document.rightcan1.src.indexOf("space.png") >= 0 ) {
        document.rightcan1.src = "../Cannibal.png";
      } else if ( document.rightcan2.src.indexOf("space.png") >= 0 ) {
        document.rightcan2.src = "../Cannibal.png";
      } else if ( document.rightcan3.src.indexOf("space.png") >= 0 ) {
        document.rightcan3.src = "../Cannibal.png";
      }
      document.boat1.src = "space.png"
    }
        else if (n == 2 && document.boat2.src.indexOf("missionary.png") >= 0){
            if ( document.rightmis1.src.indexOf("space.png") >= 0 ) {
        document.rightmis1.src = "../missionary.png";
      } else if ( document.rightmis2.src.indexOf("space.png") >= 0 ) {
        document.rightmis2.src = "../missionary.png";
      } else if ( document.rightmis3.src.indexOf("space.png") >= 0 ) {
        document.rightmis3.src = "../missionary.png";
      }
      document.boat2.src = "space.png"
    }
        else if(n == 2 && document.boat2.src.indexOf("Cannibal.png")>=0){
            if ( document.rightcan1.src.indexOf("space.png") >= 0 ) {
        document.rightcan1.src = "../Cannibal.png";
      } else if ( document.rightcan2.src.indexOf("space.png") >= 0 ) {
        document.rightcan2.src = "../Cannibal.png";
      } else if ( document.rightcan3.src.indexOf("space.png") >= 0 ) {
        document.rightcan3.src = "../Cannibal.png";
      }
      document.boat2.src = "space.png"
    } 
        
} else { 
        if ( n == 1 && document.boat1.src.indexOf("missionary.png") >= 0 ) {
      if ( document.leftmis1.src.indexOf("space.png") >= 0 ) {
        document.leftmis1.src = "../missionary.png";
      } else if ( document.leftmis2.src.indexOf("space.png") >= 0 ) {
        document.leftmis2.src = "../missionary.png";
      } else if ( document.leftmis3.src.indexOf("space.png") >= 0 ) {
        document.leftmis3.src = "../missionary.png";
      }
      document.boat1.src = "space.png"
    }
        else if ( n == 1 && document.boat1.src.indexOf("Cannibal.png") >= 0 ) {
      if ( document.leftcan1.src.indexOf("space.png") >= 0 ) {
        document.leftcan1.src = "../Cannibal.png";
      } else if ( document.leftcan2.src.indexOf("space.png") >= 0 ) {
        document.leftcan2.src = "../Cannibal.png";
      } else if ( document.leftcan3.src.indexOf("space.png") >= 0 ) {
        document.leftcan3.src = "../Cannibal.png";
      }
      document.boat1.src = "space.png"
    }
        else if (n == 2 && document.boat2.src.indexOf("missionary.png") >= 0){
            if ( document.leftmis1.src.indexOf("space.png") >= 0 ) {
        document.leftmis1.src = "../missionary.png";
      } else if ( document.leftmis2.src.indexOf("space.png") >= 0 ) {
        document.leftmis2.src = "../missionary.png";
      } else if ( document.leftmis3.src.indexOf("space.png") >= 0 ) {
        document.leftmis3.src = "../missionary.png";
      }
      document.boat2.src = "space.png"
    }
        else if(n == 2 && document.boat2.src.indexOf("Cannibal.png")>=0){
            if ( document.leftcan1.src.indexOf("space.png") >= 0 ) {
        document.leftcan1.src = "../Cannibal.png";
      } else if ( document.leftcan2.src.indexOf("space.png") >= 0 ) {
        document.leftcan2.src = "../Cannibal.png";
      } else if ( document.leftcan3.src.indexOf("space.png") >= 0 ) {
        document.leftcan3.src = "../Cannibal.png";
      }
      document.boat2.src = "space.png"
    }
}
} 

function submitLeft(){
    if(document.leftspace.width != 250){
        return;
    }
    if(document.boat1.src.indexOf("space.png")>=0 && document.boat2.src.indexOf("space.png")>=0){
        alert("Boat is empty");
        return;
    }
    document.rightspace.width = 250;
    document.leftspace.width = 10;
    swapBoat(1);
    swapBoat(2);
    checkNumber();
    checkResult();
}
function submitRight(){ 

if(document.rightspace.width != 250){
        return;
    }
    if(document.boat1.src.indexOf("space.png")>=0 && document.boat2.src.indexOf("space.png")>=0){
        alert("Boat is empty");
        return;
    }
    document.leftspace.width = 250;
    document.rightspace.width = 10;
    swapBoat(1);
    swapBoat(2);
    checkNumber();
    checkResult();
}

function startAgain(){
    document.leftspace.width = 10;
    document.rightspace.width = 250;
    document.getElementById('title').innerHTML = "Hi! Welcome to the Missionaries and Cannibals game";
    document.leftmis1.src = "missionary.png";
    document.leftmis2.src = "missionary.png";
    document.leftmis3.src = "missionary.png";
    document.leftcan1.src = "Cannibal.png";
    document.leftcan2.src = "Cannibal.png";
    document.leftcan3.src = "Cannibal.png";
    document.rightmis1.src = "space.png";
    document.rightmis2.src = "space.png";
    document.rightmis3.src = "space.png";
    document.rightcan1.src = "space.png";
    document.rightcan2.src = "space.png";
    document.rightcan3.src = "space.png";
    document.boat1.src = "space.png";
    document.boat2.src = "space.png";
    
}
function checkNumber(){
    cnt1 = 0;
    cnt2 = 0;
    if( document.leftmis1.src.indexOf("missionary.png")>=0){
        cnt1++
    }
    if( document.leftmis2.src.indexOf("missionary.png")>=0){
        cnt1++
    }
    if( document.leftmis3.src.indexOf("missionary.png")>=0){
        cnt1++
    }
    if( document.leftcan1.src.indexOf("Cannibal.png")>=0){
        cnt2++
    }
    if( document.leftcan2.src.indexOf("Cannibal.png")>=0){
        cnt2++
    }
    if( document.leftcan3.src.indexOf("Cannibal.png")>=0){
        cnt2++
    }

    if(cnt2>cnt1){
        if(document.leftmis1.src.indexOf("missionary.png")>=0){
            document.leftmis1.src = "skull.png";
        }
        if(document.leftmis2.src.indexOf("missionary.png")>=0){
            document.leftmis2.src = "skull.png";
        }
        if(document.leftmis3.src.indexOf("missionary.png")>=0){
            document.leftmis3.src = "skull.png";
        }
    }
    //right side
cnt1 = 0;
cnt2 = 0;
    if( document.rightmis1.src.indexOf("missionary.png")>=0){
        cnt1++
    }
    if( document.rightmis2.src.indexOf("missionary.png")>=0){
        cnt1++
    }
    if( document.rightmis3.src.indexOf("missionary.png")>=0){
        cnt1++
    }
    if( document.rightcan1.src.indexOf("Cannibal.png")>=0){
        cnt2++
    }
    if( document.rightcan2.src.indexOf("Cannibal.png")>=0){
        cnt2++
    }
    if( document.rightcan3.src.indexOf("Cannibal.png")>=0){
        cnt2++
    }

    if(cnt2>cnt1){
        if(document.rightmis1.src.indexOf("missionary.png")>=0){
            document.rightmis1.src = "skull.png";
        }
        if(document.rightmis2.src.indexOf("missionary.png")>=0){
            document.rightmis2.src = "skull.png";
        }
        if(document.rightmis3.src.indexOf("missionary.png")>=0){
            document.rightmis3.src = "skull.png";
        }
    }
}

function checkResult(){
    if(document.rightmis1.src.indexOf("missionary.png")>=0 
    && document.rightmis2.src.indexOf("missionary.png")>=0
    && document.rightmis3.src.indexOf("missionary.png")>=0
    && document.rightcan1.src.indexOf("Cannibal.png")>=0
    && document.rightcan2.src.indexOf("Cannibal.png")>=0
    && document.rightcan3.src.indexOf("Cannibal.png")>=0
){  
  document.getElementById('title').innerHTML = "Problem Solved!!";
    alert("Yay! Problem solved!!")
}
}
