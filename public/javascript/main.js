let div= document.querySelector('.js-container')
let button = document.querySelector('.js-go').addEventListener('click',function(){
    let input=document.querySelector('.js-userinput').value
    console.log(input)
    div.innerHTML=' '
   pushToDOM(input)
})

document.querySelector('.js-userinput').addEventListener('keyup',function(e){
    let input=document.querySelector('.js-userinput').value
  if(e.which==13){
    div.innerHTML=' '
    pushToDOM(input)
  }
    
})








function pushToDOM(input){
  //-------------------------GIPHY API-------------------------------------
  let url='https://api.giphy.com/v1/gifs/search?api_key=5qHZCSKTufCUIbbTRH3vaL3Qz8aNbXgN&q='+input+'&limit=25&offset=0&rating=g&lang=en'


// AJAX Request
var GiphyAJAXCall = new XMLHttpRequest();
GiphyAJAXCall.open( 'GET', url );
GiphyAJAXCall.send();

GiphyAJAXCall.addEventListener('load',function(e){

  var data = e.target.response;
  console.log(data)
  pushData(data)
  

});
//-------------------------GIPHY show-------------------------------------
  
}

function pushData(data){
  var response = JSON.parse(data);
  URLs=response.data
  URLs.forEach(element => {
    let src=element.images.fixed_height.url
    div.innerHTML+="<img src="+src+"class=container-image>"
  }); 
}
