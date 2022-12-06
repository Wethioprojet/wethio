var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
var aBoxSize,aBoxCount,bBoxCount,bBoxSize;
if (isMobile) {
    localStorage.setItem("walletType","mobile")
    aBoxSize=300;
    aBoxCount=10;
    bBoxSize=300;
    bBoxCount=4;
} else {
    aBoxSize=300;
    aBoxCount=7;
    bBoxSize=300;
    bBoxCount=1;
    localStorage.setItem("walletType","desktop")
   
}

var slider = document.getElementById("myRange");
slider.oninput = function() {
    maxpos=aBoxSize*aBoxCount;
    var scrollpos=(maxpos*this.value)/100;
    document.getElementById('id_main_div').scrollLeft = scrollpos;
}
var slider_copy=document.getElementById("myRange-copy");
slider_copy.oninput = function() {
    maxpos=aBoxSize*aBoxCount;
    var scrollpos=(maxpos*this.value)/100;
    document.getElementById('id_main_div-copy').scrollLeft = scrollpos;
}



var sliderAgain = document.getElementById("myRangeCard");
sliderAgain.oninput = function() {
    maxpos=bBoxSize*bBoxCount;
    var scrollpos=(maxpos*this.value)/100;


    document.getElementById('id_main_div_again').scrollLeft = scrollpos;
}
var sliderAgain = document.getElementById("myRangeCard-copy");
sliderAgain.oninput = function() {
    maxpos=bBoxSize*bBoxCount;
    var scrollpos=(maxpos*this.value)/100;


    document.getElementById('id_main_div_again-copy').scrollLeft = scrollpos;
}

$('.discover_carousel').owlCarousel({
    loop:false,
    autoplay: false,
    margin:15,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        820:{
            items:2
        },
        1100:{
            items:3
        }
    }
});

$('ul.nav').find('a').click(function(){
    var $href = $(this).attr('href');
    var $anchor = $($href).offset();

    console.log($anchor,$href,"work")
    $('html,body').animate({
        scrollTop: $anchor.top },
        'slow');

    return false;
});

var elements = document.getElementsByClassName("st0");
var elements_again = document.getElementsByClassName("st00");
var myFunction = function() {
    var attribute = this.getAttribute("data-el");
    switch (attribute) {
        case "add_1":
        case "add_2":
        case "add_3":
            try {
                document.getElementById('add_1_map').setAttribute("points", "400 230,405 238,400 245,390 245,385 238,390 230");
                document.getElementById('add_2_map').setAttribute("points", "523 221,527 228,523 236,513 236,509 228,513 221");
                document.getElementById('add_3_map').setAttribute("points", "417 160,421 167,417 175,407 175,403 167,407 160");
                
                if(attribute=="add_1"){
                    this.setAttribute("points", "405 225,415 243,405 260,385 260,375 243,385 225");
                }else if(attribute=="add_2"){
                    this.setAttribute("points", "528 216,537 233,528 250,508 250,498 233,508 216");
                }else if(attribute=="add_3"){
                    this.setAttribute("points", "422 155,431 172,422 190,402 190,393 172,402 155");
                }
                
                
                var i = 0;
                for (var i = 1; i <= 3; i++) {
                    document.getElementById('add_' + i).classList.remove('focused');
                    document.getElementById('add_' + i + '_map').style.fill = "#c1d2e4";
                }
                this.style.fill = "#33e0f1";
                document.getElementById(attribute).style.strokeWidth = "2";
                document.getElementById(attribute).classList.add("focused");

            } catch (error) {
                console.log(error);
            }
            break;
    }

};

