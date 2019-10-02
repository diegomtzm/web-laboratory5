$("form").submit(function(e) {
    e.preventDefault();

    if($("input").val() == "") {
        console.log("Empty item!");
        return;
    }

    let newItem = $("<li>" + $("input").val() + "<br></li>");
    $("input").val("");

    let checkButton = $("<button type='submit' class='checkButton'>Check</button>");
    let delButton = $("<button type='submit' class='delButton'>Delete</button>");
    newItem.append(checkButton, delButton);
    $("ul").append(newItem);
});

$("ul").on("click", ".delButton", function(e) {
    e.preventDefault();
    $(this).parent().remove();
});

$("ul").on("click", ".checkButton", function(e) {
    e.preventDefault();

    if ($(this).parent().css("text-decoration") == "line-through solid rgb(0, 0, 0)") {
        $(this).parent().css("text-decoration", "");
    } else {
        $(this).parent().css("text-decoration", "line-through");
    }
})