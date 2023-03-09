window.onload = function () {
  document.getElementById("start-memory").addEventListener("click", (e)=> init(e));
};
let gameList = [];
const gameBoard = document.querySelector(".game-board");
let clickedFieldsId = [];
let clickedWordsId = [];
let htmlScore = document.querySelector(".score");
let score = 0;
const scoreArray =[];
const memoryModal = document.querySelector(".memory-modal")
const menuButton =  document.getElementById("menu-button")
const playAgainButton = document.getElementById("play-again-button");


menuButton.addEventListener("click", function(){
  window.location.replace("http://127.0.0.1:5500/index.html");
}
);

playAgainButton.addEventListener("click", (e)=> {
  score=0;
  init(e);
  memoryModal.style.display = "none";

}

  );





function init() {
  startGame();
  getRandomWords();
  mixElements(gameList);
  clickFunction();

}

const dictionary = [
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
];

document.getElementById("start-memory").addEventListener("click", (e)=> startGame(e));

function startGame (){
  gameBoard.innerHTML = "";
  htmlScore.innerHTML = 0;
  gameList=[]

}

function getRandomWords() {
  let wordsList = dictionary;
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

    gameList.push(engWord);
    gameList.push(plWord);
  }
  console.log(gameList);
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

function clickFunction() {
  for (let i = 0; i < gameList.length; i++) {
    let field = document.createElement("div");
    field.classList.add("game-field");
    gameBoard.appendChild(field);

    //field.dataset.cardType = gameList[i];
    field.dataset.wordId = gameList[i].id;
    field.dataset.fieldId = i + 1;
    field.dataset.text = gameList[i].text;
  }
  let elements = Array.from(document.querySelectorAll(".game-field"));

  for (let element of elements) {
    element.addEventListener("click", (e) => {
      element.style.backgroundColor = "white";
      element.innerHTML = element.dataset.text;
      clickedFieldsId.push(Number(element.dataset.fieldId));
      clickedWordsId.push(Number(element.dataset.wordId));

      if (
        clickedFieldsId.length === 2 &&
        clickedFieldsId[0] !== clickedFieldsId[1] &&
        clickedWordsId.length === 2 &&
        clickedWordsId[0] === clickedWordsId[1]
      ) {

        setTimeout(()=>{
        elements[clickedFieldsId[0] - 1].style.visibility = "hidden";
        elements[clickedFieldsId[1] - 1].style.visibility = "hidden";

        clickedFieldsId.splice(0, 2);
        clickedWordsId.splice(0, 2);
        score++;

        if(score ===10){
      
          memoryModal.style.display = "flex";
        }
      
        htmlScore.innerHTML = score;},500)
      } else if (
        clickedWordsId.length === 2 &&
        clickedWordsId[0] !== clickedWordsId[1]
      ) {
        setTimeout(() => {
          
          elements[clickedFieldsId[0] - 1].style.backgroundColor = " rgb(248, 171, 219)";
          elements[clickedFieldsId[1] - 1].style.backgroundColor = " rgb(248, 171, 219)";
          elements[clickedFieldsId[0] - 1].innerHTML = "";
          elements[clickedFieldsId[1] - 1].innerHTML = "";
          
        clickedFieldsId.splice(0, 2);
        clickedWordsId.splice(0, 2);
        }, 500);

      } else if (
        clickedFieldsId.length === 2 &&
        clickedFieldsId[0] == clickedFieldsId[1]
      ) {
        element.style.backgroundColor = " rgb(248, 171, 219)";
        element.innerHTML = "";
        clickedFieldsId.splice(0, 2);
        clickedWordsId.splice(0, 2);
      }
      console.log(score);

      
    });
  }
 
}






