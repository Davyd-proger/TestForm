$(document).ready(function() {
    $("#work").hide();
    $("#contact").hide();
    $(".icon__home").click(function() {
        $("#home").show();
        $("#work").hide()
        $("#contact").hide()

    });
    $(".icon__folder").click(function() {
        $("#home").hide();
        $("#work").show()
        $("#contact").hide()

    });
    $(".jumplink").click(function() {
        $("#home").hide();
        $("#work").show()
        $("#contact").hide()

    });
    $(".icon__envelope").click(function() {
        $("#home").hide();
        $("#work").hide()
        $("#contact").show()

    });
});