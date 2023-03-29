window.onload = function () {
  init();
  
};


function init(){
  app.makePage();
  app.nextButton.addEventListener("click", (e) => app.nextSentence(e));
  app.checkButton.addEventListener("click", (e) => app.checkSentence(e));
  again.addEventListener("click", function(){
    location.reload()});
  
  back.addEventListener("click", function(){ 
    window.location.replace("http://127.0.0.1:5500/index.html")
  
  })
  

}

const app = {
  sentences: [
    {
      id: 1,
      toTranslate: "Ona stoi przy oknie",
      afterTranslate: "She is standing at the window",
    },

    {
      id: 2,
      toTranslate: "Nie ma nikogo za Tobą",
      afterTranslate: "There is nobody behind you",
    },

    {
      id: 3,
      toTranslate: "To lekarstwo jest na ból głowy",
      afterTranslate: "This medicine is for a headache",
    },
    {
      id: 4,
      toTranslate: "He has just come back from holidays",
      afterTranslate: "On właśnie wrócił z wakacji",
    },
    {
      id: 5,
      toTranslate: "Don't let the dog come inside the house",
      afterTranslate: "Nie wpuszczaj psa do domu",
    },
    {
      id: 6,
      toTranslate: "Where have they been over the last week",
      afterTranslate: "Gdzie oni byli przez ostatni tydzień",
    },
  ],

  orginalSentence: document.getElementById("sentence-to-translate"),
  userSentence: document.getElementById("sentence-by-user"),
  result: document.getElementById("result"),
  resultInfo: document.getElementById("show-result"),
  nextButton: document.getElementById("next"),
  checkButton: document.getElementById("check"),
  translateField: document.querySelector("after-traslate"),
  modal: document.querySelector(".modal-show-result"),
  orginalIndex: 0,
  newSentenceIndex: 0,
  score: 0,
  nextClik: 0,
  againButton:document.getElementById("again"),
  backButton:document.getElementById("back"),

  makePage() {
    let newSentences = this.sentences;
    this.orginalSentence.innerHTML =
      newSentences[this.newSentenceIndex].toTranslate;
    this.userSentence.value = "";

  },

  nextSentence() {
    
    
    this.orginalIndex++;
    this.newSentenceIndex++;
    this.nextClik++;

    console.log(this.score);
    this.result.setAttribute("hidden", "hidden");
  

    if (this.nextClik === this.sentences.length) {
      this.modal.style.display = "flex";
      console.log(this.score);
      this.resultInfo.innerHTML = `You got ${this.score}/6 correct answers`;
    }

    this.makePage();
    this.checkButton.removeAttribute("disabled");
    this.nextButton.setAttribute("disabled", "disabled");
  },
  checkSentence() {
    let newSentences = this.sentences;

    this.nextButton.removeAttribute("disabled");
    this.checkButton.setAttribute("disabled", "disabled");


    if (this.userSentence.value === "") {
      this.result.removeAttribute("hidden");
      this.result.innerHTML = "Complete the field!!";
      this.checkButton.removeAttribute("disabled");
      this.nextButton.setAttribute("disabled", "disabled");

    } else if (
      this.userSentence.value ===
      newSentences[this.newSentenceIndex].afterTranslate
    ) {
      this.result.removeAttribute("hidden");
      this.result.innerHTML = "Great!!!";
      this.result.style.color = "#69b70e";
      this.score++;
    } else if (
      this.userSentence.value !==
      newSentences[this.newSentenceIndex].afterTranslate
    ) {
      this.result.removeAttribute("hidden");
      this.result.innerHTML = `Inncorect!!!<br> Correct answer is: ${
        newSentences[this.newSentenceIndex].afterTranslate
      }`;
      this.result.style.color = "red";
    }
  },
};
