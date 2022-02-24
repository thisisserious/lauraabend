$(function () {
    let darkModeOn = false;
    const darkModeString = "Dark mode is";
    const onString = "on";
    const offString = "off";

    $("input").on("click", function() {
      if (!darkModeOn) {
        darkModeOn = true;
        $(".dark-mode-status").text(darkModeString + " " + onString);
        $("body, a").addClass("dark-mode-on");
      } else {
        darkModeOn = false;
        $(".dark-mode-status").text(darkModeString + " " + offString);
        $("body, a").removeClass("dark-mode-on");
      }
    });

    const fullYear = new Date().getFullYear();
    $(".year").text(fullYear);
  });  