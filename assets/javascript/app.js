// create an object with quiz questions
var quizQuestions = [{
    q1: {
        question: "Who is the painter responsible for the famous Mona Lisa?";
        answers: {
            a: "Leonardo Di Caprio";
            b: "Vincent Van Gogh";
            c: "Michaelangelo";
            d: "Leondardo Da Vinci";
        }
        correct: "d";
    },
    q2: {
        question: "Salvador Dali is famous for ushering in what artistic movement?";
        answers: {
            a: "Realism";
            b: "Surrealism";
            c: "Cubism";
            d: "Vandalism";
        }
        correct: "b";
    },
    q3: {
        question: "Which artist is famous for the self-portrait of himself in which he has a bandaged ear?";
        answers: {
            a: "Vincent Van Gogh";
            b: "Pablo Picasso";
            c: "John Lennon";
            d: "Georgia O' Keefe";
        }
        correct: "a";
    },
    q4: {
        question: "Andy Warhol is known for his use of...";
        answers: {
            a: "Vivid, high contrast colors";
            b: "Subject matters from pop culture";
            c: "Repitition and patterns";
            d: "All of the above";
        }
        correct: "d";

    },
    q5: {
        question: "True or false: MC Escher was a dutch rapper who dropped sick beats in the clubs before discovering his love for mathematically inspired art."
        answers: {
            a: "True";
            b: "False";
        }
        correct: "b";
    }
}];

// create a function to dynamically populate "quiz" div with quiz questions (randomly?)
function makeQuiz () {

    // loop through the quizQuestions object to populate the questions DIV
    for (i=0; i < quizQuestions.length; i++) {
        $("#questions").

    }
}

// code