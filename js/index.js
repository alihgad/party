function closeAll() {
    $(".cardion").slideUp(500)
}


for (let i = 0; i < $(".singer").length; i++) {
    $(".singer").eq(i).click(function (e) {
        if ($(`#details${i + 1}`).css("display") == "none") {

            closeAll();
            $(`#details${i + 1}`).slideDown(500);

        } else {

            $(`#details${i + 1}`).slideUp(500);
        }
    })
}

$(`#details1`).slideDown();





function calcDate() {
    const partyDate = new Date("2025-02-17");
    const now = new Date();
    const deff = partyDate - now
    let days = Math.floor(deff / 1000 / 60 / 60 / 24)
    let hours = Math.floor(deff / 1000 / 60 / 60 - days * 24)
    let minutes = Math.floor(deff / 1000 / 60 - hours * 60 - days * 24 * 60)
    let seconds = Math.floor(deff / 1000 - minutes * 60 - hours * 60 * 60 - days * 24 * 60 * 60)

    $("#days").html(`${days} D`)
    $("#hours").html(`${hours} H`)
    $("#minutes").html(`${minutes} M`)
    $("#seconds").html(`${seconds} S`)
}

setInterval(calcDate, 1000)
calcDate()

$("#messege").on("input", function (e) {

    $("#chracter-counter").html(`${100 - $(this).val().length}`)

})





$(".cont").css({width:0 , padding : 0 , margin : 0})
$(".cont ul a").css({display : 'none'})


$(".inner").click(function () {
    $(this).animate({ right: '-75%' } )
    $('.home').animate({ width: "60%"}, 400)
    $('.home').addClass("end-0")
    $(".cont").animate({width:'30%'} , 400)
    $(".cont ul a").css({display : 'inline'})


})

$('.fa-x').click(function () {
    
    $(".cont").animate({width: '0'} , 400 , function () {
        $(".cont ul a").css({display : 'none'})

    })
    $('.home').animate({ width: "100%"}, 400)
    $(".inner").animate({ right: '45%' } )




})

