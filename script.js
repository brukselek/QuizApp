function themeColor() {
   //kolor tla dla theme switcher
   var bodyColor = document.body;
   //ikona zmiany tla dla theme switchera
   let icon = document.getElementById("themeIcon");
   //toggle -> przelaczenie aktywnej klasy CSS
bodyColor.classList.toggle("light-mode");
      if(bodyColor.classList.contains("light-mode")) {
         document.getElementById("themeIcon").src = "light_mode.png";
      } else {
         document.getElementById("themeIcon").src = "dark_mode.png";
      }
   }

   //rozpoczecie segmentu QUIZU!

/*tablica zawierajaca obiekty dla pytan do quizu*/
const questions = [
   /*obiekt dla kazdego pytania*/
   {
      //temat pytania
      topic: "Elementy fomularza",
      //tresc pytania
      question: "jakiego typu(input type=?) uzyjemy aby zakropkowac wprowadzone przez uzytkownika dane?",
      //mozliwe odpowiedzi
      possibleAnswers: ["text", "password", "checkbox", "radio"],
      //poprawna odpowiedz
      correctAnswer: "password"
   },
   {
      topic: "Metody formularza",
      question: "ktora metoda przesyla dane NIE jawne dla uzytkownika?",
      possibleAnswers: ["get", "post", "post oraz get"],
      correctAnswer: "post"
   },
   {
      topic: "Zdarzenia formularza",
      question: "Ktore zdarzenie wywoluje sie gdy uzytkownik kliknie na przycisk formularza?",
      possibleAnswers: ["onclick", "onchange", "onfocus"],
      correctAnswer: "onclick"
   }
];

//progres quizu
const quizProgress = document.getElementById("quizProgress");
//tresc pytania
const questionContainer = document.getElementById("questionContainer");
//odpowiedzi
const answerContainer = document.getElementById("answerContainer");

function handleQuestion(){
   questions.forEach(question => {  
      quizProgress.innerHTML += "<span></span>";
   });
}

handleQuestion();