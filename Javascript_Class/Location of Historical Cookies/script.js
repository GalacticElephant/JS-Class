$(function () {
  $("button.buttonLocation").click(function (e) { 
    location.assign("http://127.0.0.1:8080/locationDemo/");
  });
  $("button.buttonHistory").click(function (e) { 
    location.assign("http://127.0.0.1:8080/historyDemo/");
  });
  $("button.buttonCookie").click(function (e) { 
    location.assign("http://127.0.0.1:8080/cookieDemo/");
  });
});