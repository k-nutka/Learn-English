
window.onload = function () {
  document.getElementById("start-memory").addEventListener("click", (e)=> app.init(e));
};


const app ={
gameList: [],
gameBoard:document.querySelector(".game-board"),
clickedFieldsId:[],
clickedWordsId:[],
htmlScore:document.querySelector(".score"),
score: 0,
scoreArray:[],
memoryModal:document.querySelector(".memory-modal"),
menuButton:document.getElementById("menu-button"),
playAgainButton:document.getElementById("play-again-button"),

replaceFunction(){this.menuButton.addEventListener("click", function(){
  window.location.replace("http://127.0.0.1:5500/index.html");
}
);

},

playAgainFunction(){
  this.playAgainButton.addEventListener("click", (e)=> {
    this.score=0;
    this.init(e);
    this.memoryModal.style.display = "none";
  
  }
  
    );

},


init(){
  
  this.getRandomWords();
  this.mixElements(this.gameList);
  this.clickFunction();
  this.replaceFunction();
  this.playAgainFunction();
  document.getElementById("start-memory").addEventListener("click", (e)=> this.startGame(e));





},

dictionary: [
  {
    id: 1,
    eng: "encounter",
    pl: "spotykać",
  },
  {
    id: 2,
    eng: "stare",
    pl: "gapić się",
  },
  {
    id: 3,
    eng: "seduce",
    pl: "uwodzić",
  },
  {
    id: 4,
    eng: "embark on",
    pl: "rozpoczynać",
  },
  {
    id: 5,
    eng: "wring one's hands",
    pl: "załamywać ręce",
  },
  {
    id: 6,
    eng: "sore point",
    pl: "czuły punkt",
  },
  {
    id: 7,
    eng: "strain",
    pl: "napięcie",
  },
  {
    id: 8,
    eng: "blush",
    pl: "rumienić się",
  },
  {
    id: 9,
    eng: "urge",
    pl: "ochota",
  },
  {
    id: 10,
    eng: "rigid",
    pl: "sztywny, surowy",
  },
  {
    id: 11,
    eng: "spring to mind",
    pl: "przychodzić do głowy",
  },
  {
    id: 12,
    eng: "draw-attention",
    pl: "przyciągać uwagę",
  },
  {
    id: 13,
    eng: "bias",
    pl: "uprzedzenie",
  },
  {
    id: 14,
    eng: "kochany",
    pl: "beloved",
  },
  {
    id: 15,
    eng: "crucial",
    pl: "kluczowy",
  },
],


startGame (){
  this.gameBoard.innerHTML = "";
  this.htmlScore.innerHTML = 0;
  this.gameList=[];
  this.init()
 

},
getRandomWords() {
  let wordsList = this.dictionary;
  for (i = 0; i < 10; i++) {
    let selectedItem = wordsList[Math.floor(Math.random() * wordsList.length)];
    wordsList = wordsList.filter((x) => x.id != selectedItem.id); //lista bez wyselekcjonowanych

    const engWord = {
      id: selectedItem.id,
      text: selectedItem.eng,
    };

    const plWord = {
      id: selectedItem.id,
      text: selectedItem.pl,
    };

    this.gameList.push(engWord);
    this.gameList.push(plWord);
  }

},

mixElements(array) {
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
},

clickFunction() {
  for (let i = 0; i < this.gameList.length; i++) {
    let field = document.createElement("div");
    field.classList.add("game-field");
    this.gameBoard.appendChild(field);

    //field.dataset.cardType = gameList[i];
    field.dataset.wordId = this.gameList[i].id;
    field.dataset.fieldId = i + 1;
    field.dataset.text = this.gameList[i].text;
  }
  let elements = Array.from(document.querySelectorAll(".game-field"));

  for (let element of elements) {
    element.addEventListener("click", (e) => {
      element.style.backgroundColor = "white";
      element.innerHTML = element.dataset.text;
      this.clickedFieldsId.push(Number(element.dataset.fieldId));
      this.clickedWordsId.push(Number(element.dataset.wordId));

      if (
        this.clickedFieldsId.length === 2 &&
       this.clickedFieldsId[0] !== this.clickedFieldsId[1] &&
        this.clickedWordsId.length === 2 &&
        this.clickedWordsId[0] === this.clickedWordsId[1]
      ) {

        setTimeout(()=>{
        elements[this.clickedFieldsId[0] - 1].style.visibility = "hidden";
        elements[this.clickedFieldsId[1] - 1].style.visibility = "hidden";

       this.clickedFieldsId.splice(0, 2);
        this.clickedWordsId.splice(0, 2);
        this.score++;

        if(this.score ===10){
      
         this.memoryModal.style.display = "flex";
        }
      
        this.htmlScore.innerHTML = this.score;},500)
      } else if (
        this.clickedWordsId.length === 2 &&
        this.clickedWordsId[0] !== this.clickedWordsId[1]
      ) {
        setTimeout(() => {
          
          elements[this.clickedFieldsId[0] - 1].style.backgroundColor = " rgb(248, 171, 219)";
          elements[this.clickedFieldsId[1] - 1].style.backgroundColor = " rgb(248, 171, 219)";
          elements[this.clickedFieldsId[0] - 1].innerHTML = "";
          elements[this.clickedFieldsId[1] - 1].innerHTML = "";
          
        this.clickedFieldsId.splice(0, 2);
        this.clickedWordsId.splice(0, 2);
        }, 500);

      } else if (
        this.clickedFieldsId.length === 2 &&
        this.clickedFieldsId[0] == this.clickedFieldsId[1]
      ) {
        element.style.backgroundColor = " rgb(248, 171, 219)";
        element.innerHTML = "";
        this.clickedFieldsId.splice(0, 2);
        this.clickedWordsId.splice(0, 2);
      }
     

      
    });
  }
 
}
}










