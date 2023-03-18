window.onload = function () {
  console.log("Start");
  init();
};

function init() {
  document
    .getElementById("next")
    .addEventListener("click", (e) => app.nextQuestion(e));
  document
    .getElementById("again")
    .addEventListener("click", (e) => app.tryAgain(e));
  const checkButtons = Array.from(document.querySelectorAll(".check"));

  for (let checkButton of checkButtons) {
    checkButton.addEventListener("click", (e) =>
      app.check(Number(e.target.dataset.id))
    );
  }

  
}

const app = {
  
  inputs: document.querySelectorAll("input"),
  sentences: Array.from(document.querySelectorAll(".sentence")),
  index: 0,
  words:["across", "against", "among", "below", "Besides", "beyond", "except", "of", "towards", "within"],

  resultModal: document.getElementById("result-modal"),
  resultInformation: document.getElementById("result-information"),
  nextButton: document.getElementById("next"),
  againButton: document.getElementById("again"),
  result: 0,

  correctAnswer() {
    this.resultModal.style.display = "flex";
    this.resultModal.style.borderColor = "#8fe565";
    this.resultInformation.innerHTML = "Excellent!";
    this.resultInformation.style.color = "#8fe565";
    this.nextButton.style.backgroundColor = "#c4fcc2";
    this.nextButton.style.borderColor = " #60f8b1";
    this.result++;
  },

  inCorrectAnswer(answer) {
    this.resultModal.style.display = "flex";
    this.resultModal.style.borderColor = "#f38484";
    this.resultInformation.innerHTML = `Incorrect!!!<br>Correct answer is: ${answer}`;
    this.resultInformation.style.color = "#ed4242";
    this.nextButton.style.backgroundColor = "#f38484";
    this.nextButton.style.borderColor = "#ed4242";
  },

  check(id) {
    const input = document.querySelector(`[data-id="${id}"]`);

    if(input.value ===""){
        input.style.borderColor = "blue"
       
    }

    else if((input.value).trim()=== this.words[id-1]){
        this.correctAnswer();
       
    }else{
        this.inCorrectAnswer(this.words[id-1]);
        
    }},
    nextQuestion() {
    this.resultModal.style.display = "none";
    this.index++;
    if (this.index < 10) {
      this.sentences[this.index - 1].setAttribute("hidden", "hidden");
      this.sentences[this.index].removeAttribute("hidden");
    } else if (this.index === 10) {
      this.resultModal.style.display = "flex";
      this.resultInformation.innerHTML = `You got ${this.result}/10 correct answers`;
      this.nextButton.setAttribute("hidden", "hidden");
      this.againButton.removeAttribute("hidden");
    }
  },

  tryAgain() {
    this.resultModal.style.display = "none";
    this.sentences[this.sentences.length - 1].setAttribute("hidden", "hidden");
    this.sentences[0].removeAttribute("hidden");
    this.againButton.setAttribute("hidden", "hidden");
    this.nextButton.removeAttribute("hidden");

    for (let input of this.inputs) {
      input.value = "";
    }

    this.result = 0;
    this.index = 0;
  },
};
