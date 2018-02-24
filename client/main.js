$(document).ready(init);

function init(){
    $('#convert').on('click', convertString);
}

function convertString(){
    $.ajax({
        url: '/test',
        success: resp => {
            addImgsToDom(resp);
        }
    });
}

function addImgsToDom(imgsArr){
    const $imgs = imgsArr.map((imgObj, i) => {
        return createImg(imgObj.fileName);
    });
    $('#root').append($imgs);
}

function createImg(src){
    return $('<img>', {
        src: `images/${src}`,
        class: 'converted-img'
    });
}
