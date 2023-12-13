$(document).ready(function () {
  $("#historyLength").text(`History is currently ${history.length} items long`);

  $("button.buttonBack").click(function (e) { 
    history.back();
  });
  $("button.buttonForward").click(function(e) {
    history.forward();
  });
  $("button.buttonGo").click(function(e) {
    let numPages = $("#textGo").val();
    console.log(numPages);
    history.go(parseInt($("#textGo").val()));
  });
});