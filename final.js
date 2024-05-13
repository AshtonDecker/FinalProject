const questions = [
    {
      question: "How old is Adam Sandler?",
      choices: ["57", "59", "60", "230 (Bro needs a dentist)"],
      correctAnswer: "57"
    },
    {
      question: "What is the best time for a dentist appointment?",
      choices: ["Toothhurty", "2:30", "Too-30", "Two-thurt-tee?"],
      correctAnswer: "Toothhurty"
    },
    {
      question: "Who is the richest in the world?",
      choices: ["Elon Musk", "Bernard Arnault", "My Dentist", "Jeff Bezos"],
      correctAnswer: "Bernard Arnault"
    },

    {
        question: "Who made the song 'Fellas in Paris'?",
        choices: ["Lil Pump", "O.D. (Oliver Delaney)", "Kanye & Jay-Z", "Adele"],
        correctAnswer: "Kanye & Jay-Z"
    },

    {
        question: "'I love you like a fat kid loves cake'. Which rapper said this line?",
        choices: ["Drake", "50 Cent", "Kanye West", "Jackson Harrison"],
        correctAnswer: "50 Cent"
    },
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  function displayQuestion() {
    const questionElement = document.getElementById("question");
    const choicesElement = document.getElementById("choices");
  
    questionElement.innerHTML = questions[currentQuestion].question;
  
    choicesElement.innerHTML = "";
    questions[currentQuestion].choices.forEach(choice => {
      const button = document.createElement("button");
      button.innerHTML = choice;
      button.onclick = () => checkAnswer(choice);
      choicesElement.appendChild(button);
    });
  }
  
  function checkAnswer(choice) {
    if (choice === questions[currentQuestion].correctAnswer) {
      score++;
      document.getElementById("result").innerHTML = "Correct!";
    } else {
      document.getElementById("result").innerHTML = "Incorrect!";
    }
  }
  
  function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < 5) {
      displayQuestion();
      document.getElementById("result").innerHTML = "";
    } else {
      document.getElementById("question").innerHTML = "Quiz Completed!";
      document.getElementById("choices").innerHTML = `Your score is ${score} out of ${questions.length}`;
      document.getElementById("result").innerHTML = "";
    }
  }

//   function restartIt(){
//     if (currentQuestion > questions.length) {
        
//     }

//   }

  function restartQuiz() {
    if (currentQuestion > questions.length) {
        
    }
  }
  
  displayQuestion();
  
  document.getElementById('restartButton').addEventListener('click', function() {
    // Reload the page to go back to the original state
    window.location.reload();
  });

  button.classList.remove('correct', 'incorrect');