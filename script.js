let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset-btn");
let newbtn=document.querySelector("#new-btn");
let msgcon=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turn0=true;
let cnt=0;

let winpat=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]


boxes.forEach((box)=>{
    box.addEventListener("click",(e)=>{
        if(turn0)
        {
          box.innerText="O";
          box.classList.add("blu");
          turn0=false;
        }   
        else
        {
            box.classList.remove("blu");
            box.innerText='X';
            turn0=true;
        }

        cnt++;
        box.disabled="true";
        console.log(cnt);     
        if(cnt===9)
        {   
            showwinner("Game is Draw");
        }
        else
        {
            checkwinner(cnt);
        }
    })
})

const resetgame=()=>{
    turn0=true;
    enableboxes();
    msgcon.classList.add("hide");
}

const disableboxes=()=>{
    for(let box of boxes)
    {
        box.disabled=true;
    }
}

const enableboxes=()=>{
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText="";
    }
}

const showwinner=(e)=>{
    msg.innerText=e;
    msgcon.classList.remove("hide");
    disableboxes();
    cnt=0;
}

const checkwinner=()=>{
    for(let pattern of winpat)
    {
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;

        if(pos1!="" && pos2!="" && pos3!="")
        {
            if(pos1===pos2 && pos2===pos3)
            {
                 showwinner(`Congratulation, Winner is ${pos1}`);
            }
        }
    }

}


newbtn.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);