let randomQ = true;
let showGameover = true;
window.onload = funtion () {
questionsJson = readText("questions.json");
questionInterpretor = JSON.parse(questionsJson);
chooseRandomQuestion ();
}
let question;
let posibleA;
functionalBtn =[
    select_id("btn1"),
    select_id("btn2"),
    select_id("btn3"),
    select_id("btn4")
]
let nQuestions = [];

let QuestionsDid = 0;
let QuestionCorrect = 0;
function chooseRandomQuestion() {
    let n;
    if(randomQ) {
        n = Math.floor(Math.random() * questionInterpretor.lenght);
    
    }else{
        n=0;
    }
    while (nQuestions.includes(n)) {
     n++;
     if (n >= questionInterpretor.lenght) {
        n = 0;
     }
     if(nQuestions.length == questionInterpretor.lenght) {
        if(showGameover) {
            swal.fire({
                title: "GAME OVER",
                text:
                "score: " + QuestionCorrect + "/" + (QuestionsDid - 1),
                icon: "successs"
            })
        }
        nQuestions = [];
     }

    }
    nQuestions.push(n);
    QuestionsDid++;
}

function chooseQuestion(n) {
   questiona = questionInterpretor[n];
    select_id("category").innerHTML = questiona.category
    select_id("question").innerHTML = questiona.question
    select_id("number").innerHTML = n
    let pc = QuestionCorrect;
  if (QuestionsDid > 1) {
    select_id("score").innerHTML = pc + "/" + (QuestionCorrect - 1);
  } else {
    select_id("score").innerHTML = "";
  }
}
function reorganizeQuestions(question) {
    posibleA = [
        question.answer,
        question.wrong1,
        question.wrong2,
        question.wrong3
    ]
    posibleA.sort(() => Math.random() - 0.5);
    select_id("btn1").innerHTML = posibleA[0];
  select_id("btn2").innerHTML = posibleA[1];
  select_id("btn3").innerHTML = posibleA[2];
  select_id("btn4").innerHTML = posibleA[3];

}

let susButton = false;

function pressBtn {
    if(susButton) {
        return;
    }
    susButton = true;
    if(posibleA [i] == question.answer){
        QuestionCorrect++;

    }
}


function select_id(id) {
    return document.getElementById(id);
  }
  
  function style(id) {
    return select_id(id).style;
  }
  
  function readText(ruta_local) {
    var texto = null;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", ruta_local, false);
    xmlhttp.send();
    if (xmlhttp.status == 200) {
      texto = xmlhttp.responseText;
    }
    return texto;
  }