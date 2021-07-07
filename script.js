var c = document.getElementById("myCanvas");


var ctx = c.getContext("2d");
var loadTag = true;
//console.log(c.height);
for (let j = 0; j < c.height; j = j + 10) {
    for (let i = 0; i < c.width; i = i + 10) {
        ctx.beginPath();
        ctx.lineWidth = "0";
        ctx.rect(i, j, 10, 10);
        ctx.strokeStyle = "#ffffff";
        ctx.stroke();
    }
}

c.addEventListener('click', (e) => {
    const pos = {
        x: e.clientX - c.offsetLeft,
        y: e.clientY - c.offsetTop
    };

    const myX = pos.x - (pos.x % 10);
    const myY = pos.y - (pos.y % 10);
    var p = ctx.getImageData(myX + 1, myY + 1, 1, 1).data;

    if ((p[1] == 255 || p[3] == 0)) {
        ctx.fillStyle = 'black';
        ctx.fillRect(myX, myY, 10, 10);
    }
    else{
        ctx.fillStyle = 'white';
        ctx.fillRect(myX, myY, 10, 10); 
    }
    console.log(`click:  x:${pos.x} , y:${pos.y}`);
    console.log(p);
});

