var canvas = new fabric.Canvas('c',{backgroundColor : "#fff"});
function addImage(url) {
    fabric.Image.fromURL(url, function(img){
        canvas.add(img);
    });
}
addImage('images/skullredeyes.png')
addImage('images/skullspider2.png')