//document.ready
$(document).ready(function () { 

// create an object with quiz questions & answers
var quizQuestions = [{
        q: 'Who is the painter responsible for the famous Mona Lisa?',
        answers: [
            'Leonardo Di Caprio',
            'Vincent Van Gogh',
            'Michaelangelo',
            'Leondardo Da Vinci',
        ],
        correct: 'd'
    },
    {   q: 'Salvador Dali is famous for ushering in what artistic movement?',
        answers: [
            'Realism',
            'Surrealism',
            'Cubism',
            'Vandalism',
        ],
        correct: 'b'
    },
    {   q: 'Which artist is famous for the self-portrait of himself in which he has a bandaged ear?',
        answers: [
            'Vincent Van Gogh',
            'Pablo Picasso',
            'John Lennon',
            'Claude Monet',
        ],
        correct: 'a'
    },
    {   q: 'Andy Warhol is known for his use of...',
        answers: [
            'Vivid, high contrast colors',
            'Subject matters from pop culture',
            'Repitition and patterns',
            'All of the above',
        ],
        correct: 'd'

    },
    {   q: 'True or false: MC Escher was a dutch rapper who dropped sick beats in the clubs before discovering his love for mathematically inspired art.',
        answers: [
            'True',
            'False',
        ],
        correct: 'b'
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
        $('#q'+i).append('<input type="radio" value="' + quizQuestions[i].answers[j] + '" name=" ' + quizQuestions[i].answers[i] + ' " />' + '<label>' + quizQuestions[i].answers[j] + '</label>' + ' ');
        }

    }
}

makeQuiz();

// close doc.ready
});