var myFunction_copy = function() {
    var attribute = this.getAttribute("data-el");
    switch (attribute) {
        case "add_11":
        case "add_22":
        case "add_33":
            try {
                document.getElementById('add_11_map').setAttribute("points", "400 230,405 238,400 245,390 245,385 238,390 230");
                document.getElementById('add_22_map').setAttribute("points", "523 221,527 228,523 236,513 236,509 228,513 221");
                document.getElementById('add_33_map').setAttribute("points", "417 160,421 167,417 175,407 175,403 167,407 160");
                
                if(attribute=="add_11"){
                    this.setAttribute("points", "405 225,415 243,405 260,385 260,375 243,385 225");
                }else if(attribute=="add_22"){
                    this.setAttribute("points", "528 216,537 233,528 250,508 250,498 233,508 216");
                }else if(attribute=="add_33"){
                    this.setAttribute("points", "422 155,431 172,422 190,402 190,393 172,402 155");
                }
                
                
                var i = 0;
                for (var i = 1; i <= 3; i++) {
                    document.getElementById('add_' + i+''+i).classList.remove('focused');
                    document.getElementById('add_' + i +''+i+'_map').style.fill = "#c1d2e4";
                }
                this.style.fill = "#33e0f1";
                document.getElementById(attribute).style.strokeWidth = "2";
                document.getElementById(attribute).classList.add("focused");

            } catch (error) {
                console.log(error);
            }
            break;
    }

};
for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('mouseover', myFunction, false);
}

for (var i = 0; i < elements_again.length; i++) {
    elements_again[i].addEventListener('mouseover', myFunction_copy, false);
}
function locateOnMap(ele) {
    // alert(ele.id);
    var attribute = ele.id;
    var currentMap = document.getElementById(attribute + "_map");
    try {
        document.getElementById('add_1_map').setAttribute("points", "400 230,405 238,400 245,390 245,385 238,390 230");
        document.getElementById('add_2_map').setAttribute("points", "523 221,527 228,523 236,513 236,509 228,513 221");
        document.getElementById('add_3_map').setAttribute("points", "417 160,421 167,417 175,407 175,403 167,407 160");

        if (attribute == "add_1") {
            currentMap.setAttribute("points", "405 225,415 243,405 260,385 260,375 243,385 225");
        } else if (attribute == "add_2") {
            currentMap.setAttribute("points", "528 216,537 233,528 250,508 250,498 233,508 216");
        } else if (attribute == "add_3") {
            currentMap.setAttribute("points", "422 155,431 172,422 190,402 190,393 172,402 155");
        }
        var i = 0;
        for (var i = 1; i <= 3; i++) {
            document.getElementById('add_' + i).classList.remove('focused');
            document.getElementById('add_' + i + '_map').style.fill = "#c1d2e4";
        }
        currentMap.style.fill = "#33e0f1";
        document.getElementById(attribute).style.strokeWidth = "2";
        document.getElementById(attribute).classList.add("focused");

    } catch (error) {
        console.log(error);
    }
}


function locateOnMap_copy(ele) {
    
    var attribute = ele.id;
    var currentMap = document.getElementById(attribute + "_map");
    try {
        document.getElementById('add_11_map').setAttribute("points", "400 230,405 238,400 245,390 245,385 238,390 230");
        document.getElementById('add_22_map').setAttribute("points", "523 221,527 228,523 236,513 236,509 228,513 221");
        document.getElementById('add_33_map').setAttribute("points", "417 160,421 167,417 175,407 175,403 167,407 160");

        if (attribute == "add_11") {
            currentMap.setAttribute("points", "405 225,415 243,405 260,385 260,375 243,385 225");
        } else if (attribute == "add_22") {
            currentMap.setAttribute("points", "528 216,537 233,528 250,508 250,498 233,508 216");
        } else if (attribute == "add_33") {
            currentMap.setAttribute("points", "422 155,431 172,422 190,402 190,393 172,402 155");
        }
        var i = 0;
        for (var i = 1; i <= 3; i++) {
            document.getElementById('add_' + i+''+i).classList.remove('focused');
            document.getElementById('add_' + i + ''+i+'_map').style.fill = "#c1d2e4";
        }
        currentMap.style.fill = "#33e0f1";
        document.getElementById(attribute).style.strokeWidth = "2";
        document.getElementById(attribute).classList.add("focused");

    } catch (error) {
        console.log(error);
    }
}