//document.ready
$(document).ready(function () { 

// create an array w/ objects for quiz questions & answers
var quizQuestions = [{
        q: 'Who is the painter responsible for the famous Mona Lisa?',
        answers: [
            'Leonardo Di Caprio',
            'Vincent Van Gogh',
            'Michaelangelo',
            'Leondardo Da Vinci',
        ],
        correct: 'Leonardo Da Vinci'
    },
    {   q: 'Salvador Dali is famous for ushering in what artistic movement?',
        answers: [
            'Realism',
            'Surrealism',
            'Cubism',
            'Vandalism',
        ],
        correct: 'Surrealism'
    },
    {   q: 'Which artist is famous for the self-portrait of himself in which he has a bandaged ear?',
        answers: [
            'Vincent Van Gogh',
            'Pablo Picasso',
            'John Lennon',
            'Claude Monet',
        ],
        correct: 'Vincent Van Gogh'
    },
    {   q: 'Andy Warhol is known for his use of...',
        answers: [
            'Vivid, high contrast colors',
            'Subject matters from pop culture',
            'Repitition and patterns',
            'All of the above',
        ],
        correct: 'All of the above'

    },
    {   q: 'True or false: MC Escher was a dutch rapper who dropped sick beats in the clubs before discovering his love for mathematically inspired art.',
        answers: [
            'True',
            'False',
        ],
        correct: 'False'
    }
];

// console log to test array (make sure it's coded properly)
console.log(quizQuestions[1]);
console.log(quizQuestions[0].answers[0]);
console.log(quizQuestions[2].answers[1]);

// create a function to dynamically populate 'quiz' div with quiz questions (randomly?)
function makeQuiz () {
    // loop through the quizQuestions object to populate the questions DIV
    for (var i=0; i < quizQuestions.length; i++) {
        $('#questions').append('<div class="question" id="q' + i +'"></div>');
        $('#q'+i).append('<h3>' + quizQuestions[i].q + '</h3>');
        // loop to append each individual answer
        for (var j=0; j < quizQuestions[i].answers.length ; j++) {
        $('#q'+i).append('<input type="radio" value="' + quizQuestions[i].answers[j] + '" name="' + quizQuestions[i].answers[i] + '" />' + '<label>' + quizQuestions[i].answers[j] + '</label>' + ' ');
        }

    }
}

makeQuiz();

// declare variable "intervalID"
var intervalID;
// 60 seconds time declared as a variable
var seconds = 60;
// create timer function for a minute
function timer() {
    clearInterval(intervalID);
    intervalID = setInterval(decrement, 1000);
}
function decrement(){
        seconds--;
        $("#timer").html(seconds);
        if (seconds === 0) {
            clearInterval(intervalID);
            alert("Time's up!");
            checkScore();
            displayScore();
        }
}

// run timer
timer();

// create method to compare selected answers to correct answers
var selectedAns;
//declare score variables
var correct = 0;
var incorrect = 0;

function checkScore () {
for (var l=0; l < quizQuestions.length; l++){
    selectedAns = $("input[name='"+quizQuestions[l].answers[l]+"']:checked").val();
        // if statement to compare selected w/ answr
        if (selectedAns === quizQuestions[l].correct) {
            correct++;
        } else {
            incorrect++;
        }
    console.log(correct);
    console.log(incorrect);
}
}

// function to display the score when it's tallied
function displayScore () {
    // hide the questions and timer
    $('#questions').hide();
    $('#timer').hide();

    // create DIV to display 
    var scoreDiv = $('<div id="score"></div>');
    $("#mainBody").append(scoreDiv);
    // populate scoreDiv with score text
    $(scoreDiv).append('<p><b>Correct:</b> '+correct+'</p><p><b>Incorrect:</b> '+incorrect+'</p>');

    // create reset button
    var resetButton = $(scoreDiv).append('<button type="button">Reset</button>');
    // reset button hides scores, resets variables, and show questions
    $("button").on("click", function(){
        $('#questions').show();
        $('#timer').show();
        $(scoreDiv).hide();
        correct = 0;
        incorrect = 0;
        // runs the timer again
        seconds = 60;
        timer();
    });

}

// close doc.ready
});