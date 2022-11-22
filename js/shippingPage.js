$(document).ready(function () {
  $("#formShipping").submit(function (e) {
    e.preventDefault();
    $("#card").removeClass("d-none");
    $("form").addClass("d-none");
    $("#cardTitle").html(
      `Terima Kasih, ${$("#firstName").val()} ${$("#lastName").val()}`
    );
    $("#cardText").html(
      `Paket akan dikirim ke ${$("#shippingAddress").val()} secepatnya.`
    );
  });
});
