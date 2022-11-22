$(document).ready(function () {
  $(".chairs").click(function (e) {
    e.preventDefault();
    const chairSrc = $(this).children("img").attr("src");

    $("#mainImage").attr("src", chairSrc);
    $("#mainImage").css({ width: "650px", height: "600px" });
  });

  $("#specialLetterForm").submit(function (e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    const inputValue = $("#specialLetterInput").val();
    $("#alertId").removeClass("d-none");
    $("#alertId")
      .children("p")
      .html(
        `Terima Kasih <strong>${inputValue}</strong>, link sudah dapat dilihat di email anda.`
      );
  });

  $("#closeAlert").click(function (e) {
    e.preventDefault();
    $("#alertId").addClass("d-none");
  });
});
