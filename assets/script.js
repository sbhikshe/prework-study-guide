
var topics = ["HTML", "CSS", "Git", "JavaScript"];
function listTopics() {
    for (var x = 0; x < topics.length; x++)
    console.log(topics[x]);
}
/* Math.random() generates a number between 0 and 1
    times topics.length can generate a max < topics.length
    Math.floor() produces the largest integer less than that result.
    Doesn't round up, rather rounding down */

var random = Math.random() * topics.length;
//console.log(random);
random = Math.floor(random);
//console.log(random);
var randomTopic = topics[random];
function selectTopic() {
    if (randomTopic === "HTML") {
        console.log("Let's study HTML");
    } else if (randomTopic === "CSS"){
        console.log("Let's study CSS");
    } else if (randomTopic === "Git"){
        console.log("Let's study Git");
    } else if (randomTopic === "JavaScript"){
        console.log("Let's study JavaScript");
    } else {
        console.log("Please try again");
    }
}

console.log("Here are the topics we learned through pre-work:")
listTopics();

console.log("Which topic should we study first?")
selectTopic();



