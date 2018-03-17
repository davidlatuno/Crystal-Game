var targetNum = 0;

var userNum = 0;

var crystalRandom = [];

var crystalNumber;

function randomNum() {

    targetNum = Math.floor(Math.random() * 100) + 1;

    $("#targetNumber").text(targetNum);

    for(var i = 0; i < 4; i++) {

        var randomCrystalNumber = Math.floor(Math.random() * 9) + 1;

        crystalRandom.push(randomCrystalNumber);

    }

}

function crystalValue() {

    $(".blue").attr("data-crystalvalue", crystalRandom[0]);
    $(".green").attr("data-crystalvalue", crystalRandom[1]);
    $(".red").attr("data-crystalvalue", crystalRandom[2]);
    $(".white").attr("data-crystalvalue", crystalRandom[3]);

}

randomNum();

crystalValue();


$(document).ready(function () {

    $(".image").on("click", function () {

        crystalNumber = ($(this).attr("data-crystalvalue"))

        crystalNumber = parseInt(crystalNumber);

        userNum = userNum + crystalNumber

        $("#userNumber").text(userNum);


    })





})