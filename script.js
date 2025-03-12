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

//zmienna przechowujaca aktualny progres quizu
const quizProgress = document.getElementById("quizProgress");
//zmienna przechowujaca tresc i temat pytania
const questionContainer = document.getElementById("questionContainer");
//zmienna przechowujaca odpowiedzi do pytania
const answerContainer = document.getElementById("answerContainer");
//zmienna przechowujaca obecny index pytania
let currentQuestionIndex = 0;

function handleQuestion(index){

   //handling sekcji progresu quizu
   quizProgress.innerHTML = "";
   questions.forEach((question) => {  
      quizProgress.innerHTML += "<span></span>";
   });
   /*zmienna przechowujaca wartosc wszystkich tagow <span> dla kontenerow o id = quizProgress*/
   let spans = document.querySelectorAll("#quizProgress span");
   /*dla aktywnego indexu pytania dodaje klase "seen" czyli widziane juz przez nas pytanie*/
   for(let i = 0; i <= index; i++){
      spans[i].classList.add("seen");
   }

   //wyswietlanie aktualnego tematu/pytania
   questionContainer.innerHTML = 
   /*interpolacja stringow wyswietlajacych 
   pytanie/temat (uzywamy ` backtickow!! a nie ' apostrofow)*/
   `
   <p>${questions[index].topic}</p>
   <p>${questions[index].question}</p>
   `;

   //wyswietlanie mozliwych odpowiedzi
   answerContainer.innerHTML = "";
   questions[index].possibleAnswers.forEach((answer) => {
      answerContainer.innerHTML += `<button>${answer}</button>`;
   });
   let answers = document.querySelectorAll("#answerContainer button");
   answers.forEach((answer) => {
      answer.addEventListener("click", (e) => {
         if(e.target.textContent === questions[index].correctAnswer){
            console.log("poprawna odpowiedz");
         }
         else{
            console.log("zla odpowiedz");
         }
         if(currentQuestionIndex === questions.length - 1){
            currentQuestionIndex = 0;
         }
         else{
            currentQuestionIndex++;
         }
         handleQuestion(currentQuestionIndex);
      });
   });
}
handleQuestion(currentQuestionIndex);

//segment do zmiany motywu
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
