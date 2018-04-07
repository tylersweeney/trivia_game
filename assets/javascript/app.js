var panel = $("#quiz-area");
// Question set
var questions = [{
  question: "A soldier from Earth crashlands on an alien world after sustaining battle damage. Eventually, he encounters another survivor, but from the enemy species he was fighting.",
  answers: ["The Last Star Fighter", "Enemy Mine", "Toy Story", "Return of the Jedi"],
  correctAnswer: "Enemy Mine"
}, {
  question: "A seemingly indestructible Android is sent from 2029 to 1984 to assassinate a waitress, whose unborn son will lead humanity in a war against the machines, while a soldier from that war is sent to protect her at all cost",
  answers: ["Back to the Future", "The Exterminator", "When Harry Met Sally", "The Terminator"],
  correctAnswer: "The Terminator"
}, {
  question: "A drifter discovers a pair of sunglasses that allow him to wake up to the fact that aliens have taken over the Earth.",
  answers: ["Ferrib Bueller's Day Off", "They Live", "These Glasses Allow me to See Aliens", "They Don't Live"],
  correctAnswer: "They Live"
}, {
  question: "In 1997, when the U.S. president crashes into Manhattan, now a giant maximum security prison, a convicted bank robber is sent in to rescue him.",
  answers: ["Escape from New York", "Send The Backstreet Boys", "Escape from L.A.", "Mrs. Doubtfire"],
  correctAnswer: "Escape from New York"
}, {
  question: "A crew in Antarctica finds a neighboring camp destroyed and its crew dead. Whatever killed them is nowhere to be found, unless it's hidden in plain sight.",
  answers: ["The Thing", "The IT", "Mulan", "The Wedding Singer"],
  correctAnswer: "The Thing"
}, {
  question: "A 17-year-old high school student, is accidentally sent thirty years into the past in a time-traveling DeLorean ",
  answers: ["A Kid in King Arthur's Court", "Rick and Morty", "Back to the Future", "Buffy the Vampire Slayer in Time"],
  correctAnswer: "Back to the Future"
}, {
  question: "An All-American trucker gets dragged into a centuries-old mystical battle in Chinatown.",
  answers: ["Overboard", "Big Trouble in Little China", "The Odd Couple", "Rumble in the Bronx"],
  correctAnswer: "Big Trouble in Little China"
}, {
  question: "A computer hacker is abducted into the digital world and forced to participate in gladiatorial games where his only chance of escape is with the help of a heroic security program.",
  answers: ["The Labyrinth", "Hackerman", "JON", "TRON"],
  correctAnswer: "TRON"
}];
// set interval
var timer;
var game = {
  correct: 0,
  incorrect: 0,
  counter: 120,
  countdown: function() {
    game.counter--;
    $("#counter-number").html(game.counter);
    if (game.counter === 0) {
      console.log("TIME UP");
      game.done();
    }
  },
  start: function() {
    timer = setInterval(game.countdown, 1000);
    $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>120</span> Seconds</h2>");
    $("#start").remove();
    for (var i = 0; i < questions.length; i++) {
      panel.append("<h2>" + questions[i].question + "</h2>");
      for (var j = 0; j < questions[i].answers.length; j++) {
        panel.append("<input type='radio' name='question-" + i +
        "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
      }
    }
    panel.append("<button id='done'>Done</button>");
  },
  done: function() {
    $.each($("input[name='question-0']:checked"), function() {
      if ($(this).val() === questions[0].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-1']:checked"), function() {
      if ($(this).val() === questions[1].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-2']:checked"), function() {
      if ($(this).val() === questions[2].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-3']:checked"), function() {
      if ($(this).val() === questions[3].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-4']:checked"), function() {
      if ($(this).val() === questions[4].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-5']:checked"), function() {
      if ($(this).val() === questions[5].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-6']:checked"), function() {
      if ($(this).val() === questions[6].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-7']:checked"), function() {
      if ($(this).val() === questions[7].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    this.result();
  },
  result: function() {
    clearInterval(timer);
    $("#sub-wrapper h2").remove();
    panel.html("<h2>All Done!</h2>");
    panel.append("<h3>Correct Answers: " + this.correct + "</h3>");
    panel.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
    panel.append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
  }
};
// CLICK EVENTS
$(document).on("click", "#start", function() {
  game.start();
});
$(document).on("click", "#done", function() {
  game.done();
});