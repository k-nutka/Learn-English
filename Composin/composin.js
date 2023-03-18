window.onload = function(){
    console.log("Start");
    init();
}


function init(){
makePage();
next.addEventListener("click", (e)=> nextSentence(e));
check.addEventListener("click", (e)=> checkSentence(e));
again.addEventListener("click", function(){
  location.reload()});

back.addEventListener("click", function(){ 
  window.location.replace("http://127.0.0.1:5500/index.html")

})

}
let polishIndex = 0;
let sentencesIndex = 0;
let newSentence = [];
let sentenceDiv = document.querySelector(".sentence");
let next = document.getElementById("next");
let check = document.getElementById("check");
let clean = document.getElementById("clean");
let score = 0;
let nextClik = 0;

let again = document.getElementById("again");
let back = document.getElementById("back");


const sentences = [
    "The boy was looking about him",
    "He came to us after the party",
    "The dog was running behind",
    "The table is made of wood",
    "You can't buy anything without money",
    
]
const polishSentences = [
    "Chłopiec rozglądał się dookoła.",
    "Przyszedł do nas po przyjęciu.",
    "Pies biegł z tyłu.",
    "Stół jest zrobiony z drewna.",
    "Nie możesz nic kupić bez pieniędzy."
]


function nextSentence(){
    let buttonsDiv = document.querySelector(".butttons-container");
    polishIndex++
    sentencesIndex++
    info.innerHTML = ""
    buttonsDiv.innerHTML = [];
    sentenceDiv.innerHTML = "";
    newSentence=[];
    clean.removeAttribute("disabled");
    check.removeAttribute("disabled");
    
    next.setAttribute("disabled", "disabled");
    nextClik++
    let modal = document.getElementById("info-modal");
    let resultInfo = document.getElementById("result-info");

    if(nextClik === sentences.length){
      modal.style.display = "flex";
      resultInfo.innerHTML = `You got ${score}/5 correct answers`;
    }
  

  

    makePage();
    
    
    
}



function makePage(){
  let newWords = [];
  let info = document.getElementById("info");

    let buttonsDiv = document.querySelector(".butttons-container");
   
 
    document.getElementById("polish-version").innerHTML = polishSentences[polishIndex];
    console.log(sentences[sentencesIndex]);
    let wordsArray = sentences[sentencesIndex].split(" ");
    mixElements(wordsArray);


    for(let i = 0; i < wordsArray.length; i++){
    let button = document.createElement("button");
    button.classList.add("word-button");
    buttonsDiv.appendChild(button);
    button.dataset.wordId = i;

    button.innerHTML = wordsArray[i]

    button.addEventListener("click", function(){
      
        newWords.push(wordsArray[button.dataset.wordId]);
        button.setAttribute("disabled", "disabled");
        

        newSentence = newWords.join(" ");

      
        sentenceDiv.innerHTML = newSentence;
        
        
    });


    
    
    document.getElementById("clean").addEventListener("click", function(){
      button.removeAttribute("disabled");
    
      sentenceDiv.innerHTML = "";
      
      info.innerHTML = "";
      newWords=[];
      newSentence=[]

    })


    }
    
  }


  function checkSentence(){
     
    next.removeAttribute("disabled");
    check.setAttribute("disabled", "disabled");
    clean.setAttribute("disabled", "disabled");
    
    
    

    if(newSentence.length == 0){
      info.innerHTML = "Complete the field!!!"
      info.style.color = "red"
      clean.removeAttribute("disabled");
      check.removeAttribute("disabled");
      next.setAttribute("disabled", "disabled");
      

      
      
    }else if(newSentence === sentences[sentencesIndex]){
      console.log('Score +')
      score++;
      info.innerHTML = "Great!!!";
      info.style.color = "green";

      
    }else if(newSentence !== sentences[sentencesIndex]){
      info.innerHTML = "Incorrect!!!"
      info.style.color = "red"
    }} 

  

    function showResult(){
      let modal = document.getElementById("info-modal");
      let resultInfo = document.getElementById("result-info");

      if(nextClik === sentences.length-1){
        modal.style.display = "flex";
        resultInfo.innerHTML = `You got ${score}/5 correct answers`;
      }
    }


    


    







  


  


    
    

    
    






function mixElements(array) {
    let currentIndex = array.length;
    let randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    console.log(array);
    return array;
  }




