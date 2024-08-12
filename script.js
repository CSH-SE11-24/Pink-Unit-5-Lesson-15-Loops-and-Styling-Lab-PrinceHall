console.log("Script running...");
// Task 1: All off button
// Set up the the DOM manipulation flow such that when you press the all off button, the background color of all the lightbulb p tags changes to black



let offbutton = document.querySelector("#off")
console.log(offbutton)


let ptags = document.getElementsByClassName("lightbulb")


offbutton.addEventListener("click", function(event){
   
  for(let i = 0; i<ptags.length;i++){
    ptags[i].style.backgroundColor = "black"
  }

})


// Task 2: CSH Mode
// Set up the DOM manipulation flow such that when your mouse is over the CSH mode button, the body's background color changes to green and the lightbulb p tags text change to "💻"
// When your mouse leaves the CSH mode button, the body's background should go back to black and the lightbulb p tags text should go back to "💡"

let cshbutton = document.querySelector("#csh")

let body = document.querySelector("#wrapper")



cshbutton.addEventListener("mouseover", function(event){
  body.style.backgroundColor = "green"
  
  for(let i = 0; i<ptags.length;i++){
    ptags[i].innerHTML = "💻"
  }
  
})

cshbutton.addEventListener("mouseout", function(event){
  body.style.backgroundColor = "black"

  for(let i = 0; i<ptags.length;i++){
    ptags[i].innerHTML = "💡"
  }

})




// Task 3: On and off feature
// Set up the DOM manipulation flow such that when you click any of the lightbulb p tags, the p tag's background color toggles from black to white
// You should use the classList property with the appropriate class from style.css


for(let i = 0; i<ptags.length ;i++){
  ptags[i].addEventListener("click", function(event){
    ptags[i].style.backgroundColor = "white"
    
  })
  
}



