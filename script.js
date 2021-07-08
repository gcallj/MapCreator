var c = document.getElementById("myCanvas");

const  heightData = document.querySelector('[data-height]');
const  widthData = document.querySelector('[data-width]');
const  applyButton = document.querySelector('[data-button]');

var ctx = c.getContext("2d");
var loadTag = true;


let myWidth,myHeight;

applyButton.addEventListener('submit',function(e){ //Quando botão form for pressionado
    e.preventDefault();//evitar que pagina atualize
    if(widthData.value<=0 || heightData.value<=0)return
    myWidth = widthData.value;
    myHeight = heightData.value;
    console.log(`altura: ${myHeight} , largura: ${myWidth}`); 
    widthData.value=null;
    heightData.value=null;
})

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
