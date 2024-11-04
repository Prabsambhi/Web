// Selecting the elements

// const element = document.getElementById(heading);

const element = document.querySelector(".class-heading")

// Handling HTML

// element.innerHTML = "<h3>DOM</h3>";
element.textContent = "Modified DOM"

// Handling CSS
element.style.color = "blue";
element.style.backgroundColor = "yellow";

// Event Listener

element.addEventListener("click", ()=>{
    console.log("Element is clicked")
    
})

// Example

var box = document.querySelector('#box');
var btn = document.querySelector('button');

var flag=0;

btn.addEventListener('click', function(){
    if(flag==0){
        box.style.backgroundColor = "yellow";
        console.log("clicked");
        flag=1;
    }
    else{
        box.style.backgroundColor = "transparent";
        console.log("Unclicked");
        flag=0;
    }
})