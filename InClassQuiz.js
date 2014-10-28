//Dalton James, Dalton_James@student.uml.edu   
//and 
//Kyle White, Kyle_White@student.uml.edu
//    
//File: InClassQuiz.js
//Created: 10/28/2014
//   
//Description: takes user input and outputs a pass or fail message 

$(document).ready(function () {

  //whats to do when hitting submit
  $("#m-form").submit(function () {
    //forces a hide on both pass and fail before testing which is needed
    $("#p-wrapper p").addClass("hide");

    var inputStr = $("#m-input").val();

    //delays execution so the message flashes if it is the same message
    setTimeout(function () {
      //checks val of textbox against the string 
      //decides which message to show based on input
      (inputStr === "Comments are more important than programming") ? $("#pass").removeClass("hide") : $("#fail").removeClass("hide");
    }, 100);

  });
});
