window.onload = function(){
    console.log("Start");

   
   
    document.getElementById("next").addEventListener("click", (e)=> app.nextQuestion(e));
   

}

const check1 = document.getElementById("check-1").addEventListener("click", (e)=> app.check1(e));
const check2 = document.getElementById("check-2").addEventListener("click", (e)=> app.check2(e));
const check3 = document.getElementById("check-3").addEventListener("click", (e)=> app.check3(e));
const check4 = document.getElementById("check-4").addEventListener("click", (e)=> app.check4(e));
const check5 = document.getElementById("check-5").addEventListener("click", (e)=> app.check5(e));
const check6 = document.getElementById("check-6").addEventListener("click", (e)=> app.check6(e));
const check7 = document.getElementById("check-7").addEventListener("click", (e)=> app.check7(e));
const check8 = document.getElementById("check-8").addEventListener("click", (e)=> app.check8(e));
const check9 = document.getElementById("check-9").addEventListener("click", (e)=> app.check9(e));
const check10 = document.getElementById("check-10").addEventListener("click", (e)=> app.check10(e));






const app = {
input1:document.getElementById("input-1"),
input2:document.getElementById("input-2"),
input3:document.getElementById("input-3"),
input4:document.getElementById("input-4"),
input5:document.getElementById("input-5"),
input6:document.getElementById("input-6"),
input7:document.getElementById("input-7"),
input8:document.getElementById("input-8"),
input9:document.getElementById("input-9"),
input10:document.getElementById("input-10"),
inputs: document.querySelectorAll("input"),
sentences: Array.from(document.querySelectorAll(".sentence")),
index:0,



resultModal: document.getElementById("result-modal"),
resultInformation: document.getElementById("result-information"),
nextButton:document.getElementById("next"),
againButton:document.getElementById("again"),
result:0,

correctAnswer(){
    this.resultModal.style.display ="flex";
    this.resultModal.style.borderColor ="#8fe565";
    this.resultInformation.innerHTML = "Excellent!";
    this.resultInformation.style.color = "";
    this.result++

},

inCorrectAnswer(answer){
        this.resultModal.style.display ="flex";
        this.resultModal.style.borderColor ="#f38484";
        this.resultInformation.innerHTML = `Incorrect!!!<br>Correct answer is: ${answer}`;
        this.resultInformation.style.color = "#ed4242";
        this.nextButton.style.backgroundColor = "#f38484";
        this.nextButton.style.borderColor = "#ed4242"
    

},




check1(){

    if(this.input1.value ===""){
        this.input1.style.borderColor = "blue"
       
    }

    else if((this.input1.value).trim()==="across"){
        this.correctAnswer();
       
    }else{
        this.inCorrectAnswer("across");
        
    }},

check2(){

    
    if(this.input2.value ===""){
        this.input2.style.borderColor = "blue"
    

    }else if((this.input2.value).trim()==="against"){
        this.correctAnswer();
       
    }else{
        this.inCorrectAnswer("against");
        
    }
},

check3(){



    if(this.input3.value ===""){
        this.input3.style.borderColor = "blue"
        
    

    }else if((this.input3.value).trim()==="among"){
        this.correctAnswer();
       
    }else{
        this.inCorrectAnswer("among");
        
    }},

check4(){


    if(this.input4.value ===""){
        this.input4.style.borderColor = "blue"
     
    

    }else if((this.input4.value).trim()==="below"){
        this.correctAnswer();
       
    }else{
        this.inCorrectAnswer("below");
        
    }},
    
check5(){


    if(this.input5.value ===""){
        this.input5.style.borderColor = "blue"
     
    

    }else if((this.input5.value).trim()==="Besides"){
        this.correctAnswer();
       
    }else{
        this.inCorrectAnswer("Besides");
        
    }},
    check6(){


        if(this.input6.value ===""){
            this.input6.style.borderColor = "blue"
         
        
    
        }else if((this.input6.value).trim()==="beyond"){
            this.correctAnswer();
           
        }else{
            this.inCorrectAnswer("beyond");
            
        }},
        check7(){


            if(this.input7.value ===""){
                this.input7.style.borderColor = "blue"
             
            
        
            }else if((this.input7.value).trim()==="except"){
                this.correctAnswer();
               
            }else{
                this.inCorrectAnswer("except");
                
            }},
            
            check8(){


                if(this.input8.value ===""){
                    this.input8.style.borderColor = "blue"
                 
                
            
                }else if((this.input8.value).trim()==="of"){
                    this.correctAnswer();
                   
                }else{
                    this.inCorrectAnswer("of");
                    
                }},
                check9(){


                    if(this.input9.value ===""){
                        this.input9.style.borderColor = "blue"
                     
                    
                
                    }else if((this.input9.value).trim()==="towards"){
                        this.correctAnswer();
                       
                    }else{
                        this.inCorrectAnswer("towards");
                        
                    }},
                    check10(){


                        if(this.input10.value ===""){
                            this.input10.style.borderColor = "blue"
                         
                        
                    
                        }else if((this.input10.value).trim()==="within"){
                            this.correctAnswer();
                           
                        }else{
                            this.inCorrectAnswer("within");
                            
                        }},
                    
                
            
        
    


    




    


nextQuestion(){
    this.resultModal.style.display ="none";
    this.index++
    if(this.index <10 ){
    this.sentences[this.index-1].setAttribute("hidden", "hidden");
    this.sentences[this.index].removeAttribute("hidden");
} else if(this.index ===10){
        this.resultModal.style.display ="flex";
        this.resultInformation.innerHTML = `You got ${this.result}/10 correct answers`;
        this.nextButton.setAttribute("hidden", "hidden");
        this.againButton.removeAttribute("hidden");


    }





}}


