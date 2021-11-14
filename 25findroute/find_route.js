"use strict";

const container = document.querySelector(".container");
const worldContainer = document.querySelector(".world");
const answer = document.querySelector(".answer");
const addBlockBtn = document.querySelector(".add-block");
const findBtn = document.querySelector(".find-btn");

let numBlock = 0;

const makeBlock = () => {
    numBlock++;
    const p = document.createElement("p");
    const span1 = document.createElement("span");
    span1.innerText = `장애물${numBlock} 행:`;
    const input1 = document.createElement("input");
    input1.classList.add(`br${numBlock}`);
    input1.setAttribute("type", "number");
    const span2 = document.createElement("span");
    span2.innerText = `장애물${numBlock} 열:`;
    const input2 = document.createElement("input");
    input2.classList.add(`bc${numBlock}`);
    input2.setAttribute("type", "number");
    p.appendChild(span1);
    p.appendChild(input1);
    p.appendChild(span2);
    p.appendChild(input2) ;
    container.appendChild(p);
}

const findRoute = () => {
    const wr = parseInt(document.querySelector(".wr").value);
    const wc = parseInt(document.querySelector(".wc").value);
    const tr = parseInt(document.querySelector(".tr").value);
    const tc = parseInt(document.querySelector(".tc").value);
    const blist = [];
    for (let i=0; i < container.childNodes.length; i++) {
        blist.push([parseInt(container.querySelectorAll("input")[(i*2)].value), parseInt(container.querySelectorAll("input")[(i*2+1)].value)])
    };

    const world =[];
    for (let i=0; i<wr; i++) {
        world.push([]);
        for (let j=0; j<wc; j++) {
            world[i].push("⚪");
        }
        
    };

    world[0][0] = "🔵";
    world[tr-1][tc-1] = "🔴";
    for (let i=0; i<blist.length; i++) {
        world[blist[i][0]-1][blist[i][1]-1] = "⚫";
    }

    worldContainer.innerHTML = "";
    for (let i=0; i<wr; i++) {
        worldContainer.innerHTML += world[i];
        worldContainer.innerHTML += "<br>";
    };
    worldContainer.innerHTML += "<br>출발:🔵 장애물:⚫ 목적지:🔴";

    
    let result = 0;
    if (wr == 0 && wc == 0) {
        result = 0;
    } else {
        let point = [[1, 1]];
        let checkPoint = [];
        let path = [];
        while (!JSON.stringify(checkPoint).includes(`[${tr},${tc}]`) && result != -1) {
            checkPoint = [];
            for (let i=0; i<point.length; i++) {
                let r = point[i][0],
                    c = point[i][1];

                if ((!JSON.stringify(blist).includes(`[${r+1},${c}]`) && !JSON.stringify(path).includes(`[${r+1},${c}]`)) && r+1 <= wr) {
                    if (!JSON.stringify(checkPoint).includes(`[${r+1},${c}]`)) checkPoint.push([r+1, c]);
                }
                if ((!JSON.stringify(blist).includes(`[${r-1},${c}]`) && !JSON.stringify(path).includes(`[${r-1},${c}]`)) && r-1 > 0) {
                    if (!JSON.stringify(checkPoint).includes(`[${r-1},${c}]`)) checkPoint.push([r-1, c]);
                }
                if ((!JSON.stringify(blist).includes(`[${r},${c+1}]`) && !JSON.stringify(path).includes(`[${r},${c+1}]`)) && c+1 <= wc) {
                    if (!JSON.stringify(checkPoint).includes(`[${r},${c+1}]`)) checkPoint.push([r, c+1]);
                }
                if ((!JSON.stringify(blist).includes(`[${r},${c-1}]`) && !JSON.stringify(path).includes(`[${r},${c-1}]`)) && c-1 > 0) {
                    if (!JSON.stringify(checkPoint).includes(`[${r},${c-1}]`)) checkPoint.push([r, c-1]);
                }
            };
            for (let i=0; i<point.length; i++) {
                path.push(point[i]);
            };
            point = [];
            if (checkPoint.length != 0) {
                for (let i = 0; i<checkPoint.length; i++) {
                    point.push(checkPoint[i]);
                }
                result++;
            } else {
                result = -1;
            }
        }
    }

    if (result == -1){answer.innerText = `타겟까지 갈 수 없습니다.`} 
    else {answer.innerText = `타겟까지 ${result}칸입니다.`};
}



addBlockBtn.addEventListener("click", makeBlock);
findBtn.addEventListener("click", findRoute);
