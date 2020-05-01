let color = "purple";
let number = 101;
let word = "cool";

if (color === "purple") {
    $(".north").css("background", "purple")
}

if (number > 100) {
    $(".east").text("big numbah")
}   else {
    $(".east").text("lol dats smal")
}

if (word === "cool") {
    $(".south").text("yer a lizard, ary")
}   else {
    $(".west").text("yer a lizard, ary")
}

let array = ['Pam', 'Sam', 'Ben', 'Fred', 'Ken', 'Lev'];


array.forEach(function(names) {
    if (names != 'Lev')
    $("ul").append('<li>'+ names +'</li>')
    else 
    $("ul").append('<li><strong>'+ names +'</strong></li>')
});

let additionalBlock = {
    title: "Added with javascript",
    text: "This block was added using JavaScript's jQuery library. How awesome!" 
};


$("p").append('<h1>' + title + '<h1>');
