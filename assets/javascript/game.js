var targetNum = 0;

var userNum = 0;

var wins = 0;

var lose = 0;

var crystalRandom = [];

var crystalNumber;


// Creates random number for target and crystals
function randomNum() {

    targetNum = Math.floor(Math.random() * 102) + 19;

    $("#targetNumber").text(targetNum);

    for (var i = 0; i < 4; i++) {

        var randomCrystalNumber = Math.floor(Math.random() * 12) + 1;

        crystalRandom.push(randomCrystalNumber);

    }

}

// addes value attribute to the crystals
function crystalValue() {

    $(".blue").attr("data-crystalvalue", crystalRandom[0]);
    $(".green").attr("data-crystalvalue", crystalRandom[1]);
    $(".red").attr("data-crystalvalue", crystalRandom[2]);
    $(".yellow").attr("data-crystalvalue", crystalRandom[3]);

}

function updateScore() {

    $("#wins").text(wins);
    $("#lose").text(lose);


}


// on win or lose reset values and html
function reset() {

    crystalRandom.splice(0, crystalRandom.length);

    randomNum();

    crystalValue();

    userNum = 0;

    $("#userNumber").text(userNum);

}

randomNum();

crystalValue();


$(document).ready(function () {


    // addes crystal values to user total
    $(".btn").on("click", function () {

        crystalNumber = ($(this).attr("data-crystalvalue"))

        crystalNumber = parseInt(crystalNumber);

        userNum = userNum + crystalNumber

        $("#userNumber").text(userNum);


        if (userNum === targetNum) {

            wins++;

            reset();

        } else if (userNum > targetNum) {


            lose++;

            reset();

        }


        updateScore();

    })
})