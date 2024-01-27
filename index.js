let boxes = document.querySelectorAll(".box")
let reset = document.querySelector("#reset")
let win = document.querySelector(".winner")
let container = document.querySelector(".container")
let turnO = true;

let patterns= [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        if(turnO){
            console.log("button are clicked")
            box.innerText = "X"
            turnO = false;
        }else{
            box.innerText = "O"
            turnO = true;
        }
        box.disabled = true;
        winner()
    })
})

const winner = ()=>{
    for(let pattern of patterns){
        let pattern1 = boxes[pattern[0]].innerText;
        let pattern2 = boxes[pattern[1]].innerText;
        let pattern3 = boxes[pattern[2]].innerText;
        
        if(pattern1 != "" && pattern2 != "" && pattern3 != ""){
            if(pattern1 == pattern2 && pattern2 == pattern3){
                win.innerText = `winner${pattern1}`
                console.log("winner")
                for(let box of boxes){
                    box.disabled = true;
                    
                }
            }
        }
    }
}

reset.addEventListener("click",()=>{
    turnO = true;
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
        win.innerText = ""

    }
})



