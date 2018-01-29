// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

var isNewColor = false;
var colors = [];
var colorPicked = '#000000';
var colorCount = 0;

function makeGrid() {
    var height, width, count = 0;

    height = document.getElementById('sizePicker').elements[0].value;
    width = document.getElementById('sizePicker').elements[1].value;

    if ($('.pixel').length) {
        $('.pixel').remove();
    }

    if ($('.rows').length) {
        $('.rows').remove();
    }

    for (var i = 0; i < height; i++) {
        $('#pixelCanvas').append(`<div class="row${i} rows"></div>`);
        for (var j = 0; j < width; j++) {
            $(`.row${i}`).append(`<div class="pixel" id="color${count}" onClick="colorPixel(color${count})"></div>`);
            count++;
        }
    }
}

function colorPixel(pixel) {
    var currentColor = colorPicked;
    // var currentColor = document.getElementById('colorPicker').value;
    // if (isNewColor) {
    //     currentColor = document.getElementById('colorPicker').value;
    // } else {
    //     currentColor = oldPixelColor();
    // }

    $(pixel).css('background-color', currentColor);
}

// function oldPixelColor(foo) {
//     console.log("HERE");
//     console.log(foo);
//     colorPicked = document.getElementById(foo).style.backgroundColor;
//     console.log(colorPicked);
// }

function saveColor(color) {
    var colorString = color.replace('#', '');

    $('#colorHistory').append(`<div id="${colorString}" class="old_color" onclick="oldPixelColor(${colorString})"></div>`)
    $(`#${colorString}`).css('background-color', color);
    // console.log(color);
}

function newColor() {
    var color = document.getElementById('colorPicker').value;
    
    // console.log(color);

    if (!colors.includes(color)) {
        isNewColor = true;
        colors.push(color);
        saveColor(color);
        colorPicked = color;
    } else {
        isNewColor = false;
    }
    // console.log(isNewColor);
    // console.log(colors);
}