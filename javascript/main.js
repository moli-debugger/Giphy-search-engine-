
let button = document.querySelector('.js-go').addEventListener('click',function(){
    let input=document.querySelector('.js-userinput').value
    console.log(input)
    let div= document.querySelector('.js-container')
    div.innerHTML=input
})

document.querySelector('.js-userinput').addEventListener('keyup',function(e){
    let input=document.querySelector('.js-userinput').value
  if(e.which==13){
    let div= document.querySelector('.js-container')
    div.innerHTML=input
  }
    
})
