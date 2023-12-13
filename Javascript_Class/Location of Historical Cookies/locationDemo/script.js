$(document).ready(function () {
  $("#textHost").val(location.host);
  $("#textHostname").val(location.hostname);
  $("#textPort").val(location.port);
  $("#textHref").val(location.href);
  $("#textProtocol").val(location.protocol);
  $("#textSearch").val(location.search);

  $("button.buttonAssign").click(function (e) { 
    location.assign("http://127.0.0.1:8080/locationDemo/#bottom");
  });
  $("button.buttonReload").click(function(e) {
    location.reload();
  });
  $("button.buttonReplace").click(function(e) {
    location.replace("http://127.0.0.1:8080");
  });

  $("#bottom>h3:first").click( function(e) {
    const queryParams = new URLSearchParams(location.search);

    $(this).text(`arg1 : ${queryParams.get('arg1')} & arg2 : ${queryParams.get('arg2')}`);
  });
});