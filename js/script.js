// Acc
$(document).on("click", ".tabs .menu div", function() {
    var numberIndex = $(this).index();

    if (!$(this).is("active")) {
        $(".tabs .menu div").removeClass("active");
        $(".tabs ul li").removeClass("active");

        $(this).addClass("active");
        $(".tabs ul").find("li:eq(" + numberIndex + ")").addClass("active");

        var listItemHeight = $(".tabs ul")
            .find("li:eq(" + numberIndex + ")")
            .innerHeight();
        $(".tabs ul").height(listItemHeight + "px");
    }
});