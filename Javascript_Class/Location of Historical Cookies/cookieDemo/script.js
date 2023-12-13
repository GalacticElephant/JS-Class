$(function(){

  let cookieInfo = document.cookie;

  if (cookieInfo === "") {
    $("#textAreaResults").val("No Cookie(s) Set");
  } else {
    // display cookie values
  }

  $(".buttonCreate").click( function(e) {
    let firstName = $("#textFirstName").val();
    let lastName = $("#textLastName").val();
    document.cookie = `firstName=${firstName};path=/;`;
    document.cookie = `lastName=${lastName};path=/;`;
    document.cookie = "randominfo=12345";
  });

  $(".buttonRead").click( function(e) {
    $("#textAreaResults").val(document.cookie.toString());
  });

  $(".buttonDelete").click( function(e) {
    document.cookie = "firstname=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
  });
});