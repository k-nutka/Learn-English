window.onload = function(){
    init();

};


function init(){
    getRandomWords();

}



const dictionary = 
    [
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
]

const gameList = [];



function getRandomWords() {
    let wordsList = dictionary ;
    for(i=0; i<10; i++){
        let selectedItem = wordsList[Math.floor(Math.random()*wordsList.length)];
        wordsList = wordsList.filter(x => x.id != selectedItem.id);//lista bez wyselekcjonowanych 

        const engWord = {
            id: selectedItem.id,
            text: selectedItem.eng
        }

        const plWord = {
            id:selectedItem.id,
            text: selectedItem.pl
        }

        gameList.push(engWord);
        gameList.push(plWord);
        }
        console.log(gameList);
    }





       
       
    









