console.log("pehla project")
let music = new Audio("music.mp3")
let ting = new Audio("ting.mp3")
let click = new Audio("click.wav")
let gameover = new Audio("gameover.mp3")
let turn = "X"

let isgameover = false

const changeTurn  = () =>{
    return turn === "X"?"0":"X";
}

var cnt=0

const chkwin = () => {
    let boxtxt= document.getElementsByClassName("boxtext")
    let wins=[
        [0,1,2,1],
        [3,4,5,1],
        [6,7,8,1],
        [0,3,6,1],
        [1,4,7,1],
        [2,5,8,1],
        [0,4,8,1.414],
        [6,4,2,1.414],
    ]
    wins.forEach(e =>{
        if((boxtxt[e[0]].innerText===boxtxt[e[1]].innerText) && (boxtxt[e[0]].innerText===boxtxt[e[2]].innerText) && (boxtxt[e[1]].innerText!=="")){
            document.querySelector('.info').innerText = boxtxt[e[0]].innerText + " Won"
            isgameover = true
            gameover.play();
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.display = "block"
        }
    })
}

reset.addEventListener('click', ()=>{
    let boxtxt= document.getElementsByClassName("boxtext")
    Array.from(boxtxt).forEach(ele =>{
        ele.innerText=""
    })
    turn = "X"
    isgameover= false
    cnt=0
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.display = "none"
    document.querySelector('.info').innerText = "Turn for " + turn
})

let boxes= document.getElementsByClassName("box");
Array.from(boxes).forEach(elm =>{
    let boxtext=elm.querySelector('.boxtext');
    elm.addEventListener('click',()=>{
        if(boxtext.innerText == '' && !isgameover){
            if(turn==="X")
            {elm.style.color="rgba(240,40,40,0.9)"}
            if(turn==="0")
            {elm.style.color="rgba(40,40,240,0.9)"}
            boxtext.innerText=turn;
            turn = changeTurn();
            cnt+=1;
            click.play();
            chkwin();         
            if(!isgameover && cnt!=9)
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn
            if(cnt==9 && !isgameover)
                document.getElementsByClassName("info")[0].innerText = "Game Over"   
        }
    })
})